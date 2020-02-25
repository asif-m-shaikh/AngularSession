import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  url = '/login'
  access=['user','login']
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (state.url == this.url) {
      return true;
    } else if(this.access.includes(route.data[0])){
      return true
    }else {
      this.router.navigate(['/login'])
    }
    
  }

  constructor(private router: Router) { }
}
