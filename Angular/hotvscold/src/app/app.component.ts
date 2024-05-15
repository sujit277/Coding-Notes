import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'hotvscold';

  ngOnInit(): void {

    //Cold Observable
    // const observable = new Observable((observer: any) => {
    //   observer.next(Math.random());
    // });
    // // Subscription 1
    // observable.subscribe((data: any) => {
    //   console.log(data);
    // });
    // // Subscription 2
    // observable.subscribe((data: any) => {
    //   console.log(data);
    // });


    //Hot Observable
    const random = Math.random();
    const observable = new Observable((observer: any) => {
      observer.next(random);
    });
    // Subscription 1
    observable.subscribe((data: any) => {
      console.log(data);
    });
    // Subscription 2
    observable.subscribe((data: any) => {
      console.log(data);
    });
  }
}
