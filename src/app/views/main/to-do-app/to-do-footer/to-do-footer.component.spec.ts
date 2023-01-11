import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoFooterComponent } from './to-do-footer.component';

describe('ToDoFooterComponent', () => {
  let component: ToDoFooterComponent;
  let fixture: ComponentFixture<ToDoFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
