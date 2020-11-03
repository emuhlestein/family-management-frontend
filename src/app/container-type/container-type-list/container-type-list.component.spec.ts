import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ActivatedRoute, Router, Routes } from '@angular/router';

import { ContainerTypeListComponent } from './container-type-list.component';
import { ContainerTypeService } from '../container-type.service';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

class ContainerTypeServiceMock extends ContainerTypeService {
  deleteContainerType(id: number) {
  }
}

describe('ContainerTypeListComponent', () => {
  let component: ContainerTypeListComponent;
  let fixture: ComponentFixture<ContainerTypeListComponent>;
  let location: Location;
  let router: Router;
  let routerSpy = {
    navigate: jasmine.createSpy('navigate')
  }


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [ContainerTypeService,
        { provide: ActivatedRoute, useValue: { snapshot: { paramMap: { get(): String { return '123'; } } } } },
        { provide: ContainerTypeService, useClass: ContainerTypeServiceMock },
        { provide: Router, useValue: routerSpy }],
      declarations: [ContainerTypeListComponent],
      imports: [
        HttpClientTestingModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should cancel operation', () => {
    expect(component).toBeTruthy();
    component.cancel();
  });

  it('should confirm delete', () => {
    spyOn(window, 'confirm').and.callThrough().and.returnValue(true);
    component.confirmDelete();
    expect(window.confirm).toHaveBeenCalled();
    expect(window.confirm).toHaveBeenCalledTimes(1);
    expect(window.confirm).toHaveBeenCalledWith('Are you sure you want to delete this item');
    expect(component.confirmDelete()).toEqual(true);
  });

  it('should delete container type', () => {
    let service = fixture.debugElement.injector.get(ContainerTypeService);
    spyOn(service, 'deleteContainerType');
    spyOn(window, 'confirm').and.callThrough().and.returnValue(true);
    component.onDeleteContainerType(1);
    expect(service.deleteContainerType).toHaveBeenCalledWith(1);
  });

  it('should not delete container type', () => {
    let service = fixture.debugElement.injector.get(ContainerTypeService);
    spyOn(service, 'deleteContainerType');
    spyOn(window, 'confirm').and.callThrough().and.returnValue(false);
    component.onDeleteContainerType(1);
    expect(service.deleteContainerType).toHaveBeenCalledTimes(0);
  });

  it('should add container type', () => {
    component.onAddContainerType();
    expect(routerSpy.navigate).toHaveBeenCalledTimes(1)
  });
});
