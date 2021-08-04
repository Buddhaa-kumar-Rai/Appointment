import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/appService/auth.service';

@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrls: ['./replaysubject.component.css']
})
export class ReplaysubjectComponent implements OnInit {
  user1:any;
  subscribe2!:Subscription;
  constructor(private service:AuthService) { }
  userlist1=[
    'a',
    'b'
  ];
  userlist2=[undefined];
  userlist3=[
    'a',
    'b'
  ]

  ngOnInit(): void {
    this.service.photoEmit.subscribe(a=>{
      this.userlist1.push(a);
    })
  }
func(photo:any)
{
   //console.log(photo.value);
   this.service.photoEmit.next(photo.value);
}
subscribemode2=false;
subscribemode3=false;

user2func(){
  if(this.subscribemode2==true)
  {
    this.subscribe2.unsubscribe();
  }
  else{
    this.subscribe2=this.service.photoEmit.subscribe((x:any)=>{
      this.userlist2.push(x)
    });
  }
this.subscribemode2=!this.subscribemode2;
}


}
