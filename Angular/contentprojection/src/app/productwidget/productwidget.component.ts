import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-productwidget',
  templateUrl: './productwidget.component.html',
  styleUrls: ['./productwidget.component.css']
})
export class ProductwidgetComponent implements OnInit {

  @Input() products!:any;
  constructor() { }

  ngOnInit(): void {
  }

}
