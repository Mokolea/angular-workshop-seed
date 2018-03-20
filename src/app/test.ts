// Info - Angular Workshop - 2018-03-19..22

// Michael Hladky

// https://goo.gl/Zaud7Z
// https://drive.google.com/drive/folders/1qg87L8Yp81a2Of-PB7IieTsOEqfuLGAx

// git status && echo - && git remote -v && echo - && git branch -avv
// git push --set-upstream origin start_01_dev

// TypeScript - compiler

const t = 12;
//t = 13121;

let myname: string = 'aaa';
//let myname = "bbb";

//let myname: string;
//myname = 'aaa';


let arr1: Array<string> = ['a', 'b'];
let arr2: string[] = ['a', 'b'];

let arr3: Array<string> = new Array<string>();


fn(1);

function fn(param1: number, param2?: number): number { // optional param2
  console.log('aaa', this);
  if(param2){
    return param1 + param2;
  }
  else {
    return param1;
  }
}

// lambda
let calc: (a:number, b:number) => number;

calc = (a,b) => {
  return a+b;
};


fn1(); // defined below - function "hoisting" ???

function fn1(): void {
  console.log('asdf')
}

fn1.name; // attention for anonymous functions


enum Direction { UP, DOWN, LEFT, RIGHT }

Direction.UP;


var a = 1;
var b = '1';
// a == b   true   '1' to numeric ok
// a === b  false

var obj1 = {a: 1};

var obj2 = obj1;  // ref   obj1 === obj2


