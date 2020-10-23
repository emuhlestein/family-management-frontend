import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContainerTypeListComponent } from './container-type-list/container-type-list.component';
import { ContainerTypeAddComponent } from './container-type-add/container-type-add.component';
import { ContainerTypeDirective } from './container-type-add/container-type.directive';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ContainerTypeListComponent,
    ContainerTypeAddComponent,
    ContainerTypeDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbAlertModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContainerTypeListComponent
      },
      {
        path: 'new',
        component: ContainerTypeAddComponent
      }
    ])
  ]
})
export class ContainerTypeModule { }
