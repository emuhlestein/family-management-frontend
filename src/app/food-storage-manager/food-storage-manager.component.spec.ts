import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodStorageManagerComponent } from './food-storage-manager.component';

describe('FoodStorageManagerComponent', () => {
  let component: FoodStorageManagerComponent;
  let fixture: ComponentFixture<FoodStorageManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodStorageManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodStorageManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
