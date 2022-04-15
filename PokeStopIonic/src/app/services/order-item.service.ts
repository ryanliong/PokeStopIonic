import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cart } from '../models/cart';
import { OrderItem } from '../models/order-item';
import { UpdateQtyRequest } from '../models/update-qty-request';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class OrderItemService {

  baseUrl: string = "/api/OrderItem";

  constructor(private httpClient: HttpClient) { }

  updateOrderItemQty(request: String): Observable<OrderItem> {
    return this.httpClient.patch<OrderItem>(this.baseUrl, request, httpOptions).pipe(catchError(this.handleError));
  }

  createNewOrderItem(request: String): Observable<OrderItem> {
    return this.httpClient.put<OrderItem>(this.baseUrl, request, httpOptions).pipe(catchError(this.handleError));
  }

  deleteOrderItem(orderItemId) {
    return this.httpClient.delete<OrderItem>(this.baseUrl + '/deleteOrderItem?orderItemId=' + orderItemId, httpOptions).pipe(catchError(this.handleError));
  }

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
