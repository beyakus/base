import { Component } from '@angular/core';
import { StatusSidenavService } from '@services/statusSidenav/status-sidenav.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private _statusSidenavService: StatusSidenavService) {}

  changeStatus() {
    this._statusSidenavService.isOpen();
  }
}
