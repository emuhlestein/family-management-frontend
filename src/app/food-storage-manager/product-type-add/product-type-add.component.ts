import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductType } from '../product-type';
import { ProductTypeService } from '../product-type.service';

@Component({
  selector: 'app-product-type-add',
  templateUrl: './product-type-add.component.html',
  styleUrls: ['./product-type-add.component.scss']
})
export class ProductTypeAddComponent implements OnInit, OnDestroy {

  showAlert = false;
  message = '';
  private subscription: Subscription;

  constructor(private service: ProductTypeService, private router: Router, private route: ActivatedRoute) {
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
      next: resp => {
        console.log('Product Type: ', resp);
        this.service.getProductTypes();
        this.router.navigate(['/producttype']);
      },
      error: error => {
        console.error('Add product type error: ', error.error.message);
        this.message = 'Error: Can\'t add product type: ' + error?.error?.message;
        this.showAlert = true;
      }
    });
  }

  close() {
    this.showAlert = false;
  }
}
