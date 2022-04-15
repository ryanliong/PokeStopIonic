import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cart } from '../models/Cart';
import { OrderItem } from '../models/order-item';
import { UpdateQtyRequest } from '../models/update-qty-request';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  baseUrl: string = "/api/Cart";

  constructor(private httpClient: HttpClient) { }

  getCartByMemberId(memberId): Observable<Cart> {
    return this.httpClient.get<Cart>(this.baseUrl + '/retrieveCartByMemberId?memberId=' + memberId, httpOptions).pipe(catchError(this.handleError));
  };

  createCart(memberId): Observable<Cart> {
    return this.httpClient.put<Cart>(this.baseUrl + '?memberId=' + memberId, httpOptions).pipe(catchError(this.handleError));
  };

  private handleError(error: HttpErrorResponse) {
    let errorMessage: string = "";

    if (error.error instanceof ErrorEvent) {
      errorMessage = "An unknown error has occurred: " + error.error;
    }
    else {
      errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
