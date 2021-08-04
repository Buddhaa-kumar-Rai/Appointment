import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { delay, map, mergeAll, mergeMap } from 'rxjs/operators';
import { AuthService } from 'src/app/appService/auth.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.css']
})
export class MergemapComponent implements OnInit {
  dummyApi(data:any){
    return of(data +' is selected');//.pipe(delay(2000));
  }

  constructor(private ser:AuthService) { }

  ngOnInit(): void {
    const color=from(['red','green','blue']);

    //double subscribe
    // color.pipe(
    //   map(res=>this.dummyApi(res))
    // )
    // .subscribe(a=>
    // //   {
    // //   console.log(a);//returns only observable
    // // })
    // a.subscribe(b=>{
    //    console.log(b);//returns actual data
    //    this.ser.print(b,'element');
    // }))

    //map 
    color.pipe(
      map(res=>this.dummyApi(res))
    )
    .subscribe(a=>{
      console.log(a);
      this.ser.print(a,'element');
    })
    //map + merge
    color.pipe(
      map(res=>this.dummyApi(res)),mergeAll()
    )
    .subscribe(a=>{
      console.log(a);
      this.ser.print(a,'element1');
    })
    //mergeMap flatten
    color.pipe(mergeMap(res=>this.dummyApi(res))).subscribe(a=>{
      console.log(a);
      this.ser.print(a,'element2');
    })
  }

}
