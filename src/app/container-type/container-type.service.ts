import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, of } from 'rxjs';
import { ContainerType } from './container-type';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ContainerTypeService {
  readonly url = "http://localhost:9001/containertype";

  private containerTypeSubject = new BehaviorSubject<ContainerType[]>([]);
  containerTypes$ = this.containerTypeSubject.asObservable();

  constructor(private http: HttpClient) { }

  getData(): Observable<number> {
    return of(1, 2, 3, 4);
  }

  getContainerTypes() {
    const data$ = this.http.get<ContainerType[]>(this.url);
    data$.subscribe(data => {
      this.containerTypeSubject.next(data);
    },
      error => {
        console.error("Looks like a network error", error);
      });
  }

  addContainerType(containerType: ContainerType): Observable<ContainerType> {
    return this.http.post<ContainerType>(this.url, containerType);
  }

  deleteContainerType(id: number) {
    let endpoint = "/" + id;
    this.http.delete(this.url + endpoint).subscribe(data => {
      this.getContainerTypes();
    });
  }
}
