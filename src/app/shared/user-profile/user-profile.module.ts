import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserProfileComponent } from './user-profile.component';
import { SharedModule } from '@shared/shared-modules/shared.module';
import { MaterialModule } from '@shared/material/material.module';

@NgModule({
  declarations: [UserProfileComponent],
  imports: [CommonModule, SharedModule, MaterialModule],
  exports: [UserProfileComponent],
})
export class UserProfileModule {}
