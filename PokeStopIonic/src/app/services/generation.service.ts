import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Generation } from '../models/generation';

const httpOptions = {
		headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class GenerationService {

  baseUrl: string = "/api/Generation";

  constructor(private httpClient: HttpClient) { }

  getRecords(): Observable<Generation[]>
	{				
	  return this.httpClient.get<Generation[]>(this.baseUrl + "/retrieveAllGenerations").pipe
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
