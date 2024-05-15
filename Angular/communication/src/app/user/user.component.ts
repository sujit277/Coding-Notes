import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  @Output() eventEmitterIntance: EventEmitter<any> = new EventEmitter();
  @Input() componentName!: string;
  constructor() {}

  ngOnInit(): void {}

  sendData() {
    this.eventEmitterIntance.emit('Sujit Kumar Verma');
  }
}
