import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {User} from "./user";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'lifecyclehook2';
  userName: any;
  email!: string;
  password!: string;
  user: User = new User();
  constructor() {}

  ngOnInit(): void {}

  handleUserName(event: any) {
    this.userName = event.target.value;
  }

  updateDetail() {
    //Creating new Object of user for new Reference
    this.user = new User();
    this.user.email = this.email;
    this.user.password = this.password;
  }
}
