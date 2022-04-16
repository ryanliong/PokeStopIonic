import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Payment } from '../models/payment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseUrl: string = "/api/Payment";

  constructor(private httpClient: HttpClient) { }

  createPayment(request: String): Observable<Payment> {
    return this.httpClient.put<Payment>(this.baseUrl, request, httpOptions).pipe(catchError(this.handleError));
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
