import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  private user: User;
  authSubject = new Subject<boolean>();

  constructor(private router: Router) {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    }
    console.log(this.user);
    this.authSubject.next(true);
    this.router.navigate(['/training']);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 1000).toString()
    };
    console.log(this.user);
    this.authSubject.next(true);
    this.router.navigate(['/training']);
  }

  logout() {
    console.log('logout start');
    this.user = null;
    this.authSubject.next(false);
    this.router.navigate(['/login']);
    console.log('logout end');
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user != null;
  }
}
