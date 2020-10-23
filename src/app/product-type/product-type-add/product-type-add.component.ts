import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductTypeService } from '../product-type.service';
import { ProductType } from '../product-type';

@Component({
  selector: 'app-product-type-add',
  templateUrl: './product-type-add.component.html',
  styleUrls: ['./product-type-add.component.scss']
})
export class ProductTypeAddComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(private service: ProductTypeService, private router: Router) {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }


  onAddProductType(form: NgForm) {
    this.subscription = this.service.addProductType(new ProductType(0, form.value.name, form.value.description)).subscribe({
      next: data => {
        this.service.getProductTypes();
        this.router.navigate(['/foodstorage/types']);
      },
      error: error => {

      }
    });
  }

}
