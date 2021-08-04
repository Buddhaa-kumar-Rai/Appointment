import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounced-distnct',
  templateUrl: './debounced-distnct.component.html',
  styleUrls: ['./debounced-distnct.component.css']
})
export class DebouncedDistnctComponent implements OnInit,AfterViewInit {

  //ex-01
  @ViewChild('myinput')
  myinput!: ElementRef;

  constructor() { }
  data=null;

  ngOnInit(): void {
    
  }
  ngAfterViewInit(){
    const searchTerm=fromEvent<any>(this.myinput.nativeElement, 'keyup').pipe(
      map(event=>event.target.value),debounceTime(1000)
      //,distinctUntilChanged()
    );
    searchTerm.subscribe(res=>{
    console.log(res);
    this.data=res;

    setTimeout(() => {
      this.data=null
    }, 2000);
    })
  }

}
