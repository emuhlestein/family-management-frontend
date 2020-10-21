import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product-type-add',
  templateUrl: './product-type-add.component.html',
  styleUrls: ['./product-type-add.component.scss']
})
export class ProductTypeAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onAddProductType(form: NgForm) {
    console.log("Form: ", form.value['name']);
    console.log("Form: ", form.value['description']);
  }

}
