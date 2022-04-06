import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DasboardComponent } from './dasboard.component';

const routes: Routes = [
  {
    path: '',
    component: DasboardComponent,
    children: [], // TODO Implementar dentro las rutas del dashboard
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DasboardRoutingModule {}
