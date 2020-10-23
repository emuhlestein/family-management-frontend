import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductTypeService } from '../product-type.service';
import { ProductType } from '../product-type';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type-list.component.html',
  styleUrls: ['./product-type-list.component.scss']
})

export class ProductTypeListComponent implements OnInit {

  productTypes = new Array(new ProductType(1, "Pepper", "test"), new ProductType(2, "Salt", "test"), new ProductType(3, "Paprika", "test"));

  constructor(private service: ProductTypeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.service.productTypes$.subscribe(data => {
      this.productTypes = [];
      if (data) {
        data.forEach(item => {
          this.productTypes.push(item);
        })
      }
    })

    this.service.getProductTypes();
  }

  onAddProductType() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  addProductType() {
    const newItem = new ProductType(4, "New Item", "");
    const foundItem = this.productTypes.find(item => item.name === newItem.name)
    if (!foundItem) {
      this.productTypes.push(newItem);
    }
  }

  onDeleteProductType(id: number) {
    if (this.confirmDelete()) {
      this.service.deleteProductType(id);
      alert('This item will be deleted: ' + id);
      this.service.getProductTypes();
    }
  }

  confirmDelete() {
    return confirm("Are you sure you want to delete this item");
  }

  cancel() {

  }

}
