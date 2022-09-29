import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  template: `
    <h1 class = third>
      Anjali Nakita Tmhare Piche hai
    </h1>
  `,
  styles: [
    `.third{
      color:orange;
      background-color:yellow
    }`
  ]
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
