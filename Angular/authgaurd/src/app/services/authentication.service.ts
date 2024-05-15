import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor() {}

  isLoginned = 'isLoginned';

  //Method for setting LocalStorage after Login
  login() {
    localStorage.setItem(this.isLoginned, 'true');
  }

  //Method for setting LocalStorage after Logout
  logout() {
    localStorage.setItem(this.isLoginned, 'false');
  }

  isLogined() {
    return !!(localStorage.getItem(this.isLoginned) === 'false');
  }
}
