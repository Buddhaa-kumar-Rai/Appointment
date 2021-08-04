import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { SserviceService } from '../sservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userName = new Subject<string>();//cannot set initial value
  userNaame=new BehaviorSubject<string>('Kumar');//can set initial value
  photoEmit=new ReplaySubject<string>(2);//store multiple value

  constructor(private router:Router,private ss:SserviceService) { }
  a=false;
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

  loginnm(){
    this.ss.getdataadmin().subscribe((res:any)=>{
      for(let i=0;i<2;i++)
      {
        if(res[i]==="admin@a.com" && res[i]==="54321"){
          this.router.navigate(['./service']);
        }
      }
    })
  }






  print(i:any,containerId:any){
    let elemnt = document.createElement('li');
    elemnt.innerText = i;
    document.getElementById(containerId)?.appendChild(elemnt);




    
  }




















}
