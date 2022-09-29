import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent implements OnInit {

   
  constructor() { }

  ngOnInit(): void {
  }


  executeFunction(){
    console.log("Executing Child");
    return 'Sujit Kumar Verma';

  }

}
