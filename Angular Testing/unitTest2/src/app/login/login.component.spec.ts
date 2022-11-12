import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthService } from '../auth.service';
import { LoginComponent } from './login.component';

/* //Testing with Real AuthService

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: AuthService;

  beforeEach(async () => {
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    localStorage.removeItem('Name');
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('needsLogin returns true when the user has not been authenticated ', () => { 
    expect(component.needsLogin()).toBeTruthy();
  })

  it('needsLogin returns false when the user has been authenticated',()=>{
    localStorage.setItem('Name','Sujit Kumar Verma');
    expect(component.needsLogin()).toBeFalsy();
  })
}); */


//Mocking with Fake Classes

/* class MockAuthService{
  authenticated = false;

  isAuthenticated(){
    return this.authenticated;
  }
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let service: MockAuthService;

  beforeEach(async () => {
    service = new MockAuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    localStorage.removeItem('Name');
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('needsLogin returns true when the user has not been authenticated ', () => { 
    service.authenticated = false;
    expect(component.needsLogin()).toBeTruthy();
  })

  it('needsLogin returns false when the user has been authenticated',()=>{
    service.authenticated = true;
    expect(component.needsLogin()).toBeFalsy();
  })
});
 */


describe('LoginComponent', () => {

  let component: LoginComponent;
  let service: AuthService;
  let spy : any;

  beforeEach(async () => {
    service = new AuthService();
    component = new LoginComponent(service);
  });

  afterEach(() => {
    localStorage.removeItem('Name');
  })

  
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('needsLogin returns true when the user has not been authenticated ', () => {
    spy = spyOn(service,'isAuthenticated').and.returnValue(false);
    expect(component.needsLogin()).toBeTruthy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  })

  it('needsLogin returns false when the user has been authenticated', () => {
    spy = spyOn(service,'isAuthenticated').and.returnValue(true);
    expect(component.needsLogin()).toBeFalsy();
    expect(service.isAuthenticated).toHaveBeenCalled();
  })
});