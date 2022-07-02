import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: [
    `.first{
      color:red;
      background-color:blue;
    }`
  ]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
