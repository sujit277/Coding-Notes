import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductwidgetComponent } from './productwidget.component';

describe('ProductwidgetComponent', () => {
  let component: ProductwidgetComponent;
  let fixture: ComponentFixture<ProductwidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductwidgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
