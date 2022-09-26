import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { SharedModule } from '@shared/shared-modules/shared.module';

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, SharedModule],
  exports: [LoadingComponent],
})
export class LoadingModule {}
