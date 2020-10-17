import { Component, OnInit } from '@angular/core';
import { FoodProductService } from '../food-product.service';

@Component({
  selector: 'app-food-product-type',
  templateUrl: './food-product-type.component.html',
  styleUrls: ['./food-product-type.component.scss']
})
export class FoodProductTypeComponent implements OnInit {

  productTypes = new Array("Pepper", "Salt", "Paprika");

  constructor(private service: FoodProductService) { }

  ngOnInit(): void {
    this.service.foodProductTypes$.subscribe(data => {
      this.productTypes = [];
      if (data) {
        data.forEach(item => {
          this.productTypes.push(item.name);
        })
      }
    })

    this.service.getFoodProductTypes();
  }

  addProductType() {
    const newItem = "New Item";
    const foundItem = this.productTypes.find(item => item === newItem)
    if (!foundItem) {
      this.productTypes.push(newItem);
    }
  }

  deleteProductType(selectedOption) {
    this.productTypes = this.productTypes.filter(item => item !== selectedOption)
  }

}
