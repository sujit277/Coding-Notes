import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '11to20';
  Display = "";
  Sujit = "Sujit Kumar Verma";

  // Click Event on Button Click

  ClickEvent()
  {
    alert("You Clicked on button");
    console.warn("Hello");
  }

  // Input Printing on giving input

  getdata(Name:string)
  {
    console.warn(Name);
    this.Display = Name;
  }

  // Incrementing count value on button click

  Count = 0;
  Buttonclick()
  {
    this.Count++;
  } 
  Show = false;
  color = "yellow";
  Names = ["Sujit", "Puja", "Chandani","Anjali"];

}
