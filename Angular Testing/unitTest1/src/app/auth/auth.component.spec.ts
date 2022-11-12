import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthComponent } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() =>{
    localStorage.removeItem('Name');
  })

  it('should return true from IsAuthenticated when there is a token',()=>{
    localStorage.setItem('Name','Sujit Kumar Verma');
    expect(component.isAuthenticated()).toBeTruthy();
  })

  it('should return false from isAuthenticated when there is no token',()=>{
    expect(component.isAuthenticated()).toBeFalsy();
  })

});
