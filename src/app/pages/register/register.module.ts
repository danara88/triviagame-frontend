import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RegisterRoutingModule } from './register-routing.module';

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
    ReactiveFormsModule
  ]
})
export class RegisterModule { }
