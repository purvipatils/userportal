import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInStatus = JSON.parse(localStorage.getItem('login')) || false;
  private isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.loggedInStatus);

  private loggedInUser = localStorage.getItem('username') || "Guest";
  private userInfo: BehaviorSubject<string> = new BehaviorSubject<string>(this.loggedInUser);

  get isLoggedIn() {
    return this.isAuthenticated.asObservable();
  }

  get userName() {
    return this.userInfo.asObservable();
  }  

  constructor(private router: Router) {

  }

  setUserName(user: string) {
    this.userInfo.next(user);
  }

  authenticate(isAuthUser: boolean) {
    if (isAuthUser) {
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
      this.router.navigate(['/login']);
    }
  }

}