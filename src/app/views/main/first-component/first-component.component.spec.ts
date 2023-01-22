import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentComponent } from './FirstComponentComponent';

describe('FirstComponentComponent', () => {
     let component: FirstComponentComponent;
     let fixture: ComponentFixture<FirstComponentComponent>;

     beforeEach(async () => {
          await TestBed.configureTestingModule({
               declarations: [FirstComponentComponent]
          }).compileComponents();

          fixture = TestBed.createComponent(FirstComponentComponent);
          component = fixture.componentInstance;
          fixture.detectChanges();
     });

     it('should create', () => {
          expect(component).toBeTruthy();
     });
});
