import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { RegisterRoutingModule } from './register-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { RegisterComponent } from './register.component';
import { HeaderComponent } from '../layout/header/header.component';

@NgModule({
  declarations: [
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule
  ]
})
export class RegisterModule { }
