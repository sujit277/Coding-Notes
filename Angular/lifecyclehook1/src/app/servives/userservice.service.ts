import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor() { }

  getuserdata(){
    return {name:"Sujit Kumar Verma",company:"EPAM Systems"};
  }
}
