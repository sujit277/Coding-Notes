import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productdashboard',
  templateUrl: './productdashboard.component.html',
  styleUrls: ['./productdashboard.component.css']
})
export class ProductdashboardComponent implements OnInit {

  constructor() { }

  mobileProducts = [
    {id:1,name:'Moto g8',price:'14999'},
    {id:2,name:'Realme 9 Pro',price:'23000'},
    {id:3,name:'IPhone 13',price:'60000'},
    {id:4,name:'OnePlus 13',price:'32000'}
  ]

  laptopProducts = [
    {id:1,name:'HP Pavallion',price:'64500'},
    {id:2,name:'Macbook Pro',price:'103000'},
    {id:3,name:'Dell',price:'62000'},
    {id:4,name:'Asus Notebook',price:'53000'}
  ]

  ngOnInit(): void {
  }

}
