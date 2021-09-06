import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formCustom: FormGroup;
  public messageError: string;
  public errorPasswordMessage: string;

  constructor( 
    private fb: FormBuilder,
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private router: Router) { 

    this.formCustom = new FormGroup({});
    this.messageError = '';
    this.errorPasswordMessage = '';


  }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * Creates the register form
   */
  createForm() {
    this.formCustom = this.fb.group({
      fullName: ['',  [Validators.required]],
      email:    ['',  [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      password: ['',  [Validators.required]],
      repeatPassword: ['', [Validators.required]]
    }, {
      validators: [this.notEqualPasswordsValidator('password', 'repeatPassword')]
    });
  }

  /**
   * Validates if the input is valid
   * @param fieldName 
   * @returns 
   */
  invalidField(fieldName: string): boolean {
    return this.formCustom.controls[fieldName].invalid 
              && this.formCustom.controls[fieldName].touched;
  }

  /**
   * Validates if the two passwords are equal
   * @returns 
   */
  notEqualPasswords(): boolean {
    let password = this.formCustom.controls['password'].value;
    let repeatPassword = this.formCustom.controls['repeatPassword'].value;

    return password !== repeatPassword;
  }

  /**
   * Submit the register form
   * @returns 
   */
  onSubmit() {
    if (this.formCustom.invalid) {
      // Display all the errors
      Object.values(this.formCustom.controls).forEach(control => {
        control.markAllAsTouched();
      });
      return;
    } 

    this.spinner.show();
    // Register API
    this.userService.register(this.formCustom.value).subscribe(resp => {
      this.spinner.hide();
      
      // Save token and identity in local storage
      localStorage.setItem('access_token',resp.token);
      localStorage.setItem('identity', JSON.stringify(resp.user));

      this.router.navigateByUrl('/home');

    }, error => {
      this.spinner.hide();
      console.log(error);
      let errorsObj = error.error;
      
      if (errorsObj.email) {
        this.messageError = errorsObj.email.msg;
        this.formCustom.controls.email.setErrors({ hasErrors: true });
      }
      if (errorsObj.password) {
        this.errorPasswordMessage = errorsObj.password.msg;
        this.formCustom.controls.password.setErrors({ hasErrors: true });
      }

      this.formCustom.controls.password.setValue('');
      this.formCustom.controls.repeatPassword.setValue('');
      
    });

  }

  /**
   * Custom validator to compare both passwords
   * @param pass1 
   * @param pass2 
   * @returns 
   */
  private notEqualPasswordsValidator(pass1: string, pass2: string) {
    return (formGroup: FormGroup) => {
      let password = formGroup.controls[pass1];
      let repeatPassword = formGroup.controls[pass2];
      if (password.value == repeatPassword.value) {
        repeatPassword.setErrors(null);
      } else {
        repeatPassword.setErrors({notEqual: true});
      }
    }
  }

}
