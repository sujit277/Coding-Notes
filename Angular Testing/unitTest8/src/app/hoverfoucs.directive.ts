import { style } from '@angular/animations';
import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverfoucs]'
})
export class HoverfoucsDirective {

  constructor() { }
  
  @HostBinding("style.background-color") backgroundColor!: string;

  @HostListener('mouseover') onHover() {
    this.backgroundColor = 'blue';
  }
  
  @HostListener('mouseout') onLeave() {
    this.backgroundColor = 'red';
  }

}
