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
    // 1. Debounce Time  -
    // Emits a notification from the source Observable only after a particular time span has passed
    // without another source emission.
    // e.g - debounceTime(dueTime: number, scheduler: asyncScheduler)

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(debounceTime(1000));
    // result.subscribe((x) => console.log(x));

    // 2. FromEvent -
    // Creates an Observable that emits events of a specific type coming from the given event target.
    // e.g - fromEvent(target: any, eventName: string, options?: EventListner)

    // const clicks = fromEvent(document, 'click');
    // clicks.subscribe((x) => console.log(x));

    // 3. DistinctUntilChanged -
    // Returns a result Observable that emits all values pushed by the source observable if they are
    // distinct in comparison to the last value the result observable emitted.

    // const result = of(1, 1, 1, 2, 2, 2, 1, 1, 3, 3);
    // result.pipe(distinctUntilChanged()).subscribe(console.log);

    // 4. Delay -
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

    // 7. DeBounce -
    // Emits a notification from the source Observable only after a particular time span determined by
    // another Observable has passed without another source emission.

    // const clicks = fromEvent(document, 'click');
    // const result = clicks.pipe(debounce(() => interval(1000)));
    // result.subscribe((x) => console.log(x));

    // 8. TakeUntil -
    // Emits the values emitted by the source Observable until a notifier Observable emits a value.

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
    // Skip emitted values from source until provided observable emits.

    // emit every 1s
    // const source = interval(1000);
    // skip emitted values from source until inner observable emits (6s)
    // const example = source.pipe(skipUntil(timer(6000)));
    // output: 5...6...7...8........
    // const subscribe = example.subscribe((val) => console.log(val));

    // 12. timer -
    // After given duration, emit numbers in sequence every specified duration.

    // const source = timer(6000, 2000);
    //output: 0,1,2,3,4,5......
    // const subscribe = source.subscribe((val) => console.log(val));

    //13. CombineLatest -
    // Combine multiple Observables to create an observable whose values are calculated from latest
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
