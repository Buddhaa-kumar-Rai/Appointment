import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { AuthService } from 'src/app/appService/auth.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  obsmsg:any;
  videoSubscription!:Subscription;

  constructor(private service:AuthService) { }

  ngOnInit(): void {
    // const broadcastvideo = interval(1000);
    const a = timer(5000,9000);
    this.videoSubscription = a.subscribe(res =>{
      console.log(res);
      this.obsmsg = 'video ' + res;
      //this.service.print(this.obsmsg,'element')

      //let a =  'video ' + res;
      this.print(this.obsmsg);
      if(res>=5){
        this.videoSubscription.unsubscribe();
      }
    })
  }
  print(a:any){
    let b = document.createElement('li');
    b.innerText = a;
    document.getElementById('element')?.appendChild(b)

  }

}
