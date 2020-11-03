import { HttpClient, HttpHandler } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router, Routes } from '@angular/router';

import { ContainerTypeListComponent } from './container-type-list.component';
import { ContainerTypeService } from '../container-type.service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

describe('ContainerTypeListComponent', () => {
  let component: ContainerTypeListComponent;
  let fixture: ComponentFixture<ContainerTypeListComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ContainerTypeService],
      declarations: [ContainerTypeListComponent],
      imports: [
        RouterTestingModule.withRoutes([]),
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
