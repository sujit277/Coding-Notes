import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() loggedIn = new EventEmitter<User>();
  @Input() enabled = true;

  constructor() { }

  ngOnInit(): void {
  }

  login(email: any, password: any) {
    console.log(`Login ${email} ${password}`);
    if (email && password) {
      this.loggedIn.emit(new User(email, password));
    }
  }
                                    
}
