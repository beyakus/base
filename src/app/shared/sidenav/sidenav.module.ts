import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedTranslatoModule } from '@shared/translator/sharedTranslator.module';
import { MaterialModule } from '@shared/material/material.module';
import { SidenavComponent } from './sidenav.component';
import { NavbarModule } from '../navbar/navbar.module';

@NgModule({
  declarations: [SidenavComponent],
  imports: [CommonModule, NavbarModule, SharedTranslatoModule, MaterialModule],
  exports: [SidenavComponent],
  providers: [],
})
export class SidenavModule {}
