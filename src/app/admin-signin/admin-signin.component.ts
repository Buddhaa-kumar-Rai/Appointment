import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SserviceService } from '../sservice.service';
//import { ServiceadminService } from '../adminpage/adminservice/serviceadmin.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {
 'form':FormGroup;
  constructor(private f:FormBuilder,private router:Router,private ss:SserviceService) { }

  ngOnInit(): void {
    this.form = this.f.group({
      mail: ['', Validators.email],
      pass: ['', Validators.required]
    })
  }
  func(){
    if(this.form.invalid)
    {
      alert("invalid password or email");
    }
    else{
      this.ss.getdataadmin().subscribe((res:any)=>{
        for(let i=0;i<2;i++)
        {
          if(res[i].name===this.form.value.mail && res[i].password===this.form.value.pass){
            this.router.navigate(['./dashb']);
          }
          else{
            alert("invalid password or email");
          }
        }
      })
     
    }
  }


}
