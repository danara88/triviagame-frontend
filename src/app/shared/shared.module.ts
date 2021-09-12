import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptorService } from '../interceptors/auth-interceptor.service';

import { NgxSpinnerModule } from 'ngx-spinner';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    NgxSpinnerModule
  ],
  exports: [
    NgxSpinnerModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    }
  ]
})
export class SharedModule { }
