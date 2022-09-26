import { Component } from '@angular/core';
import { capitalizeFirstLetter, formatYYYYMMDD } from '@cmx-lib/utils';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  title = capitalizeFirstLetter('hello word');
  date = formatYYYYMMDD(new Date());
}
