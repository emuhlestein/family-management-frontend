import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FoodProductComponent } from './food-product/food-product.component';
import { FoodProductDialogComponent } from './food-product-dialog/food-product-dialog.component';
import { FoodStorageComponent } from './food-storage/food-storage.component';
import { FoodStorageManagerComponent } from './food-storage-manager.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FoodProductComponent,
    FoodProductDialogComponent,
    FoodStorageComponent,
    FoodStorageManagerComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: FoodStorageComponent
      }
    ])
  ],
  providers: []
})
export class FoodStorageModule { }
