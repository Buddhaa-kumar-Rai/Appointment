import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan } from 'rxjs/operators';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.css']
})
export class RetryComponent implements OnInit {
  sa:any;
  fetching:boolean=false;
  fetch='No data';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    
  }
  gets() {
    // this.service.getdata().subscribe(res => {
      //this.sa = res;
      this.fetching=true;
      this.http.get('http://localhost:3000/users').pipe(
        retry(4)
        // retryWhen(err=>err.pipe(delay(3000),scan((retrycount)=>{
        //   if(retrycount>5){
        //     throw err;
        //   }else{
        //     return retrycount++;
        //   }
        // },0)))
        )
      .subscribe((res:any)=>{
      console.log(res);
      this.sa = res;
      this.fetch='fetch data';
      this.fetching=false;
  },
  (err:any)=>{
    console.log(err);
    this.fetching=false;
    this.fetch='problem fetching data';
  }
  )
  }

}
