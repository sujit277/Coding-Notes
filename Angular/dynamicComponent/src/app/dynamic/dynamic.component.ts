import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  @Output() close = new EventEmitter<void>();
  constructor() { }
  
  ngOnInit(): void {
  }

  name = "Sujit Kumar Verma";
  company= "EPAM Systems";
  ctc  = "6LPA";
  salary = "44500"

  Cancel(){
    this.close.emit();
  }
}
