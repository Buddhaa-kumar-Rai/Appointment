import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SserviceService } from '../sservice.service';

@Component({
  selector: 'app-updateadmin-list',
  templateUrl: './updateadmin-list.component.html',
  styleUrls: ['./updateadmin-list.component.css']
})
export class UpdateadminListComponent implements OnInit {
  'f': FormGroup
  constructor(private fr: FormBuilder, private ss: SserviceService, private router: ActivatedRoute,private r:Router) { }

  ngOnInit(): void {
    this.ss.getcurrentdataadmins(this.router.snapshot.params.id).subscribe((result: any) => {
      this.f = this.fr.group({
        name: [result['name']],
        date: [result['date']],
        time: [result['time']],
        sel: [result['room']],
      })
    })
  }
  updateinfos() {
    this.ss.updateinfoadmins(this.router.snapshot.params.id, this.f.value).subscribe((result) => {
      confirm("Save Change?");
      this.r.navigate(['/dashb']);

    })
  }

}
