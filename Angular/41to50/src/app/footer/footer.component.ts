import { Component, OnInit } from '@angular/core';
import {UserdataService} from '../services/userdata.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  user:any = [];
  constructor(private userdata:UserdataService)
  {
    console.warn(userdata.users());
    this.user = userdata.users();
  }

  ngOnInit(): void {
  }

}
