import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CmxWebComponentsModule } from '@cmx-web-components/angular';
import { SharedTranslatoModule } from '@shared/translator/sharedTranslator.module';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    CmxWebComponentsModule,
    SharedTranslatoModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}
