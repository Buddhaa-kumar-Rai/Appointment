import { Component, OnInit } from '@angular/core';
import { SserviceService } from '../sservice.service';

@Component({
  selector: 'app-appointments-page',
  templateUrl: './appointments-page.component.html',
  styleUrls: ['./appointments-page.component.css']
})
export class AppointmentsPageComponent implements OnInit {

  constructor(private ser:SserviceService) { }

  ngOnInit(): void {
    this.gets();
  }

saa:any;
gets() {
  this.ser.getdata().subscribe(res => {
    this.saa = res;
   
  });
}
deleted(id:any){
  this.ser.deletedata(id).subscribe(res => {
   
    this.gets();
  });
}
}
