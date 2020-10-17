import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';
import { FoodProductType } from './food-product-type/food-product-type';

@Injectable({
  providedIn: 'root'
})
export class FoodProductService {

  private foodProductTypeSubject = new BehaviorSubject<FoodProductType[]>([]);
  foodProductTypes$ = this.foodProductTypeSubject.asObservable();

  constructor(private http: HttpClient) { }

  getFoodProductTypes() {
    const url = "http://localhost:8080/foodproducttype";
    const data$ = this.http.get<FoodProductType[]>(url);
    data$.subscribe(data => {
      console.log(data);
      this.foodProductTypeSubject.next(data);
    });
  }


}
