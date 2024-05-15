import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { increment, decrement, reset } from '../state/counter_actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counterbuttons',
  templateUrl: './counterbuttons.component.html',
  styleUrls: ['./counterbuttons.component.css'],
})
export class CounterbuttonsComponent implements OnInit {
  constructor(private store: Store<{ counter: { counter: number } }>) {}

  ngOnInit(): void {}

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
