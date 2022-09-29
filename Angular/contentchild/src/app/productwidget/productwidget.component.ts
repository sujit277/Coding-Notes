import { AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-productwidget',
  templateUrl: './productwidget.component.html',
  styleUrls: ['./productwidget.component.css']
})
export class ProductwidgetComponent implements OnInit,AfterContentInit {

  @Input() products!:any; 
  @ContentChild("head")header!:ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterContentInit(): void {
    console.log(this.header);
    this.header.nativeElement.setAttribute('style','color:red');
  }
}
