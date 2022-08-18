import { Component } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  templateUrl: './dasboard.component.html',
  styleUrls: ['./dasboard.component.scss'],
})
export class DasboardComponent {
  rtl = false;
  variant = 'positive';
  userName = 'Example user';
  title = 'app';
  width = '80px';
  termsRoute = '';
  termsPolicy = '';
}
