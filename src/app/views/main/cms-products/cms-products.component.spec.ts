import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsProductsComponent } from './cms-products.component';

describe('CmsProductsComponent', () => {
  let component: CmsProductsComponent;
  let fixture: ComponentFixture<CmsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmsProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
