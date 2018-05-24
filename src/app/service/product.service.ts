import { catchError, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Product } from './../models/product';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};


@Injectable()
export class ProductService {

  webApiUrl: any = 'http://localhost:3000/equipamento';

  constructor(private http: HttpClient) { }

  /*
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error, `Operation: ${operation}`);
    };
  }*/

  // Solicitando todos os produtos
  getProducts() {
    return this.http.get<Product[]>(this.webApiUrl)
      .toPromise().then(res => res)
      .catch();
  }

  // Deletando algum produto
  deleteProduct(id: number) {
    return this.http.delete(this.webApiUrl + '/' + id)
      .toPromise().then(res => res)
      .catch();
  }

  addProduct(product: Product) {
    return this.http.post(this.webApiUrl, product, httpOptions)
    .toPromise().then(res => res)
    .catch();
  }


  /*getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.webApiUrl)
      .pipe(
        tap(products => console.log('Fetched products!')),
        catchError(this.handleError('getProducts', []))
      );
      }

  getProduct(id: number): Observable<Product> {
    const url = `${this.webApiUrl}/${id}`;

    return this.http.get<Product>(url).pipe(
      tap(product => console.log(`Fetched product of id ${id}!`, product)),
      catchError(this.handleError<Product>(`getHero id=${id}`))
    );
  }*/

  }
