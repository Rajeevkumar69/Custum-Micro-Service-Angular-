import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LuckyMessageGeneratorComponent } from './lucky-message-generator.component';

describe('LuckyMessageGeneratorComponent', () => {
  let component: LuckyMessageGeneratorComponent;
  let fixture: ComponentFixture<LuckyMessageGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LuckyMessageGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LuckyMessageGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
