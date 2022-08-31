import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
import { environment } from '@env/environment';

const guards = environment.enableMsal ? [MsalGuard] : [];

const routes: Routes = [
  {
    path: '',
    canActivate: guards,
    loadChildren: () =>
      import('./pages/dashboard/dasboard.module').then((m) => m.DasboardModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
