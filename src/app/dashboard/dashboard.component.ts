import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import { ActivatedRoute } from '@angular/router';
import { SserviceService } from '../sservice.service';
// import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  'f':FormGroup;
  constructor(private ss: SserviceService,private fr:FormBuilder,private r:Router) { }
  sa: any;
  ngOnInit(): void {
    //this.gets();
    this.f=this.fr.group({
      name:['',[Validators.required,Validators.minLength(4)]],
      date:['',Validators.required],
      time:['',Validators.required],
      sel:['',Validators.required]
    })
    this.gets();
    
  }
  get name(){
    return this.f.get('name');
  }
  gets() {
    this.ss.getdataadmins().subscribe(res => {
      this.sa = res;
    });
  }
  deleteD(id:any) {
    this.ss.deletedataadmins(id).subscribe(res => { this.gets() });
  }
 x=true;
 y=true;

 view()
  {
    this.x=false;
  }
  crt()
  {
    this.y=false;
  }
  postD()
  {
    if(this.f.valid)
    {
      this.ss.savedataadmins(this.f.value).subscribe(res=>{console.log(res)});
      alert("submitted successfuly");
      window.location.reload();
    }
    else{
      alert("make sure all the inputs are filled!");
    }
  }
  refresh(){
    window.location.reload();
  }
  
requests(){
  this.r.navigate(['./vsr'])
}

}
