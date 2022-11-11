import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private router: Router) { }
  isLoginned = "isLoginned";

  //Method for Activating and Deactivating Route based on Conditions
  canActivate() {
    let activate = true;
    if ((localStorage.getItem(this.isLoginned)) === 'false') {
      activate = false;
      alert('Sorry, You are not allowed to use this Feature');
      this.router.navigate([""]);
    }
    return activate;
  }
}
