import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Collection } from '../models/collection';
import { Card } from '../models/card';
import { UpdateCollection } from '../models/update-collection';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  baseUrl: string = "/api/Collection";

  constructor(private httpClient: HttpClient, private sessionService: SessionService ) { }

  getCollectionByMemberId(): Observable<Card[]> {
    let memberId = this.sessionService.getMemberId();
    return this.httpClient.get<Card[]>(this.baseUrl + "/retrieveCollection/" + memberId).pipe(catchError(this.handleError));
  }

  addCardToCollection(cardId: number): Observable<number> {
    let memberId = this.sessionService.getMemberId();
    let updateCollection: UpdateCollection = new UpdateCollection(cardId,memberId);

    return this.httpClient.post<number>(this.baseUrl + "/addCard", updateCollection).pipe(catchError(this.handleError));
  }

  removeCardFromCollection(cardId: number): Observable<number> {
    let memberId = this.sessionService.getMemberId();
    let updateCollection: UpdateCollection = new UpdateCollection(cardId,memberId);

    return this.httpClient.post<number>(this.baseUrl + "/removeCard", updateCollection).pipe(catchError(this.handleError));
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
