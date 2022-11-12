import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../User';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [LoginComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    component.ngOnInit();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form invalid when empty', () => {
    expect(component.form.valid).toBeFalsy();
  })

  it('email field Validity', () => {
    let email = component.form.controls['email'];
    expect(email.valid).toBeFalsy();
  })

  it('email feild validity', () => {
    let errors: any;
    let email = component.form.controls['email'];
    errors = email.errors;
    expect(errors['required']).toBeTruthy();

    email.setValue("Sujit");
    errors = email.errors;
    expect(errors['pattern']).toBeTruthy();
  })

  it('Submitting a form emits a User', () => {
    expect(component.form.valid).toBeFalsy();
    component.form.controls['email'].setValue('test@test.com');
    component.form.controls['password'].setValue("12345678");
    expect(component.form.valid).toBeTruthy();

    let user!: User;
    component.loggedIn.subscribe((value) => user = value);
    component.login();
    expect(user.email).toBe('test@test.com');
    expect(user.password).toBe('12345678')
  })

});
