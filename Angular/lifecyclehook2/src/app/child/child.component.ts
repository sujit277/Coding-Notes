import { Component, OnChanges, OnInit, SimpleChanges,Input, DoCheck } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {
  @Input() userName!: string;
  @Input() user!: User;
  constructor() {}

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('NgOnChanges called');
  }

  ngDoCheck() {
    console.log('NgDocheck is called');
  }
}
