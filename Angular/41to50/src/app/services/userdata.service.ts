import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor() { }
  users()
  {
    return [{Name:'Sujit',Age:28,Email:'sujit39@gmail.com'},
    {Name:'Anjali',Age:35,Email:'Anjali30@gmail.com'},
    {Name:'Chandani',Age:50,Email:'Chand124@gmail.com'}];
  }
}
