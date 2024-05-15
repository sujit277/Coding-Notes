import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostBinding]',
})
export class HostBindingDirective {
  constructor() {}

  @HostBinding('style.color') color!: string;

  @HostListener('mouseenter') changeColor() {
    this.color = 'red';
  }
}
