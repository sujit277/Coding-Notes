import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  count:number = 0;
  interval:any;

  constructor() { 
    console.log("Constructor is called");
    this.interval = setInterval(()=>{
      this.count++;
      console.log("Time Running",this.count);
    },1000)
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    console.log("On Destroy");
    clearInterval(this.interval);
  }

}
