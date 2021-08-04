import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  x!:Subscription;
  y:any;
  q:any;
  

  constructor() { }

  ngOnInit(): void {
    const arr=[
      {id:1,name:'Budha'},
      {id:2,name:'Govinda'},
      {id:3,name:'Kamal'},
      {id:4,name:'Eva'}
    ]
    const a=interval(1000);
    this.x=a.pipe(map (data=>data * 10)).subscribe(res=>{
    //console.log(res);
    this.y=res;
    if(res>=100){
      this.x.unsubscribe();
    }
    })

    let m=from(arr);
    m.pipe(map(d=>d.name))
    .subscribe(res=>{
     // console.log(res);
       this.q=res;
      this.print(this.q);
  
    })
  }
  print(i:any){
    let e=document.createElement('li');
    e.innerText=i;
    document.getElementById('element')?.appendChild(e)
  }

}
