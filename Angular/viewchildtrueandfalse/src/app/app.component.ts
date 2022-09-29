import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{
  
  @ViewChild('name',{static:true}) name!:ElementRef
  title = 'viewchildtrueandfalse';

  ngOnInit(): void {
    this.name.nativeElement.innerHTML="Changed By ElementRef in ngOnInit";
  }
  
  ngAfterViewInit(): void {
    //this.name.nativeElement.innerHTML = "Changed by ElementRef in ngAfterContentInit";
  }
}
  
