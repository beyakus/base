import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo.component';
import { SharedModule } from '@shared/shared-modules/shared.module';
import { MaterialModule } from '@shared/material/material.module';
import { RequestHandlerModule } from '@services/interceptors/request-handler/request-handler.module';
import { ValidationModule } from '@cmx-lib/validation';
import { messagesErrorForm } from '@config/messages/messagesErrorForm';

const routes: Routes = [{ path: '', component: DemoComponent }];
@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MaterialModule,
    ValidationModule.forChild({ messages: messagesErrorForm }),
  ],
  providers: [RequestHandlerModule],
})
export class DemoModule {}
