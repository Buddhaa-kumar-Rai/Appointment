import { Component } from '@angular/core';

// class User  {
//   appointment: string;
//   date: string;
// }

// const users: User[] = [{
//   appointment: 'a',
//   date: 'b'
// },
// {
//   appointment: 'a1',
//   date: 'qdqweb'
// },

// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appointmentScheduler';

  // constructor() {
  //   users.find(user => user.appointment ==='á')
  // }
 
}
function a(n:number) {
    
    return n;
}
console.log(a(4))

//pracise
const marks = [1,2,3,4,5,"apple"];
const marks2=[10,20,30];
let copy=marks.slice();
let y=marks;
console.log(marks);
y.splice(2)
console.log(marks)
console.log("length is",marks.length);
console.log(Array.isArray(marks));
console.log(marks.indexOf(2));

let x=[];
x=marks.concat(marks2);
console.log(x);
console.log(copy);

//let tryy = copy.findIndex(a => a < 5);
let tryy = copy.find(a => a < 5);
//let tryy = copy.includes(6);
console.log('this',tryy)
const try1 = (element:any) => element % 2 === 0;
console.log(copy.every(try1));
//console.log(copy.some(try1));
const r = (a:any,b:any) => a + b;
console.log(copy.reduce(r));

//objects

const myobj={
  name : "Buddha",
  age: 24,
  marks:[1,20,30,4],
  male:true,
}
console.log(myobj.marks[2]);
console.log(myobj.name);
console.log(myobj['name']);
console.log('Name is', myobj.name);

for(const [key,value] of Object.entries(myobj))
{
  console.log(key,value)
}
console.log(Object.keys(myobj))

myobj.marks.forEach(element => {
  console.log(element);
});