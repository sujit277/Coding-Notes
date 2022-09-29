import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counteroutput',
  templateUrl: './counteroutput.component.html',
  styleUrls: ['./counteroutput.component.css']
})
export class CounteroutputComponent implements OnInit {

  /* 
  @Input() counter!:number ;
  constructor() { }

  ngOnInit(): void {
  } 
  */

  counter!:number;
  constructor(private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit(): void {
    this.store.select('counter').subscribe((data)=>{
      this.counter = data.counter;
    })
  }

}
