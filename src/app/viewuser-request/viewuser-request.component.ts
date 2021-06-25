import { Component, OnInit } from '@angular/core';
import { SserviceService } from '../sservice.service';

@Component({
  selector: 'app-viewuser-request',
  templateUrl: './viewuser-request.component.html',
  styleUrls: ['./viewuser-request.component.css']
})
export class ViewuserRequestComponent implements OnInit {

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

}
