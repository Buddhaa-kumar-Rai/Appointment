import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../appService/auth.service';
import { SserviceService } from '../sservice.service';

@Component({
  selector: 'app-creat-page',
  templateUrl: './creat-page.component.html',
  styleUrls: ['./creat-page.component.css']
})
export class CreatPageComponent implements OnInit {
  'form':FormGroup;
  constructor(private fb:FormBuilder,private ss:SserviceService,private router:Router,private authservice:AuthService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      AppointmentName:['',[Validators.required,Validators.minLength(4)]],
      date:['',Validators.required],
      time:['',Validators.required],
      room:['',Validators.required]
      })
  }
  po(){
    if(this.form.valid){
    this.ss.savedata(this.form.value).subscribe(res=>{ 
        });
    alert("submitted successfuly")
    this.router.navigate(['./appointpage']);}
    else{
      alert("make sure all inputs are filled!");
    }
  }
  view(){
    this.router.navigate(['./appointpage']);
  }

  onlogout(){
   this.authservice.logout();
  }
  notify(){
    this.router.navigate(['./status']);
  }

}
