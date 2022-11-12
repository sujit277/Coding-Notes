import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { HoverfoucsDirective } from './hoverfoucs.directive';


@Component({
  template: `<input type="text" appHoverfoucs>`
})

class TestComponent {

}

describe('HoverfoucsDirective', () => {

  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let input1: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
        declarations: [TestComponent, HoverfoucsDirective]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    input1 = fixture.debugElement.query(By.css('input'));
});

  it('should create an instance', () => {
    const directive = new HoverfoucsDirective();
    expect(directive).toBeTruthy();
  });

  it('Hovering over input',()=>{
    input1.triggerEventHandler('mouseover',null);
    fixture.detectChanges();
    expect(input1.nativeElement.style.backgroundColor).toBe('blue');

    input1.triggerEventHandler('mouseout',null);
    fixture.detectChanges();
    expect(input1.nativeElement.style.backgroundColor).toBe('red');
  })


});
