import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, from, map, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'concatMap';

  getData(data: any) {
    return of(data + ' Video Upload ');
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comdey', 'News']);

    //Printing Values Using Map
    // source
    //   .pipe(map((data) => this.getData(data)))
    //   .subscribe((res) => res.subscribe((res1) => console.log(res1)));

    //Printing Values Using Map + ConcatAll
    // source
    //   .pipe(
    //     map((data) => this.getData(data)),
    //     concatAll()
    //   )
    //   .subscribe((res) => console.log(res));

    //Printing Values Using ConcatMap
    source
      .pipe(concatMap((data) => this.getData(data)))
      .subscribe((res) => console.log(res));
  }
} 
