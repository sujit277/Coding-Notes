import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { User } from '../User';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitE1: DebugElement;
  let loginE1: DebugElement;
  let passwordE1: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    submitE1 = fixture.debugElement.query(By.css('button'));
    loginE1 = fixture.debugElement.query(By.css('input[type=email]'));
    passwordE1 = fixture.debugElement.query(By.css('input[type=password]'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Setting enabled to false disables the submit button', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitE1.nativeElement.disabled).toBeTruthy();
  })

  it('Setting enabled to true disables the submit button', () => {
    component.enabled = true;
    fixture.detectChanges();
    expect(submitE1.nativeElement.disabled).toBeFalsy();
  })

  it('Entering Email and Password emits Loggedin Event', () => {
    let user!: User;
    loginE1.nativeElement.value = 'Sujit Kumar Verma';
    passwordE1.nativeElement.value = '123456';
    component.loggedIn.subscribe((value) => user = value);
    submitE1.triggerEventHandler('click',null);
    expect(user.email).toBe('Sujit Kumar Verma');
    expect(user.password).toBe('123456');
  })    

});
