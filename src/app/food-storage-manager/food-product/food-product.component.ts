import { Component, OnInit } from '@angular/core';
import { FoodProductDialogComponent } from '../food-product-dialog/food-product-dialog.component';

@Component({
  selector: 'app-food-product',
  templateUrl: './food-product.component.html',
  styleUrls: ['./food-product.component.scss']
})
export class FoodProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openAddFoodProductDialog() {
    // const dialogRef = this.dialog.open(FoodProductDialogComponent, {
    //   width: '450px'
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }

}
