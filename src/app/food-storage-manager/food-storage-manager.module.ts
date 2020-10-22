import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FoodProductComponent } from './food-product/food-product.component';
import { FoodProductDialogComponent } from './food-product-dialog/food-product-dialog.component';
import { FoodStorageComponent } from './food-storage/food-storage.component';
import { FoodStorageManagerComponent } from './food-storage-manager.component';
import { ProductTypeListComponent } from './product-type-list/product-type-list.component';
import { RouterModule } from '@angular/router';
import { ProductTypeAddComponent } from './product-type-add/product-type-add.component';
import { ProductTypeDirective } from './product-type-add/product-type.directive';
import { ContainerTypeListComponent } from './container-type-list/container-type-list.component';
import { ContainerTypeAddComponent } from './container-type-add/container-type-add.component';

@NgModule({
  declarations: [
    FoodProductComponent,
    FoodProductDialogComponent,
    FoodStorageComponent,
    FoodStorageManagerComponent,
    ProductTypeListComponent,
    ProductTypeAddComponent,
    ProductTypeDirective,
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
        path: 'producttypes',
        component: ProductTypeListComponent
      },
      {
        path: 'addproducttypes',
        component: ProductTypeAddComponent
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
