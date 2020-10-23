import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductTypeListComponent } from './product-type-list/product-type-list.component';
import { ProductTypeAddComponent } from './product-type-add/product-type-add.component';
import { ProductTypeDirective } from './product-type-add/product-type.directive';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    ProductTypeListComponent,
    ProductTypeAddComponent,
    ProductTypeDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbAlertModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductTypeListComponent
      },
      {
        path: 'new',
        component: ProductTypeAddComponent
      }
    ])
  ]
})
export class ProductTypeModule { }
