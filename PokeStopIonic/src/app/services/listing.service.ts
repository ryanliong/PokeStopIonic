import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Listing } from '../models/listing';
import { Member } from '../models/member';
import { CreateListingReq } from '../models/create-listing-req';

const httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  	baseUrl: string = "/api/Listing";

  	constructor(private httpClient: HttpClient) { }

  	getListings(): Observable<Listing[]> {				
	return this.httpClient.get<Listing[]>(this.baseUrl + "/retrieveAllListings").pipe
	  	(
			catchError(this.handleError)
	  	);
	}
		
	getListingById(listingId : number): Observable<Listing> {
		return this.httpClient.get<Listing>(this.baseUrl + "/retrieveListing/" + listingId).pipe
		(
			catchError(this.handleError)
		);
	}

	createNewListing(listingToAdd: Listing, memberToAdd: Member): Observable<number>
	{		
		let createListingReq: CreateListingReq = new CreateListingReq(listingToAdd, memberToAdd);
		
		return this.httpClient.put<number>(this.baseUrl, createListingReq, httpOptions).pipe
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
