import { Component, OnInit } from '@angular/core';
import { UserserviceService } from './servives/userservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'lifecyclehook1';
  user:any;

  constructor(private userService:UserserviceService){}

  ngOnInit(): void {
    this.user = this.userService.getuserdata();
  }
}
