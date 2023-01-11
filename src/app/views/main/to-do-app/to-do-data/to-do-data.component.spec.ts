import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoDataComponent } from './to-do-data.component';

describe('ToDoDataComponent', () => {
  let component: ToDoDataComponent;
  let fixture: ComponentFixture<ToDoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToDoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
