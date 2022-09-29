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

    /* const myobservable = new Observable((observer)=>{
      console.log("Observer Starts");
      observer.next("1");
      observer.next("2");
      observer.next("3");
      observer.next("4");
      observer.next("5");
    })

    myobservable.subscribe((val) => {
      console.log(val);
    })
 */


    /* //Observables are Unicast
    const observable = new Observable(obj => obj.next(Math.random()));

    //Subscriber 1
    observable.subscribe(d => console.log(d));

    //Subsriber 2
    observable.subscribe(d => console.log(d)); */



    /* //Subscribing using Observer Object
     const myobservable = of(1,2,3);
 
     //Create Observer object
     const myObserver = {
       next:(x:number) => console.log('Observer got a next value:'+x),
       error:(err:Error) => console.log('Observer got an error:'+err),
       complete:() => console.log('Observer got a complete notification')
     }
     
     //Execute using observer object
     myobservable.subscribe(myObserver);
 
     //Subscribing using positional arguments 
     myobservable.subscribe({next: (x) => console.log('Observer got a next value :'+x),
     error: (err) => console.log('Observer got an error:'+err),
     complete: ()=> console.log('Observer got a complete notifcation')}); */


    /* //Creating observable with constructor 
    
    function sequenceSubscriber(observer:Observer<number>){
      observer.next(1);
      observer.next(2);
      observer.next(3);

      //Unsubscribe function does not need to do anything in this 
      //case because values are delivered synchronusly
      return {unsubscribe(){}};
    }

    const sequence = new Observable(sequenceSubscriber);
    sequence.subscribe({
      next(num){console.log(num);},
      complete(){console.log('Finished Sequence')}
    }) */



    //Create a delayed Sequence 
    function sequenceSubscriber(observer: Observer<number>) {
      const seq = [1, 2, 3];
      let timeoutId: any;

      //Will run though an array of numbers, emitting one value per
      //second until it gets to the end of the array
      function doInSequence(arr: number[], idx: number) {
        timeoutId = setTimeout(() => {
          observer.next(arr[idx]);
          if (idx === arr.length - 1)
            observer.complete();
          else
            doInSequence(arr, ++idx);
        }, 1000)
      }
      doInSequence(seq, 0);

      //Unsubscribe should clear the timeout to stop execution
      return {
        unsubscribe() {
          clearTimeout(timeoutId);
        }
      }
    }

    //Create a new Observable that will deliver the above sequnece 
    const sequence = new Observable(sequenceSubscriber);

    sequence.subscribe({
      next(num) { console.log(num) },
      complete() { console.log('Finished Sequence') }
    })

    setTimeout(() => {
      sequence.subscribe({
        next(num) { console.log('2nd subscribe: ' + num); },
        complete() { console.log('2nd sequence finished.'); }
      });
    }, 500);
  }
}
