import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerTypeAddComponent } from './container-type-add.component';

describe('ContainerTypeAddComponent', () => {
  let component: ContainerTypeAddComponent;
  let fixture: ComponentFixture<ContainerTypeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerTypeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
