import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-look',
  template: `
    <h1 class = second>
      Hello Anjali ye Nakita h 
    </h1>
  `,
  styleUrls: ['./look.component.css']
})
export class LookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
