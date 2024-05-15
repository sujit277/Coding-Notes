import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnInit,
  QueryList,
} from '@angular/core';

@Component({
  selector: 'app-productwidget',
  templateUrl: './productwidget.component.html',
  styleUrls: ['./productwidget.component.css'],
})
export class ProductwidgetComponent implements OnInit, AfterContentInit {
  @Input() products!: any;
  @ContentChildren('head') header!: QueryList<any>;
  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    console.log(this.header);
    this.header.first.nativeElement.style.color = 'red';
    this.header.last.nativeElement.style.color = 'green';
  }
}
