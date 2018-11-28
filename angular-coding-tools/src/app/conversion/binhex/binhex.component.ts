import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-binhex',
  templateUrl: './binhex.component.html',
  styleUrls: ['./binhex.component.scss']
})
export class BinhexComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      decimal: ['0'],
      hex: ['0'],
      octal: ['0'],
      binary: ['0'],
    });
  }

  updateValues(val: number) {
    this.form.setValue({
      decimal: val.toString(10),
      hex: val.toString(16),
      octal: val.toString(8),
      binary: val.toString(2)
    });
  }

  onDecimalChange() {
    const val = parseInt(this.form.get('decimal').value, 10);
    this.updateValues(val);
  }

  onHexChange() {
    const val = parseInt(this.form.get('hex').value, 16);
    this.updateValues(val);
  }

  onOctalChange() {
    const val = parseInt(this.form.get('octal').value, 8);
    this.updateValues(val);
  }

  onBinaryChange() {
    const val = parseInt(this.form.get('binary').value, 2);
    this.updateValues(val);
  }
}
