import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'interceptors';
  userData: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    this.dataService.getUsers().subscribe((data) => {
      this.userData = data;
    });
  }
}
