import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Output() eventEmitterIntance: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  passData(){
    this.eventEmitterIntance.emit("Sujit Kumar Verma");
  }

}
