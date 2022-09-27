import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { capitalizeFirstLetter, formatYYYYMMDD } from '@cmx-lib/utils';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent implements OnInit {
  title = capitalizeFirstLetter('hello word');
  date = formatYYYYMMDD(new Date());
  form: FormGroup;

  constructor(private _fb: FormBuilder) {}

  private _createForm(): void {
    this.form = this._fb.group({
      name: [
        null,
        [Validators.required, Validators.maxLength(5), Validators.email],
      ],
    });
  }

  ngOnInit(): void {
    this._createForm();
  }
}
