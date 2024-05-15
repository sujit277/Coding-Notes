import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthguardService {
  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}
  
  canActivate() {
    let activate = true;
    if (this.authService.isLogined()) {
      activate = false;
      alert('Sorry, You are not allowed to use this Feature');
      this.router.navigate(['']);
    }
    return activate;
  }
}
