import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrCMModule } from '@shared/toastr/toastr.module';
import { RequestHandlerInterceptor } from './request-handler.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { MsalInterceptor } from '@azure/msal-angular';

@NgModule({
  declarations: [],
  imports: [CommonModule, ToastrCMModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestHandlerInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true,
    },
    TranslateService,
  ],
})
export class RequestHandlerModule {}
