import { AfterViewInit, Component, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{

  @ViewChildren("highlight") element!:QueryList<any>

  title = 'viewchildren';

  ngOnInit(): void {
    console.log("Component Loaded");
  }
  
  ngAfterViewInit(): void {
    this.element.first.nativeElement.style.color ="red";
    this.element.last.nativeElement.style.color="green";
  }
  
}
