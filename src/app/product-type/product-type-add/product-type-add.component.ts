import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
      next: data => {
        this.service.getProductTypes();
        console.log('Route: ', this.route);
        console.log('Router: ', this.router);

        this.router.navigate(['/producttype']);
      },
      error: error => {

      }
    });
  }
}
