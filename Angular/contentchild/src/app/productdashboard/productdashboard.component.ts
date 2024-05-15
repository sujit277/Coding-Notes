import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.css'],
})
export class ProductdashboardComponent implements OnInit {
  mobileProducts = [
    { id: 1, name: 'Moto g8', price: '14999' },
    { id: 2, name: 'Realme 9 Pro', price: '23000' },
    { id: 3, name: 'IPhone 13', price: '60000' },
    { id: 4, name: 'OnePlus 13', price: '32000' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
