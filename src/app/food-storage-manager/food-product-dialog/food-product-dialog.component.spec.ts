import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodProductDialogComponent } from './food-product-dialog.component';

describe('FoodProductDialogComponent', () => {
  let component: FoodProductDialogComponent;
  let fixture: ComponentFixture<FoodProductDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodProductDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodProductDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
