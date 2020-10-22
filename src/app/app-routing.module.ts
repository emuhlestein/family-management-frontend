import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: 'foodstorage',
        loadChildren: () => import('./food-storage-manager/food-storage-manager.module').then(m => m.FoodStorageModule)
      },
      {
        path: 'producttype',
        loadChildren: () => import('./product-type/product-type.module').then(m => m.ProductTypeModule)
      },
      { path: '', redirectTo: 'foodstorage', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
