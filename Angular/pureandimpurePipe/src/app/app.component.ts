import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pureandimpurePipe';

  search: any;
  
  data = [{ name: "Sujit Kumar Verma", age: 25, company: "EPAM Systems", CTC: "6LPA", EXP: "1.5 Years" },
  { name: "Chandani Kumari", age: 27, company: "Airbus", CTC: "24LPA", EXP: "4 Years" },
  { name: "Puja Kumari", age: 31, company: "CommonWeathBank", CTC: "32LPA", EXP: "8 Years" },
  { name: "Anjali Kumari", age: 23, company: "Accenture", CTC: "4.5LPA", EXP: "1.5 Years" }]
}
