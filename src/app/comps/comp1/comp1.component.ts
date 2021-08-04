import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/appService/auth.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  name:string='Buddha';

  constructor(private service:AuthService) {
    this.service.userName.subscribe((a:any)=>{
    this.name=a;
    })
   }

  ngOnInit(): void {
  }
  func(uname:any){
   //console.log(uname.value);
   this.service.userName.next(uname.value)
  }

}
