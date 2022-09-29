import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { increment, decrement, reset } from '../state/counter_actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterbuttons',
  templateUrl: './counterbuttons.component.html',
  styleUrls: ['./counterbuttons.component.css']
})
export class CounterbuttonsComponent implements OnInit {

  /* 
  @Output() increase = new EventEmitter();
  @Output() decrease = new EventEmitter();
  @Output() resetting = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  increment(){
    this.increase.emit();
  }

  decrement(){
    this.decrease.emit();
  }

  reset(){
    this.resetting.emit();
  } 
  */

  constructor(private store: Store<{ counter: { counter: number } }>) { }

  ngOnInit(): void {
  }

  increment() {
    this.store.dispatch(increment())
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

}
