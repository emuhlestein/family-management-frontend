import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { ContainerTypeAddComponent } from './container-type-add.component';

describe('ContainerTypeAddComponent', () => {
  let component: ContainerTypeAddComponent;
  let fixture: ComponentFixture<ContainerTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [HttpHandler, HttpClient, Router],
      declarations: [ContainerTypeAddComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
