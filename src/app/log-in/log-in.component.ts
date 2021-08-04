import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../appService/auth.service';
import { SserviceService } from '../sservice.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  'form': FormGroup;

  constructor(private f: FormBuilder, private router: Router, private authservice: AuthService, private ss: SserviceService) { }
  // mustmach(cont:string,co:string)
  // {
  //   return(form:FormGroup)=>{
  //     const control=form.controls[cont];
  //     const contr=form.controls[co];
  //     if(contr.errors && contr.errors.mustmach ){
  //       return
  //     }
  //     if(control.value !== contr.value){
  //       contr.setErrors({mustmach:true})
  //     }
  //     else{
  //       contr.setErrors(null);
  //     }
  //   }
  // }
  ngOnInit(): void {
    this.form = this.f.group({
      //  mail: ['', Validators.email],
      //  pass: ['', Validators.required],
      email: ['', Validators.email],
      passw: ['', Validators.required],
      //  confpass: ['', Validators.required],
      p:undefined
      
     }//,
    // {
    //   Validators:this.mustmach('pass','confpass')
    // }
    )


  }
  count  = 0;
 
  randomNumber() {
    let random = Math.floor(Math.random()*10);
    this.addRandomNumber(random);
    return  random;
  }
  addRandomNumber(random: any){
    this.count += random;
    return this.count; 
  }
p:any
  v = true
  v1 = false;
  t=false;
  go(){
     if(this.form.value===4)
     {
       this.t=true;
     }

  }
  sign() {
    
    this.v = false;
    this.v1 = false;
  }
  signup() {
    // this.ss.savedata(this.form.value).subscribe(res => {
    // });
    // if(this.form.valid)
    // {
      this.v = false;
    this.v1 = false;
    // }
    // else{
    //   alert("make sure that the form is filled correctly")
    // }
  }
  val() {
    this.v1 = true;
  }
  val1() {
    this.router.navigate(['./adminsign'])
  }

  onlogin() {
     if (this.form.valid) {
      // this.ss.getdata().subscribe((res: any) => {
      //   for (let i = 0; i < 2; i++) {
      //     if (res[i].mail === this.form.value.mail && res[i].pass === this.form.value.pass) {
            //this.router.navigate(['./dashb']);
            this.authservice.login();
          // }
          // else {
          //   alert("invalid password or email");
          // }
       // }
     // })

   //this.authservice.login();
    }
     else {
      alert("input must be filled with valid data!");
    }
   }

}
