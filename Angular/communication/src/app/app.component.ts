import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'childtoparent';
  parentData: any;
  componentName = "Child Component"

  parentFunction(data: any) {
    this.parentData = data;
  }
}
