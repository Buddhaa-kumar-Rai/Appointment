import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Observable, Subscription } from 'rxjs';
import { AuthService } from 'src/app/appService/auth.service';


@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.css']
})
export class CustomComponent implements OnInit,OnDestroy {

  status:any;
  status2:any;
  name:any;
  subscription2!: Subscription;

  constructor(private service:AuthService) { }

  ngOnInit(): void {
    //ex-01 (manual)
    const cusObs1 = new Observable((observer)=>{
      setTimeout(()=>{
        observer.next('data emit 1');
      },1000);
      setTimeout(()=>{
        observer.next('data emit 2');
        observer.error('error-limit excced');
         this.status='error';
      },2000);
      setTimeout(()=>{
        observer.next('data emit 3');
        observer.complete();
        // this.status='completed';
      },3000)
   
    
    });
    cusObs1.subscribe(res=>{
      //console.log(res);
      this.service.print(res,"element")
    })
    
    // (err) =>{
    //   this.status='error';
    // },
    // () =>{
    //   this.status='completed';
    // }
    //subscribe(data,error,complete)




    //ex-02 (custom interval)

    const arr=['a','b','c','d','e','f','g','h'];

    const cusObs2 = new Observable((observer) =>{
      let count=0;
      setInterval(()=>{
        //observer.next('data emit '+count);
        observer.next(arr[count]);
        if(count>=5)
        {
          observer.complete();
          this.status2='completed'
        }
        count+=1;

      },1000)
      });
      this.subscription2=cusObs2.subscribe(res=>{
        console.log(res);
    });
    cusObs2.subscribe(res=>{
      //console.log(res);
      this.service.print(res,"element2")
    })


    //ex-03(random names)
    const arr1=['Buddha','Kumar','Lohorung','Rai'];
    const cusObs3 = new Observable((observer)=>{
      let i=0;
      setInterval(()=>{
        //observer.next('data emit '+count);
        observer.next(arr1[i]);
        if(i>=3)
        {
          observer.complete();
        }
        i++;
      },1000)
    });
    cusObs3.subscribe(res=>{
      console.log(res);
      this.name=res;
    })

  }
  ngOnDestroy(){
    this.subscription2.unsubscribe();
  }

}
