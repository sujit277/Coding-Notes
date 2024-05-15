import { Component, OnInit } from '@angular/core';
import { AsyncSubject } from 'rxjs';
import { AsyncAction } from 'rxjs/internal/scheduler/AsyncAction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'asyncSubject';

  ngOnInit(): void {
    const $asyncSubject = new AsyncSubject();
    $asyncSubject.next('1');
    $asyncSubject.next('2');
    $asyncSubject.complete();
    $asyncSubject.subscribe({
      next: (msg) => {
        console.log('User1 :', msg);
      },
    });

    $asyncSubject.next('3');
    $asyncSubject.next('4');
    $asyncSubject.complete();
    $asyncSubject.subscribe({
      next: (msg) => {
        console.log('User2 :', msg);
      },
    });
  }
}
