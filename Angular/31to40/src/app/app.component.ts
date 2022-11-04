import { Component } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '31to40';
  name = "EPAM Systems"
  Name = "Sujit Kumar Verma";
  Today = Date();

  Loginform = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  getvalue(item: string) {
    console.warn(item);
  }
  
  Update() {
    console.warn(this.Loginform.value);
  }
}
