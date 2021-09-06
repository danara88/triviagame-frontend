import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formCustom: FormGroup;
  public loginFail: boolean;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {

    this.formCustom = new FormGroup({});
    this.loginFail = false;

  }

  ngOnInit(): void {
    this.createForm();
  }

  /**
   * Creates the login form
   */
  createForm() {
    this.formCustom = this.fb.group({
      email:    ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$")]],
      password: ['', [Validators.required]],
    });
  }

    /**
   * Submit the login form
   * @returns 
   */
  onSubmit() {
      if (this.formCustom.invalid) {
        this.loginFail = true;
        return;
      } 
  
      this.spinner.show();
      // Register API
      this.userService.login(this.formCustom.value).subscribe(resp => {
        this.spinner.hide();
        
        // Save token and identity in local storage
        localStorage.setItem('access_token',resp.token);
        localStorage.setItem('identity', JSON.stringify(resp.user));
  
        this.router.navigateByUrl('/home');
  
      }, error => {
        this.spinner.hide();
        this.loginFail = true;
        console.log(error);
        this.formCustom.controls.password.setValue('');
      });
  
  }


}
