import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {AppUrl} from '../constants/app-url';
@Injectable()
export class AuthService {


  constructor(private myRoute: Router) { }

  isAuthenticated() {
    return localStorage.getItem('isAuthenticated');
  }
  isLoggednIn() {
    return this.isAuthenticated() === 'true';
  }
  logout() {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('Authorization');
    localStorage.removeItem('user');
    localStorage.removeItem('role');

    this.myRoute.navigate([AppUrl.LOGIN]);
  }
}

