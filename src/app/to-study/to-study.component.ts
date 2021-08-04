import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-study',
  templateUrl: './to-study.component.html',
  styleUrls: ['./to-study.component.css']
})
export class ToStudyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
var a = 'budha';
var b = 1.01;
console.log('hi', a);

let sym = Symbol();
console.log(sym);


var obj1 = { Obj: 'Budha' };
var obj2 = obj1;
obj2.Obj = 'Kumar';
console.log(obj1.Obj + ' ' + obj2.Obj);

//Numbers
var numberobj = new Number(10);
console.log(numberobj.valueOf());

var num = 10;
console.log(num.toString());
console.log(num.toString(2));//2 bit binary
console.log(num.toString(16));//16 bit binary
console.log((255).toString(16));

//substr(startIndex,Length)
//substring(startindex,endindex)
//string.lastIndexOf(substring,fromIndex)-->search from back//(opposite) indexOf() and count in descending order
var str = 'chrome browser';
console.log(str.lastIndexOf('ro', 7));
console.log(str.lastIndexOf('ro', 8));
console.log(str.lastIndexOf('ro'));

console.log('=============trim()==============');
//trim()-->removes blank space

var s = '   hello   ';
console.log(s);
console.log(s.trim());
//str.replace(firststr,newstr)
console.log(s.replace('hel', 'H').trim());
console.log(s.replace('hel', 'H'));

console.log('=============trim()==============');

console.log('======function======');

var addition = new Function('a', 'b', 'return a-b');
console.log(addition(10, 20));



function add(a: any, b: any) {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
var result = add(10, 20);
console.log(result);

//callback function

console.log('=============callback()==============');

// function greet(name:any) {
//   alert('welcome '+ name);

// }
// function  processUser(callback:any) {
//   var name = prompt('what is your name?');
//   callback(name);
// }
// processUser(greet);


//========apply() & call()
var obj = { name: 'monkey', sleep: '3 hours.' };
function f1(this: any, greet: any) {
  console.log(greet);
  var reply = [this.name, 'typically sleeps', this.sleep].join(' ');
  console.log(reply);
}
f1.apply(obj, ['Welcome to Forest:']);
f1.call(obj, 'Welcome to Forest:')

//bind()

var module = {
  obj: { name: 'lion', sleep: '4 hours.' },
  getObj: function () {
    var reply = [this.obj.name, 'typically sleeps', this.obj.sleep].join(' ');
    return reply;
  }
}
var boundGetObj = module.getObj.bind(module);
console.log(boundGetObj());

console.log('=============callback()==============');


//closure case 1
console.log("======closure case 1=====");
function function1(name: any) {
  var a = 'My Name is ';
  function function2(secondname: any) {
    return a + name + ' ' + secondname;
  }
  return function2;
}
// var function11 = function1('Buddha');
// console.log(function11('Kumar'));
console.log(function1('Kumar')('Buddha'));

//closure case 2
console.log("======closure case 2=====");

function productId() {
  var pId = 100;
  return {
    getId: function () {
      return pId;
    },
    setId: function (newId: any) {
      pId = newId;
    }
  }
}
var myId = productId();
console.log('current Id is: ', myId.getId());
//myId.setId(prompt('enter new id:'));
myId.setId(500);
console.log('updated Id is: ', +myId.getId());

console.log('======function======');

//for...of
console.log('======for ... of======');

// let array1 = [10,10,10,20,20,20,30,30];
let array1 = new Set([10, 10, 10, 10, 20, 20, 30, 30, 30, 40, 40, 50]);
for (let array of array1) {
  console.log(array);
}

(function (...params) {
  for (a of arguments) {
    console.log(a);
  }
})(1, 2, 3, 4, 4);
console.log('======for ... of======');
console.log('======for ... in======');
let array2 = [10, 2, 3, 4];
//array2.name = 'budha';
for (let a in array2) {
  console.log(a);// output-> 0 1 2 3 name
}
console.log('======for ... in======');
console.log('======destructuring Array======');
// let arr = [1,2,3];
// let [a1, a2] = arr;
// console.log(a1 + ' ' + a2);
let arr = [1, 2, 3, 10];
let [a1, a2, a3, a4] = arr;
console.log(a1 + ' ' + a2 + ' ' + a3 + ' ' + a4);
//with rest operator
let [aa1, ...rest] = arr;
console.log(aa1 + ' ' + rest);

let x, y;
// [x, y] =  [10, 20];
[x = 100, y = 'buddha'] = [10]//replece x with 10
console.log(x + ' ' + y);
//swaping using destructuring without using temporary variable
let var1 = 1, var2 = 900;
console.log('Before swaping');
console.log(var1);
console.log(var2);

[var1, var2] = [var2, var1];

console.log('After swaping');
console.log(var1);
console.log(var2);

//destructuring using with function
console.log('destructuring using function')
function ff() {
  return [11, 111, 1111];
}
let [ff1, ff2, ff3] = ff();
//let [ff1, , ff3] = ff(); //output-> ff1=11, ff3=1111
console.log(ff1 + ' ' + ff2 + ' ' + ff3);
console.log('======destructuring Array======');
//destructuring using with object
console.log('======destructuring Object======');
let ob = {
  age:24,
  name:'Lohorung'
}
let {age, name} = ob;
console.log(age);
console.log(name);
console.log('======destructuring Object======');

console.log('======CLass======');

class Buddha {
  firstName: any;
  lastName: any;
  constructor(firstNamee: any, lastNamee: any){
    this.firstName = firstNamee;
    this.lastName = lastNamee;
  }

  getfulName(){
    const fullName = `${this.firstName} ${this.lastName}`;
    return fullName;
  }

  editName(newName: any){
    const name = newName.split(' ');
    this.firstName = name[0];
    this.lastName = name[1];
  }
}

const myName = new Buddha('Buddhaa','Raaaaai');
// console.log(myName.getfulName());
myName.editName('Kumar Rai');
console.log(myName.getfulName());


console.log('======CLass======');


console.log('=======promise()======');

let promising = new Promise(function(resolve,reject){
  let isPromise = true;
  if(isPromise){
    resolve('Promise Resolved');
  }else{
    reject('Promise rejected');
  }
});
promising.then(res => {
  console.log('then code=> ',res);
}).catch(res => {
  console.log('catch code=> ',res);
})

console.log('=======promise()======');

console.log('=========TYPESCRIPT==========');

console.log('==========union=========');

type combinable = number | string;

function combine(input1: combinable, input2: combinable){
  let result;
  if(typeof input1 === 'number' && typeof input2 === 'number'){
    result = input1 + input2;
  }else{
    result = input1.toString() + input2.toString();
  }
  return result;
};
console.log(combine(100,100));
console.log('Bhutan', 'India');



console.log('==========callback=========');

function Adds(n1: number, n2: number, cb:(result: number)=>void){
  let result = n1 + n2;
  cb(result);
}
Adds(1000, 2000, (res: number) => {
  console.log('from callback', res);
});

console.log('=========TYPESCRIPT==========');

// let num1 = 21, num2 = 20, num3 = 30;
 //if(num1 > num2){
//    if(num1 > num3){
//      console.log(num1,' num1 is greater');
     
//    }
//    else{
//      console.log(num3,' num3 is greaterr');
     
//    }
//  }
//  else if(num2 > num3){
//   console.log(num2,' num2 is greater');
//  }
//  else{
//   console.log(num3, "num3 is greater");
// }










