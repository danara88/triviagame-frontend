import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    LayoutComponent
  ]
})
export class LayoutModule { }
