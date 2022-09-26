import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DasboardComponent } from './dasboard.component';

const routes: Routes = [
  {
    path: '',
    component: DasboardComponent,
    children: [
      {
        /*
         * Todas las rutas deben cargarse en lazy load
         * Demo
         */
        path: 'demo',
        loadChildren: () =>
          import('./demo/demo.module').then((m) => m.DemoModule),
      },
    ],
  },
];
@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DasboardRoutingModule {}
