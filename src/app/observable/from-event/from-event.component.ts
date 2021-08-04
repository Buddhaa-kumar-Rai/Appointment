import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { AuthService } from 'src/app/appService/auth.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements OnInit,AfterViewInit {


  // Creating Observable Stream Using FromEvent


  constructor(private service:AuthService) { }
  @ViewChild('addbtn')
  adbtn!: ElementRef;

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    let count = 1;
    fromEvent(this.adbtn.nativeElement,'click').subscribe(res=>{
    //console.log('Video'+ count++);
    let i = 'RollNo. '+ count++;


    this.print(i);
    // this.print(i,'element');
    // this.print(i,'element1');
    // this.service.print(i,'element');
    // this.service.print(i,'element1');
    })
  }

  print(i:any){
    let elemnt=document.createElement('li');
    elemnt.innerText=i;
    document.getElementById('element')?.appendChild(elemnt);
  }

  // print(i:any,containerId:any){
  //   let elemnt = document.createElement('li');
  //   elemnt.innerText = i;
  //   document.getElementById(containerId)?.appendChild(elemnt);
  // }

}
