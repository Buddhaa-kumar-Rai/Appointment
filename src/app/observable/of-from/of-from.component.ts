import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { AuthService } from 'src/app/appService/auth.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  message:any;

  constructor(private service:AuthService) { }

  ngOnInit(): void {
    //of
    const observable1 = of('Buddha','Kumar','Rai');
    observable1.subscribe(res => {
      //this.service.print(res,'element');
      //console.log(res);
      this.print(res);
    })


    const observable2 = of({x:'Buddha',y:'Kumar',z:'Rai'});
    observable2.subscribe(res => {
      this.message=res;
      console.log(res);
    })

    //From-array

    const observable3 = from(['Buddhaaa','Kumarrr','Raiii']);
    observable3.subscribe(res => {
      console.log(res);
      this.service.print(res,'element1')
    })

    //from-promise

    const promise = new Promise(resolve => {
      setTimeout(() => {
        resolve('promise resolved')
      },3000)
    })
    // promise.then(res => {
    //   console.log(res);
    // })

    const observable4 = from(promise);
    observable4.subscribe(res => {
      //console.log(res);
      this.service.print(res,'element2')
    })

    //from-string

    const observable5 = from('I am Buddha');
    observable5.subscribe(res => {
      //console.log(res);
      this.service.print(res,'element3')
    })


  }



  print(a:any)
  {
    let c = document.createElement('li')
    c.innerText = a;
    document.getElementById('element')?.appendChild(c);
  }

}
