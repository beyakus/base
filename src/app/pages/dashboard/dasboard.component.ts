import { Component } from '@angular/core';
import { menuSidenav } from '@config/menu/menu';
import { IMenu } from '@config/menu/menu.interfaces';
@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss'],
})
export class DasboardComponent {
  rtl = false;
  variant = 'positive';
  title = 'app';
  width = '12.5rem';
  termsRoute = '';
  termsPolicy = '';

  menu: IMenu[] = menuSidenav;
}
