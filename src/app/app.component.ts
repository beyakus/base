import { Component } from '@angular/core';
import { MSALBaseComponent } from '@shared/azure-msal/msal';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends MSALBaseComponent {}
