import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [],
  imports: [CommonModule, ToastrModule.forRoot()],
  providers: [ToastrService],
})
export class ToastrCMModule {}
