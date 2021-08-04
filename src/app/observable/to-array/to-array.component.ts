import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  constructor() { }
  a:any;
  sourcesubscription!: Subscription;

  ngOnInit(): void {
    const s = interval(1000);
    this.sourcesubscription = s.pipe(
      take(5),
      toArray())
    .subscribe(res => {
      console.log(res);
      this.a=res;
      // if(res>=5){
      //   this.sourcesubscription.unsubscribe();
      // }
    })
  }

}
