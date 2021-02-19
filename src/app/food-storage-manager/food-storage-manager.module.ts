import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FoodProductComponent } from './food-product/food-product.component';
import { FoodProductDialogComponent } from './food-product-dialog/food-product-dialog.component';
import { FoodStorageComponent } from './food-storage/food-storage.component';
import { FoodStorageManagerComponent } from './food-storage-manager.component';
import { ProductTypeListComponent } from './product-type-list/product-type-list.component';
import { ProductTypeAddComponent } from './product-type-add/product-type-add.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    ProductTypeAddComponent,
    ProductTypeListComponent,
    FoodProductComponent,
    FoodProductDialogComponent,
    FoodStorageComponent,
    FoodStorageManagerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'add',
        component: ProductTypeAddComponent
      },
      {
        path: '',
        component: ProductTypeListComponent
      }
    ])
  ],
  providers: []
})
export class FoodStorageModule { }
