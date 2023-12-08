import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AuthService;
  let e1: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent]
      , providers: [AuthService]
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


  it('Button Label via Jasmine.done', (done: DoneFn) => {
    expect(e1.nativeElement.textContent.trim()).toBe('Login');
    let spy = spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    spy.calls.mostRecent().returnValue.then(() => {
      fixture.detectChanges();
      expect(e1.nativeElement.textContent.trim()).toBe('Logout');
      done();
    })
  })


  it('Button label via fakeAsync() and tick()', fakeAsync(() => {
    expect(e1.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    expect(e1.nativeElement.textContent.trim()).toBe('Logout');
  }));


  it('Button label via async() and whenstable()', async(() => {
    expect(e1.nativeElement.textContent.trim()).toBe('Login');
    spyOn(authService, 'isAuthenticated').and.returnValue(Promise.resolve(true));
    component.ngOnInit();
    fixture.whenStable().then(()=>{
      fixture.detectChanges();
      expect(e1.nativeElement.textContent.trim()).toBe('Logout');
    })
  }))

});
