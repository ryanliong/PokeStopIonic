import { Injectable } from '@angular/core';

import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getIsLogin(): boolean {
    if (sessionStorage['isLogin'] == "true") {
      return true;
    } else {
      return false;
    }
  }

  setIsLogin(isLogin: boolean): void {
    sessionStorage['isLogin'] = isLogin;
  }

  getCurrentMember(): Member {
    return JSON.parse(sessionStorage['currentMember']);
  }

  setCurrentMember(currentMember: Member | null): void {
    sessionStorage['currentMember'] = JSON.stringify(currentMember);
  }

  getUsername(): string {
    return sessionStorage['username'];
  }

  setUsername(username: string | undefined): void  {
    sessionStorage['username'] = username;
  }

  getEmail(): string {
    return sessionStorage['email'];
  }

  setEmail(email: string | undefined): void  {
    sessionStorage['email'] = email;
  }

  getPassword(): string  {
    return sessionStorage['password'];
  }

  setPassword(password: string | undefined): void  {
    sessionStorage['password'] = password;
  }

  getMemberId(): number {
    return sessionStorage['memberId']
  }

  setMemberId(memberId: number | undefined): void {
    sessionStorage['memberId'] = memberId;
  }
}
