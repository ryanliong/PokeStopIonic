import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Discount } from '../models/discount';
import { Listing } from '../models/listing';
import { Member } from '../models/member';
import { CreateListingReq } from '../models/create-listing-req';

const httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  	baseUrl: string = "/api/Discount";

  	constructor(private httpClient: HttpClient) { }

  	getDiscounts(): Observable<Discount[]> {				
	return this.httpClient.get<Discount[]>(this.baseUrl + "/retrieveAllDiscounts").pipe
	  	(
			catchError(this.handleError)
	  	);
	}
		
	getDiscountByCode(discountCode : string): Observable<Discount> {
		return this.httpClient.get<Discount>(this.baseUrl + "/retrieveDiscount/" + discountCode).pipe
		(
			catchError(this.handleError)
		);
	}

	private handleError(error: HttpErrorResponse)
	{
	  let errorMessage: string = "";
	
	  if (error.error instanceof ErrorEvent) 
	  {		
		errorMessage = "An unknown error has occurred: " + error.error;
	  } 
	  else 
	  {		
		errorMessage = "A HTTP error has occurred: " + `HTTP ${error.status}: ${error.error}`;
	  }
	  
	  console.error(errorMessage);
	  
	  return throwError(() => new Error(errorMessage));
	}
}
