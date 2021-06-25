import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SserviceService } from '../sservice.service';

@Component({
  selector: 'app-update-request',
  templateUrl: './update-request.component.html',
  styleUrls: ['./update-request.component.css']
})
export class UpdateRequestComponent implements OnInit {
  'f': FormGroup
  constructor(private ss: SserviceService, private router: ActivatedRoute, private fr: FormBuilder, private rout: Router) { }
  a: any;
  ngOnInit(): void {
    this.ss.getcurrentdata(this.router.snapshot.params.id).subscribe((result: any) => {
      this.f = this.fr.group({
        AppointmentName: [result['AppointmentName']],
        date: [result['date']],
        time: [result['time']],
        room: [result['room']],
      })
    })
    this.f = this.fr.group({
      room: undefined,
    })
    this.gets();
  }
  updateinfos() {
    //this.ss.updateinfostatus(this.router.snapshot.params.id, this.f.value).subscribe((result) => {
    //confirm("Save Change?");
    this.ss.savedd(this.f.value).subscribe(res => {
    });
    window.location.reload();
    alert("done");

  }

  saa: any;
  gets() {
    this.ss.getdd().subscribe(res => {
      this.saa = res;
    });
  }
  deleteD(id: any) {
    this.ss.deletedd(id).subscribe(res => { this.gets() });
  }

}
