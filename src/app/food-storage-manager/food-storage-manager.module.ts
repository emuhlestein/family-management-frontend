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

@NgModule({
  declarations: [
    FoodProductComponent,
    FoodProductDialogComponent,
    FoodStorageComponent,
    FoodStorageManagerComponent,
    ProductTypeListComponent,
    ProductTypeAddComponent,
    ProductTypeDirective
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
        component: ProductTypeListComponent
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
