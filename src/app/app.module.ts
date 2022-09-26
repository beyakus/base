import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslatorModule } from '@shared/translator/translator.module';
import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LoadingModule } from '@shared/loading/loading.module';
import { AzureMsalModule } from '@shared/azure-msal/azure-msal.module';
import { MsalRedirectComponent } from '@azure/msal-angular';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CmxWebComponentsModule.forRoot(),
    TranslatorModule,
    LoadingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      registrationStrategy: 'registerWhenStable:30000',
    }),
    AzureMsalModule,
  ],
  providers: [],
  bootstrap: [AppComponent, MsalRedirectComponent],
})
export class AppModule {}
