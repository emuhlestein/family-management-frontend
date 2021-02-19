import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { ProductType } from './product-type';
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
      this.productTypeSubject.next(data);
    },
      error => {
        console.error("Looks like a network error", error);
      });
  }

  addProductType(productType: ProductType): Observable<ProductType> {
    return this.http.post<ProductType>(this.url, productType);
  }

  deleteProductType(id: number) {
    let endpoint = "/" + id;
    this.http.delete(this.url + endpoint).subscribe(data => {
      this.getProductTypes();
    });
  }


}
