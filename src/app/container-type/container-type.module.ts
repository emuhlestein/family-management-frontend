import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ContainerTypeListComponent } from './container-type-list/container-type-list.component';
import { ContainerTypeAddComponent } from './container-type-add/container-type-add.component';

@NgModule({
  declarations: [
    ContainerTypeListComponent,
    ContainerTypeAddComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
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
