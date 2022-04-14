import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SessionService } from '../services/session.service';
import { Member } from '../models/member';
import { CreateMemberReq } from '../models/create-member-req';


const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseUrl: string = "/api/Member";

  constructor(private httpClient: HttpClient, private sessionService: SessionService) { }

  memberLogin(username: string | undefined, password: string | undefined): Observable<Member> {
    return this.httpClient.get<Member>(this.baseUrl + "/memberLogin?username=" + username + "&password=" + password).pipe (
      catchError(this.handleError)
    );
  }

  createNewMember(newMember: Member): Observable<number> {
    let createMemberReq: CreateMemberReq = new CreateMemberReq(newMember);

    return this.httpClient.put<number>(this.baseUrl, createMemberReq, httpOptions).pipe (
      catchError(this.handleError)
    );
  }

  retrieveMemberId(username: string): Observable<number> {
		return this.httpClient.get<number>(this.baseUrl + "/retrieveMemberId/" + username).pipe
		(
			catchError(this.handleError)
		);
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
