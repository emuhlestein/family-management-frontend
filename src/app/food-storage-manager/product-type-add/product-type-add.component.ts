import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductTypeService } from '../product-type.service';
import { ProductType } from '../product-type/product-type';

@Component({
  selector: 'app-product-type-add',
  templateUrl: './product-type-add.component.html',
  styleUrls: ['./product-type-add.component.scss']
})
export class ProductTypeAddComponent implements OnInit {

  private subscription: Subscription;

  constructor(private service: ProductTypeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  onAddProductType(form: NgForm) {
    console.log("Form: ", form.value['name']);
    console.log("Form: ", form.value['description']);
    this.subscription = this.service.addProductType(new ProductType(0, form.value['name'], form.value['description'])).subscribe({
      next: data => {
        this.service.getProductTypes();
        this.router.navigate(['/foodstorage/types']);
      },
      error: error => {

      }
    });
  }

  onClick(model: NgModel) {
    console.log("Model: model: ", model);
    console.log("Model: value: ", model.value);
    console.log("Model: Name: ", model.name);
    console.log("Model: touched: ", model.touched);
    console.log("Model: dirty: ", model.dirty);
  }

}
