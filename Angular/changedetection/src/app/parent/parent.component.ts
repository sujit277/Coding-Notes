import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  counter = 0;

  ngOnInit(): void {
  }
  
  onIncrement(){
    this.counter++;
  }
}
