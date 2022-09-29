import { Component, OnInit } from '@angular/core';
import { delay, from, map, of, switchAll, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'switchMap';

  getData(data: any) {
    return of(data + ' Video Uploaded');
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    //Printing values Using Map
    /* source.pipe(map(res => this.getData(res))).subscribe((res) => {
      res.subscribe((res2) => {
        console.log(res2);
      });
    }); */

    //Printing values Using Switchmap
    source.pipe(map(data => this.getData(data).pipe(delay(2000))), switchAll()).subscribe((res) => {
      console.log(res);
    });


    //Printing values Using Switchmap
    source.pipe(switchMap(data => this.getData(data).pipe(delay(2000)))).subscribe((res) => {
      console.log(res);
    });

  }
}
