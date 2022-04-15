import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from '../models/Order';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  baseUrl: string = "/api/Order";

  constructor(private httpClient: HttpClient) { }

  checkout(request: String): Observable<Order> {
    return this.httpClient.put<Order>(this.baseUrl , request, httpOptions).pipe(catchError(this.handleError));
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
