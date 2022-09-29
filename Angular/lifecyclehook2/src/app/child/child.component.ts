import { Component, OnChanges, OnInit, SimpleChanges,Input, DoCheck } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck {

  @Input() parentData!:string;
  @Input() product!:Product;
  constructor() { 
    console.log('Constructor called');
  }
  
  ngOnInit(): void {
    console.log('ngOnInit called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('NgOnChanges called');
  }

  ngDoCheck(){
    console.log('NgDocheck is called');
  }

}
