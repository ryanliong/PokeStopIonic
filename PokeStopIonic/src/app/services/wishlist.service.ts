import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Card } from '../models/card';
import { UpdateCollection } from '../models/update-collection';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  baseUrl: string = "/api/Wishlist";

  constructor(private httpClient: HttpClient) { }

  getWishlistByMemberId(memberId : number): Observable<Card[]> {
    return this.httpClient.get<Card[]>(this.baseUrl + "/retrieveWishlist/" + memberId).pipe(catchError(this.handleError));
  }

  addCardToWishlist(cardId: number): Observable<number> {
    // update memberId here
    let memberId = 1;
    let updateCollection: UpdateCollection = new UpdateCollection(cardId,memberId);

    return this.httpClient.post<number>(this.baseUrl + "/addCard", updateCollection).pipe(catchError(this.handleError));
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
