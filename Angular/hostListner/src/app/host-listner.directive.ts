import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHostListner]'
})
export class HostListnerDirective {

  constructor(private element:ElementRef) { }

  
@HostListener('mouseenter') changeColor(){
  this.element.nativeElement.style.color = 'red';
}

@HostListener('mouseout') backColor(){
  this.element.nativeElement.style.color = 'black';
}

}
