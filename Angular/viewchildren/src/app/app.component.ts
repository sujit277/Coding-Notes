import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren('highlight') elements!: QueryList<any>;

  title = 'viewchildren';

  ngOnInit(): void {
    console.log('Component Loaded');
  }

  ngAfterViewInit(): void {
    console.log(this.elements);
    this.elements.first.nativeElement.style.color = 'red';
    this.elements.last.nativeElement.style.color = 'green';
  }
}
