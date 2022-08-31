import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {
  }


  canActivate(_next: ActivatedRouteSnapshot, _state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let bx = this.authService;
    let status: boolean;
    async function getStatus() {
      await bx.isLoggedIn.subscribe(data => {
        status = data;
        return;
      })
    }
    getStatus();

    if (status) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }

}