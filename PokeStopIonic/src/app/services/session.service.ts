import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  getLogin(): boolean {
    if(sessionStorage['isLogin'] == true) {
      return true;
    } else {
      return false;
    }
  }

  setIsLogin(isLogin : boolean) : void {
    sessionStorage['isLogin'] = isLogin;
  }

  getCurrentStaff(): Member
  {
    return JSON.parse(sessionStorage['currentMember']);
  }

  setCurrentStaff(currentMember: Member | null): void
  {		 
    sessionStorage['currentMember'] = JSON.stringify(currentMember);
  }

  getUsername(): string
  {
    return sessionStorage['username'];
  }



  setUsername(username: string | undefined): void
  {
    sessionStorage['username'] = username;
  }
  
  
  
  getPassword(): string
  {
    return sessionStorage['password'];
  }



  setPassword(password: string | undefined): void
  {
    sessionStorage['password'] = password;
  }
}
