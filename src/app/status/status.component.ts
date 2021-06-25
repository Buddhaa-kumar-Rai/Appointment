import { Component, OnInit } from '@angular/core';
import { SserviceService } from '../sservice.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(private ser:SserviceService) { }

  ngOnInit(): void {
    this.gets();
  }

  saa:any;
  gets() {
  this.ser.getdd().subscribe(res => {
    this.saa = res;
  });
}

}
