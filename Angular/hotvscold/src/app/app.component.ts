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

    /* //Cold Observable
    const observable = new Observable((observer: any) => {
      observer.next(Math.random());
    });

    // Subscription 1
    observable.subscribe((data: any) => {
      console.log(data); 
    });

    // Subscription 2
    observable.subscribe((data: any) => {
      console.log(data); 
    }); */

    /* The data is produced inside the Observable, making it cold. We have two 
    subscriptions which subscribe at the same time. Since the 
    Observable creates a new execution for every subscriber and the Observable 
    generates a random number, the data the subscriber receives is different.  */


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


    /* The data producer out of the Observable. We still have two subscribers and the 
    Observable will still execute two times, but since the data is produced outside 
    the Observable our subscriptions will receive the same data. */

  }
}
