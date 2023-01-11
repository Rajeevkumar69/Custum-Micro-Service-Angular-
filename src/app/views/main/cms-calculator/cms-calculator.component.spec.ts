import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsCalculatorComponent } from './cms-calculator.component';

describe('CmsCalculatorComponent', () => {
  let component: CmsCalculatorComponent;
  let fixture: ComponentFixture<CmsCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
