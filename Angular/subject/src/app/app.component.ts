import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {ajax} from 'rxjs/ajax';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'subject';
  ngOnInit(): void {

    /* //Observables are unicast
    const observable = new Observable(obj=>obj.next(Math.random()));

    //Subscriber 1
    observable.subscribe(d=>console.log(d));

    //Subscriber 2
    observable.subscribe(d=>console.log(d)); */


    /* //Subjects

    const subject = new Subject();

    //Subscriber 1
    subject.subscribe(d =>console.log(d));

    //Subscriber 2
    subject.subscribe(d =>console.log(d));

    subject.next(Math.random());
 */

    //Subjects can act as Observale and Oberser both
    //ajax method we are using here to make a API call

    const subject = new Subject();
    const data = ajax('https://jsonplaceholder.typicode.com/users');
    
    subject.subscribe(d => console.log(d));
    subject.subscribe(d => console.log(d));

    data.subscribe(subject);



  }
  
}
