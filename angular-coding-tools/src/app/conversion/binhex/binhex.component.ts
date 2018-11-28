import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-binhex',
  templateUrl: './binhex.component.html',
  styleUrls: ['./binhex.component.scss']
})
export class BinhexComponent implements OnInit {
  form: FormGroup;

  binary = new BehaviorSubject<string>('');
  hex = new BehaviorSubject<string>('');
  decimal = new BehaviorSubject<string>('');
  octal = new BehaviorSubject<string>('');

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      binary: ['0'],
      hex: ['0'],
      decimal: ['0'],
      octal: ['0'],
    });
  }
}
