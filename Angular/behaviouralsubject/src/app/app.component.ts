import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'behaviouralsubject';

  ngOnInit(): void {
    
    //Subject
    const subject = new Subject();
    subject.subscribe((d) => console.log(`Subject Subscriber 1: ${d}`));
    subject.next(Math.random());
    subject.subscribe((d) => console.log(`Subject Subscriber 2: ${d}`));

    //Behaviour Subject
    const bSubject = new BehaviorSubject<number>(12);
    bSubject.subscribe((d) =>
      console.log(`BehaviorSubject Subscriber 1: ${d}`)
    );
    bSubject.next(200);
    bSubject.subscribe((d) =>
      console.log(`BehaviorSubject Subscriber 2: ${d}`)
    );
  }
}
