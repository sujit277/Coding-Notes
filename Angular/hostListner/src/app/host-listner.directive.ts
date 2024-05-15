import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostListner]',
})
export class HostListnerDirective {
  constructor(private element: ElementRef) {}

  @HostListener('mouseenter') applyColor() {
    this.element.nativeElement.style.color = 'red';
  }

  @HostListener('mouseout') removeColor() {
    this.element.nativeElement.style.color = 'black';
  }
}
