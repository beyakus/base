import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@shared/material/material.module';
import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [NavbarComponent],
  imports: [CommonModule, MaterialModule],
  exports: [NavbarComponent],
  providers: [],
})
export class NavbarModule {}
