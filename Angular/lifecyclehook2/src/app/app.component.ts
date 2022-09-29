import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {Product} from "./product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'lifecyclehook2';
  data:any;
  email!:string;
  password!:string;
  product:Product = new Product();
  constructor(){}

  ngOnInit(): void {
  }

  handleData(event:any){
    this.data = event.target.value;
  }

  updateDetail(){
    //Creating new Object of Product for new Reference
    //this.product = new Product();
    this.product.email = this.email
    this.product.password = this.password;
  }

}
