import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
