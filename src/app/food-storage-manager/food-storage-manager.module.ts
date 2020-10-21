import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FoodProductComponent } from './food-product/food-product.component';
import { FoodProductDialogComponent } from './food-product-dialog/food-product-dialog.component';
import { FoodStorageComponent } from './food-storage/food-storage.component';
import { FoodStorageManagerComponent } from './food-storage-manager.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { RouterModule } from '@angular/router';
import { ProductTypeAddComponent } from './product-type-add/product-type-add.component';

@NgModule({
  declarations: [
    FoodProductComponent,
    FoodProductDialogComponent,
    FoodStorageComponent,
    FoodStorageManagerComponent,
    ProductTypeComponent,
    ProductTypeAddComponent
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
        path: 'types',
        component: ProductTypeComponent
      },
      {
        path: 'add',
        component: ProductTypeAddComponent
      }
    ])
  ],
  providers: []
})
export class FoodStorageModule { }
