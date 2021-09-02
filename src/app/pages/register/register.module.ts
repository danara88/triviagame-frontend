import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
