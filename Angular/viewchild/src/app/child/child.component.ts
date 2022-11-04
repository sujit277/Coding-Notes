import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  constructor() { }
  @ViewChild("salary") element!:ElementRef;
  ngOnInit(): void {
  }
  
  childMethod(){
    console.log("Executing method of Child Component");
    alert("Hello Sujit");
  }

}
