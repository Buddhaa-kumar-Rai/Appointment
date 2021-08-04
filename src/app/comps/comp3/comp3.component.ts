import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/appService/auth.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {

  name:any;

  constructor(private service:AuthService) {
    this.service.userNaame.subscribe((a:any)=>{
    this.name=a;
    })
   }

  ngOnInit(): void {
  }
  func(uname:any){
   //console.log(uname.value);
   this.service.userNaame.next(uname.value)
  }

}
