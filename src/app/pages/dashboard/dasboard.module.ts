import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardRoutingModule } from './dasboard-routing.module';
import { DasboardComponent } from './dasboard.component';
import { SharedModule } from '@shared/shared-modules/shared.module';
import { UserProfileModule } from '@shared/user-profile/user-profile.module';
import { MaterialModule } from '@shared/material/material.module';
import { TranslateService } from '@ngx-translate/core';
@NgModule({
  declarations: [DasboardComponent],
  imports: [
    CommonModule,
    DasboardRoutingModule,
    SharedModule,
    UserProfileModule,
    MaterialModule,
  ],
  providers: [TranslateService],
})
export class DasboardModule {}
