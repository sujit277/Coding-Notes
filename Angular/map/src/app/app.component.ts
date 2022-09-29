import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Map';
  sub1!: Subscription;

  ngOnInit(): void {
    
    /* const broadCastVideos = interval(1000);
    this.sub1 = broadCastVideos.subscribe(res => {
      console.log("Video "+res);
    }) */

    /* Here by using this hardcoded technique we can modify the data but point to be 
    noted here we are modifying the data after subscribing. */

    const broadCastVideos = interval(1000);
    this.sub1 = broadCastVideos.pipe(map(data => 'Video ' + data)).subscribe(res => {
      console.log(res);
    })

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 10000);

  }


}

