import { Component, OnInit } from '@angular/core';
import { Observable, Observer, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'observable';

  ngOnInit(): void {
    //Observables are Unicast
    const observable = new Observable((obsever) => obsever.next(Math.random()));
    //Subscriber 1
    observable.subscribe((d) => console.log(d));
    //Subsriber 2
    observable.subscribe((d) => console.log(d));
    

    //Subscribing using Observer Object
    //  const myobservable = of(1, 2, 3);

    // //Create Observer object
    // const myObserver = {
    //   next: (x: number) => console.log('Observer got a next value:' + x),
    //   error: (err: Error) => console.log('Observer got an error:' + err),
    //   complete: () => console.log('Observer got a complete notification'),
    // };

    // //Subscribing using observer object
    // myobservable.subscribe(myObserver);

    // //Subscribing using positional arguments
    // myobservable.subscribe({
    //   next: (x) => console.log('Observer got a next value :' + x),
    //   error: (err) => console.log('Observer got an error:' + err),
    //   complete: () => console.log('Observer got a complete notifcation'),
    // });


    // //Creating observable with constructor
    // function sequenceSubscriber(observer: Observer<number>) {
    //   observer.next(1);
    //   observer.next(2);
    //   observer.next(3);

    //   //Unsubscribe function does not need to do anything in this
    //   //case because values are delivered synchronusly
    //   return { unsubscribe() {} };
    // }

    // const sequence = new Observable(sequenceSubscriber);
    // sequence.subscribe({
    //   next(num) {
    //     console.log(num);
    //   },
    //   complete() {
    //     console.log('Finished Sequence');
    //   },
    // });
  }
}
