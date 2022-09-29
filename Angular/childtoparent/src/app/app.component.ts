import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'childtoparent';
  sample:any;

parentFunction(data:any){
  this.sample = data;
  console.warn(data);
}
}
