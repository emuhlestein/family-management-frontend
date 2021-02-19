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
    console.log('prod type route: ', this.route);
    this.router.navigate(['add'], { relativeTo: this.route});
  }

  onDeleteProductType(id: number) {
    if (this.confirmDelete()) {
      this.service.deleteProductType(id);
      // this.service.getProductTypes();
    }
  }

  confirmDelete() {
    return confirm("Are you sure you want to delete this item");
  }
}
