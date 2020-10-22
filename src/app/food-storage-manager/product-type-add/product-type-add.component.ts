import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-product-type-add',
  templateUrl: './product-type-add.component.html',
  styleUrls: ['./product-type-add.component.scss']
})
export class ProductTypeAddComponent implements OnInit {

  constructor() {
    // const myMap = {[key: string]: any};
  }

  ngOnInit(): void {
  }

  onAddProductType(form: NgForm) {
    console.log("Form: ", form.value['name']);
    console.log("Form: ", form.value['description']);
  }

  onClick(model: NgModel) {
    console.log("Model: model: ", model);
    console.log("Model: value: ", model.value);
    console.log("Model: Name: ", model.name);
    console.log("Model: touched: ", model.touched);
    console.log("Model: dirty: ", model.dirty);
  }

}
