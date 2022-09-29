import { Component } from '@angular/core';
import {FormControl,FormGroup,Validators} from "@angular/forms";
import {UserdataService} from './services/userdata.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '41to50';
  Loginform = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required])
  }); 
  Update()
  {
    console.warn(this.Loginform.value);
  }
  get username()
  {
    return this.Loginform.get('username');
  }
  get password()
  {
    return this.Loginform.get('password');
  }
  user:any = [];
  constructor(private userdata:UserdataService)
  {
    console.warn(userdata.users());
    this.user = userdata.users();
  }
}
