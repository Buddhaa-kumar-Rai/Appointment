import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router:Router) { }
  isLoggedIn=false;
  login(){
    this.isLoggedIn=true;
    this.router.navigate(['./creat']);
  }
  logout(){
    this.isLoggedIn=false;
    confirm("are you sure you want to logout?");
    this.router.navigate(['./']);
  }
  isAuthenticated()
  {
    return this.isLoggedIn;
  }
}
