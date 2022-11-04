import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {

  @Input() parentData!: string;
  @ContentChild('child') contentChild!: ElementRef;
  constructor() {
    console.log('Constructor Executed');
  }
  
  ngOnInit(): void {
    console.log('OnInit Executed');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges Executed');
  }

  ngDoCheck(): void {
    console.log('DoCheck Executed');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit Executed', this.contentChild);
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked Executed', this.contentChild);
    this.contentChild.nativeElement.setAttribute('style', `color:${this.parentData}`);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit Executed');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked Checked');
  }

}
