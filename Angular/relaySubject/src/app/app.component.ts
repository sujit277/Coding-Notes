import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'relaySubject';

  ngOnInit(): void {
    const $replaySubject = new ReplaySubject(2);
    $replaySubject.next('Hi Sujit');
    $replaySubject.next('How are you');
    $replaySubject.next('How is your Mood');

    $replaySubject.subscribe((msg)=>{
      console.log("User 1",msg);
    })

    $replaySubject.next('Thank you');
    $replaySubject.next('Good Night');
    $replaySubject.subscribe((msg => console.log("User2 ",msg)));


  }

}
