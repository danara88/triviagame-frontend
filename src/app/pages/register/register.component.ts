import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formCustom: FormGroup;

  constructor( 
    private fb: FormBuilder,
    private userService: UserService) { 
    this.formCustom = new FormGroup({});
  }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * Creates the register form
   */
  createForm() {
    this.formCustom = this.fb.group({
      fullName: ['', [Validators.required]],
      email:    ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      password: ['', [Validators.required, Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[?!@#$%^&*_=+-]).{8,}")]],
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

    // Register API
    this.userService.register(this.formCustom.value).subscribe(user => {
      console.log(user);
    }, error => {
      console.log(error);
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
