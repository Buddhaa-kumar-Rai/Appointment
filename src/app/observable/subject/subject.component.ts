import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/appService/auth.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  username:String='Buddha';

  constructor(private service:AuthService) {
    this.service.userName.subscribe((a:any)=>{
    this.username=a;
    })
   }

  ngOnInit(): void {
  }

}
