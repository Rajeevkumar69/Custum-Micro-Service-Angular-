import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceCalculatorComponent } from './space-calculator.component';

describe('SpaceCalculatorComponent', () => {
  let component: SpaceCalculatorComponent;
  let fixture: ComponentFixture<SpaceCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpaceCalculatorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpaceCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
