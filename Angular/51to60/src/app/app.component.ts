import { Component } from '@angular/core';

/* Model Creation for data Validation */
interface datatype
{
  name:string,
  id:number,
  indian:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '51to60';
  getdata()
  {
    const data:datatype = {
      name:'Anil',
      id:34,
      indian:true
    }
    return data;
  }
}
