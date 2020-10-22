import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { ProductType } from './product-type-list/product-type-list';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {
  readonly url = "http://localhost:9001/producttype";

  private productTypeSubject = new BehaviorSubject<ProductType[]>([]);
  productTypes$ = this.productTypeSubject.asObservable();

  constructor(private http: HttpClient) { }

  getProductTypes() {
    const data$ = this.http.get<ProductType[]>(this.url);
    data$.subscribe(data => {
      console.log(data);
      this.productTypeSubject.next(data);
    });
  }

  addProductType(productType: ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(this.url, productType);
  }


}
