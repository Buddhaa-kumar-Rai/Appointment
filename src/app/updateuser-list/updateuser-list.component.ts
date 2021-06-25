import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SserviceService } from '../sservice.service';

@Component({
  selector: 'app-updateuser-list',
  templateUrl: './updateuser-list.component.html',
  styleUrls: ['./updateuser-list.component.css']
})
export class UpdateuserListComponent implements OnInit {
 'f':FormGroup
  constructor(private fr:FormBuilder,private ss:SserviceService,private router:ActivatedRoute,private rout:Router) { }

  ngOnInit(): void {
    this.ss.getcurrentdata(this.router.snapshot.params.id).subscribe((result:any)=>{
      this.f=this.fr.group({
        AppointmentName:[result['AppointmentName']],
        date:[result['date']],
        time:[result['time']],
        room:[result['room']],
      })
    })
  }
  updateinfos()
  {
    this.ss.updateinfo(this.router.snapshot.params.id,this.f.value).subscribe((result)=>{
      confirm("save change?");
      this.rout.navigate(['./appointpage']);

    })
  }

}
