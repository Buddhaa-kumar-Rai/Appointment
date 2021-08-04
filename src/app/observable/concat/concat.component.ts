import { Component, OnInit } from '@angular/core';
import { concat, interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { AuthService } from 'src/app/appService/auth.service';

@Component({
  selector: 'app-concat',
  templateUrl: './concat.component.html',
  styleUrls: ['./concat.component.css']
})
export class ConcatComponent implements OnInit {

  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    // const source1=interval(1000).pipe(map(re=>'list1 '+(re+1)),take(4));
    // const source2=interval(1000).pipe(map(re=>'list2 '+(re+1)),take(3));
    // const source3=interval(1000).pipe(map(re=>'list3 '+(re+1)),take(2));
    // const concatt:any=concat(source1,source2,source3)
    // concatt.subscribe((a:any)=>{
    //   //console.log(a);
    //   this.authservice.print(a,'element');
    // })
    const source1=interval(3000).pipe(map(re=>'list1 '+(re+1)),take(4));
    const source2=interval(1000).pipe(map(re=>'list2 '+(re+1)),take(3));
    const source3=interval(2000).pipe(map(re=>'list3 '+(re+1)),take(2));
    const mergs:any=merge(source1,source2,source3)
    mergs.subscribe((a:any)=>{
      //console.log(a);
      this.authservice.print(a,'element');
    })
  }

}
