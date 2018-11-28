import {Directive, ElementRef, Input} from '@angular/core';
import * as Inputmask from 'inputmask';


@Directive({
  selector: '[app-restrict-input]',
})
export class RestrictInputDirective {

  // map of some of the regex strings I'm using
  private regexMap = {
    decimal: '^[0-9]*$',
    hexadecimal: '^[0-9A-Fa-f]*$',
    octal: '^[0-7]*$',
    binary: '^[01]*$',
  };

  constructor(private el: ElementRef) {}

  @Input('app-restrict-input')
  public set defineInputType(type: string) {
    Inputmask({regex: this.regexMap[type], placeholder: ''})
      .mask(this.el.nativeElement);
  }

}
