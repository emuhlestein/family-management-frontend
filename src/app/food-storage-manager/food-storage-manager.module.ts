import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FoodProductComponent } from './food-product/food-product.component';
import { FoodProductDialogComponent } from './food-product-dialog/food-product-dialog.component';
import { FoodStorageComponent } from './food-storage/food-storage.component';
import { FoodStorageManagerComponent } from './food-storage-manager.component';
import { RouterModule } from '@angular/router';
import { ContainerTypeListComponent } from './container-type-list/container-type-list.component';
import { ContainerTypeAddComponent } from './container-type-add/container-type-add.component';

@NgModule({
  declarations: [
    FoodProductComponent,
    FoodProductDialogComponent,
    FoodStorageComponent,
    FoodStorageManagerComponent,
    ContainerTypeListComponent,
    ContainerTypeAddComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FoodStorageComponent
      },
      {
        path: 'containertypes',
        component: ContainerTypeListComponent
      },
      {
        path: 'addcontainertypes',
        component: ContainerTypeAddComponent
      }
    ])
  ],
  providers: []
})
export class FoodStorageModule { }
