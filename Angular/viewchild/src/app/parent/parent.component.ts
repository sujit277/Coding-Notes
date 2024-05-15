import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit, AfterViewInit {
  constructor() {}

  @ViewChild('parentView') parent!: ElementRef;
  @ViewChild('childView') child!: ChildComponent;

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    console.log(this.parent);
    this.parent.nativeElement.style.color = 'red';
    this.child.element.nativeElement.style.color = 'green';
  }

  giveAlert() {
    this.child.childMethod();
  }
}
