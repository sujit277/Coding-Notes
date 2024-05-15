import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'relaySubject';

  ngOnInit(): void {
    const $replaySubject = new ReplaySubject(3);
    $replaySubject.next('1');
    $replaySubject.next('2');
    $replaySubject.next('3');

    $replaySubject.subscribe((msg) => {
      console.log('User 1', msg);
    });

    $replaySubject.next('4');
    $replaySubject.next('5');
    $replaySubject.subscribe((msg) => console.log('User2 ', msg));
  }
}
