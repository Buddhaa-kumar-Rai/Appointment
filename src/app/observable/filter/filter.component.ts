import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  data:any;

  constructor() { }
  users=[
    {id:1,name:'Buddha',gender:'male',color:'red'},
    {id:2,name:'Sangay',gender:'female',color:'green'},
    {id:3,name:'Bishal',gender:'male',color:'yellow'},
    {id:4,name:'Govinda',gender:'female',color:'yellow',job:{title:'teacher',exp:10}},
  ]

  ngOnInit(): void {
    const x=from(this.users);
    // from(this.users).subscribe(a=>{
    //   console.log(a);
    // })
    x.pipe(
      // filter(i=>i.name.length>6)
      // filter(i=>i.gender =='male')
      filter(i=>i.id <3)
      ,toArray()).subscribe(a=>{
      console.log(a);
      this.data=a;
    })
  }

}
