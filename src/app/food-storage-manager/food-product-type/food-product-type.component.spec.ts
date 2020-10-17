import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodProductTypeComponent } from './food-product-type.component';

describe('FoodProductTypeComponent', () => {
  let component: FoodProductTypeComponent;
  let fixture: ComponentFixture<FoodProductTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodProductTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
