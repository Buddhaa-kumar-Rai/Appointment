import { Component, OnInit } from '@angular/core';
import { AuthService } from '../appService/auth.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.func()
  }
  value=false;
  
  func()
  {
    this.authservice.loginnm();

}
}
