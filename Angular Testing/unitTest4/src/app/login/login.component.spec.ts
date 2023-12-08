import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from '../auth.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let e1: DebugElement;
  let spy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      providers: [AuthService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AuthService);
    e1 = fixture.debugElement.query(By.css('a'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('login Button Hidden when the user is Authenticated', () => {
    expect(e1.nativeElement.textContent.trim()).toBe('Login');
    spy = spyOn(authService, 'isAuthenticated').and.returnValue(true);
    expect(e1.nativeElement.textContent.trim()).toBe('Login');
    fixture.detectChanges();
    expect(e1.nativeElement.textContent.trim()).toBe('Logout');
  })
});
