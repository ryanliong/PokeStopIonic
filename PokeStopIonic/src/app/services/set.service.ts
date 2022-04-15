import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SetEntity } from '../models/set-entity';

const httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class SetService {

  baseUrl: string = "/api/Set";

  constructor(private httpClient: HttpClient) { }

  getSetById(setId : number): Observable<SetEntity> {
    return this.httpClient.get<SetEntity>(this.baseUrl + "/retrieveSet/" + setId).pipe(catchError(this.handleError));
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
