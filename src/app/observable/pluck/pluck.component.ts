import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map, pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {
  data:any;

  constructor() { }
  users=[
    {name:'Buddha',color:'red'},
    {name:'Sangay',color:'green'},
    {name:'Bishal',color:'yellow'},
    {name:'Govinda',color:'yellow',job:{title:'teacher'},exp:10, a:['a','b']},
  ]

  ngOnInit(): void {
    from(this.users).pipe(
      //map(d=>d.name),
      filter((user: any) => +user.exp > 9),
      pluck('exp'),
     // pluck('job','title'),
    toArray())
    .subscribe(a=>{
      console.log(a);
      this.data=a;
    })
  }
}
