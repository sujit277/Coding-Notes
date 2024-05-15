import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'mergeMap';

  getData(data: any) {
    return of(data + ' Video Uploaded');
  }

  ngOnInit(): void {
    const source = from(['Tech', 'Comedy', 'News']);

    //Printing values using Map
    // source
    //   .pipe(map((res) => this.getData(res)))
    //   .subscribe((res) => res.subscribe((res2) => console.log(res2)));

    //Printing Values using Map + MergeAll
    // source
    //   .pipe(
    //     map((res) => this.getData(res)),
    //     mergeAll()
    //   )
    //   .subscribe((res) => console.log(res));

    //Printing Values using MergeMap
    source
      .pipe(mergeMap((res) => this.getData(res)))
      .subscribe((res) => console.log(res));
  }
}
