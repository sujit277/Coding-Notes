import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  debounce,
  debounceTime,
  delay,
  distinctUntilChanged,
  first,
  fromEvent,
  interval,
  last,
  map,
  of,
  skipUntil,
  take,
  takeUntil,
  tap,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'rxjs';

  ngOnInit(): void {

    // 1. debounceTime  -
    //  It delays the emission of items from the source observable by a specified duration.
    // e.g - debounceTime(dueTime: number, scheduler: asyncScheduler)

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(debounceTime(1000));
    // result.subscribe((x) => console.log(x));

    // 2. fromEvent -
    // The fromEvent function in RxJS is used to create an observable from a DOM event.
    // e.g - fromEvent(target: any, eventName: string, options?: EventListner)

    // const clicks = fromEvent(document, 'click');
    // clicks.subscribe((x) => console.log(x));

    // 3. distinctUntilChanged -
    // The distinctUntilChanged operator in RxJS is used to filter out consecutive duplicate values emitted by
    // an observable. It only allows an observable to emit a value if it is different from the previous value.

    // const result = of(1, 1, 1, 2, 2, 2, 1, 1, 3, 3);
    // result.pipe(distinctUntilChanged()).subscribe(console.log);

    // 4. delay -
    // Delays the emission of every items from the source Observable by a given timeout or until a given Date.
    // e.g - delay(due: number | Date, scheduler: asyncScheduler)

    // const clicks = fromEvent(document, 'click');
    // const delayedClicks = clicks.pipe(delay(1000)); // each click emitted after 1 second
    // delayedClicks.subscribe((x) => console.log(x));

    // 5. first -
    // Emits only the first value (or the first value that meets some condition) emitted by the source
    // Observable.

    // const clicks = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    // const result = clicks.pipe(first((x) => x % 2 === 0));
    // result.subscribe((x) => console.log(x));

    // 6. last -
    // Emits only the last value (or the last value that meets some condition) emitted by the source
    // Observable.

    // const clicks = of(1, 2, 3, 4, 5, 6, 7, 8, 9);
    // const result = clicks.pipe(last((x) => x % 2 === 0));
    // result.subscribe((x) => console.log(x));

    // 7. deBounce -
    // debounce operator in RxJS is used to delay the emissions of items from the source observable until a 
    // specified duration has passed since the last emission.

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(debounce(() => interval(1000)));
    // result.subscribe((x) => console.log(x));

    // 8. takeUntil -
    // takeUntil operator in RxJS is used to complete an observable when another observable emits a value.

    // const source = interval(1000);
    // const clicks = fromEvent(document, 'click');
    // const result = source.pipe(takeUntil(clicks));
    // result.subscribe((x) => console.log(x));

    // 9. Tap -
    // Used to perform side-effects for notifications from the source observable.
    // Use of Tap Operator
    // 1. console.log(data);
    // 2. console.log(response)
    // 3. change property value
    // 4. emit value in observable
    // 5. perform any other action

    // const result = of(1,2,3,4);
    // result.pipe(
    //   tap(console.log),
    //   map(n => n > 0.5 ? 'big' : 'small')
    // ).subscribe(console.log);

    // 10. take -
    // Emits only the first count values emitted by the source observable.

    // const intervalCount = interval(1000);
    // const takeFive = intervalCount.pipe(take(5));
    // takeFive.subscribe((x) => console.log(x));

    // Note -
    // interval returns an Observable that emits an infinite sequence of ascending integers, with a
    // constant interval of time of your choosing between those emissions.

    // 11. skipUntil -
    // skipUntil operator in RxJS is used to discard items emitted by the source observable until a second 
    // observable, the notifier, emits its first item.
    // emit every 1s
    // const source = interval(1000);
    // skip emitted values from source until inner observable emits (6s)
    // const example = source.pipe(skipUntil(timer(6000)));
    // output: 5...6...7...8........
    // const subscribe = example.subscribe((val) => console.log(val));

    // 12. timer -
    // After given duration, emit numbers in sequence every specified duration.

    // const source = timer(6000, 2000);
    // output: 0,1,2,3,4,5......
    // const subscribe = source.subscribe((val) => console.log(val));

    // 13. CombineLatest -
    // The combineLatest operator in RxJS is used to combine multiple observables and emit the latest values 
    // from each as an array (or object if using named parameters) whenever any of the source observables emit
    // a value.
    // values of each of its input observables.

    // 1. Define multiple observables
    let color = of('Black', 'Red', 'Blue');
    let brand = of('Jaguar', 'Ford', 'BMW');
    let price = of(100, 200, 300);

    // 2. Call combineLatest operator, inject multiple observables in array
    const joinStream = combineLatest(color, brand, price);

    // 3. Subscibe combineLatest observable
    const subscribe = joinStream.subscribe(([color, brand, price]) => {
      console.log(color + ' ' + brand + ' ' + 'costed me' + ' ' + price);
    });
  }
}
