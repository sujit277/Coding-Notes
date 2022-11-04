import { getCurrencySymbol } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '21to30';
  
  users = [{Name:"Sujit",Company:"EPAM",Balance:[200,300]},
  {Name:"Anjali",Company:"Accenture",Balance:[200,300]},
  {Name:"Chandani",Company:"Mindtree",Balance:[200,300]},
  {Name:"Puja",Company:"IBM",Balance:[200,300]}]

  color = "green";
  Display = true;
  data = 10;

  updateColor()
  {
    this.color = "red";
  } 
  
  toggle()
  {
    this.Display = !(this.Display);
  }
  
  update()
  {
    this.data = Math.random();
  }
}
