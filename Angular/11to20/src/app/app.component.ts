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
  Show = false;
  color = "yellow";
  Names = ["Sujit", "Puja", "Chandani","Anjali"];
  Count = 0;
  
  // Input Printing on giving input
  getdata(Name:string)
  {
    console.warn(Name);
    this.Display = Name;
  }

  // Incrementing count value on button click
  Buttonclick()
  {
    this.Count++;
  } 

}
