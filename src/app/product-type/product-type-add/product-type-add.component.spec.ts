import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ProductTypeAddComponent } from './product-type-add.component';

describe('ProductTypeAddComponent', () => {
  let component: ProductTypeAddComponent;
  let fixture: ComponentFixture<ProductTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpClient, HttpHandler, Router],
      declarations: [ProductTypeAddComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
