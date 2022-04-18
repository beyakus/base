import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DasboardRoutingModule } from './dasboard-routing.module';
import { DasboardComponent } from './dasboard.component';
import { SidenavModule } from '@shared/sidenav/sidenav.module';
import { SharedModule } from '@shared/shared-modules/shared.module';
@NgModule({
  declarations: [DasboardComponent],
  imports: [CommonModule, DasboardRoutingModule, SidenavModule, SharedModule],
})
export class DasboardModule {}
