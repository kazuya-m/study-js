// let myObj = {
//   id: 2,
//   printId(){
//     console.log(this.id);
//   }
// }

// function sayFoo() {
//   console.log(this['foo']);
// }

// foo = 'foo';

// const mySecondObj = {
//   foo: "im in the obk",
//   sayFoo
// }

// // sayFoo();
// mySecondObj.sayFoo();

// let test = function MyObj(id){
//   this.id = id;
// }

// test.prototype.printId = function(id) {
//   console.log(this.id);
// }

// const newInst = new test(5);
// newInst.printId();

// const outer = {
//   func1: function() {
//     console.log(this);

//     const func2 = function() {
//       console.log(this);
//     }()
//   }
// }

// outer.func1();



//-----------------------------apply call bind
// let arrayyyy = [0,1,2,3,4]

function greet(id) {
  let slicedArray = [].slice.call(arguments, 0,3);
  console.log(arguments);
  console.log(slicedArray);
  let hi = `hi, ${this.name}`;
  console.log(hi);

}

let obj = {name: "Tom"};

greet.call(obj, "aaa", "aaa"); //call→呼び出し先のthisを指定する。objを使ってください

// greet.apply(obj [1,2,3]);

// const array = [1,2,3,4];
// console.log(Math.min.apply(null, array));

// let myObj = {
//   id: 42,
//   print() {
//     console.log(this.id);
//     setTimeout(function (){
//       console.log(this.id);
//     }.bind(this), 1000);
//   }
// }

// myObj.print();

//--------------------------------arrow function

// const timesTwo = i => i * 2;

// const res = timesTwo(2);
// console.log(res);

// window.me = 'global';
// let outer = function(){
//   let me = 'outer';
//   return {
//     me: 'innner',
//     say: function () {
//       console.log(this.me); // innner
//     },
//     arrowSay: () => {
//       console.log(this.me); //global
//     }
//   }
// }

// outer().say();
// outer().arrowSay();

//----------------------------closure 
// let increment = (function () {
//   let counter = 0;

//   return function () {
//     counter += 1;
//     console.log(counter);
//   }
// })();

// increment();
// increment();
// increment();
// console.log(increment.counter);

//動的関数
// function addStringFactory(tail) {
//     return function (str) {
//       return str + tail;
//   };
// }

// let addAs = addStringFactory('AAA');
// let addBs = addStringFactory('BBB');

// let str = 'tom';
// str = addAs(str);
// console.log(str);


//------------------------------スプレット構文
// const sum = (x, y, z) => {
//   return x + y + z;
// }

// const numbers = [1,2,3];
// let res = sum (...numbers);
// console.log(res);

// let arr1 = [0,1,2];
// let arr2 = [3,4,5];

// //old
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
// //new
// let arr4 = [...arr1, 'aaa', ...arr2];
// console.log(arr4);

// let obj1 = {foo: 'bar', x: 42};
// let obj2 = {foo: 'tes', y: 42};
// let clonedObj = {...obj1, ...obj2};
// console.log(clonedObj);


// //a1段階目(bに値コピー)は残る、2段回目は消える(参照先コピー)
// let a = [[1,2], [3,4], [5,6]];
// let b = [...a];
// console.log(b.shift().shift());
// console.log(a);

//rest parameters func引数がスプレット
let sum = (a, ...args) => {
  console.log(args);
  return args.reduce((previous, current) => {
    return previous + current;
  });
}
console.log(sum(1,2,3));