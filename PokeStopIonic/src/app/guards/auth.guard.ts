import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { SessionService } from '../services/session.service';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate, CanDeactivate<unknown> {
  constructor(private router: Router,
              private sessionService: SessionService)
  {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.sessionService.getIsLogin()) {
      member: Member;
      let member = this.sessionService.getCurrentMember();
      return true;
    }
    else {
      this.router.navigate(['/access-right-error']);
      return false;
    }
  }



  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
  {
    return true;
  }
  
}