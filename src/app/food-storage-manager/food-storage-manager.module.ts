import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FoodProductComponent } from './food-product/food-product.component';
import { FoodProductDialogComponent } from './food-product-dialog/food-product-dialog.component';
import { FoodStorageComponent } from './food-storage/food-storage.component';
import { FoodStorageManagerComponent } from './food-storage-manager.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FoodProductComponent,
    FoodProductDialogComponent,
    FoodStorageComponent,
    FoodStorageManagerComponent,
    ProductTypeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    RouterModule.forChild([
      {
        path: '',
        component: FoodStorageComponent
      },
      {
        path: 'types',
        component: ProductTypeComponent
      }
    ])
  ],
  providers: []
})
export class FoodStorageModule { }
