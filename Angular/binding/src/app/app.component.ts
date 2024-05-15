import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding';
  name = "EPAM Systems"
  today = Date();
  color = "yellow";
  show  = true;
  names = ["Sujit", "Puja", "Chandani","Anjali"];

  getvalue(item: string) {
    console.warn(item);
  }
}
