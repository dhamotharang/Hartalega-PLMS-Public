import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {Observable, pipe, throwError} from 'rxjs';
import {map, tap} from 'rxjs/operators';
// import decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private message: string;

  constructor(private _router: Router) { }

  
  clear(): void {
    localStorage.clear();
  }

  
  isAuthenticated(): boolean 
  {
    if(localStorage.getItem('loginname') != null && localStorage.getItem('loginname') != "")
    {
      return true;
    }
    //return false;
    ///return localStorage.getItem('loginname') != null && !this.isTokenExpired();
  }

  isTokenExpired(): boolean 
  {
    return false;
  }

  
  setlogin(_login:any): void 
  {
    localStorage.setItem('loginname', _login);
    this._router.navigate(['/Mainscreen']);
  }

  
  logout(): void {
    this.clear();
    this._router.navigate(['/login']);
  }

  decode() {
    // return decode(localStorage.getItem('token'));
  }
}
