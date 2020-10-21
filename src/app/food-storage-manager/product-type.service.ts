import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { ProductType } from './product-type/product-type';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  private productTypeSubject = new BehaviorSubject<ProductType[]>([]);
  productTypes$ = this.productTypeSubject.asObservable();

  constructor(private http: HttpClient) { }

  getFoodProductTypes() {
    const url = "http://localhost:9001/producttype";
    const data$ = this.http.get<ProductType[]>(url);
    data$.subscribe(data => {
      console.log(data);
      this.productTypeSubject.next(data);
    });
  }


}
