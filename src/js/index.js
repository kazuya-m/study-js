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

// function greet(id) {
//   let slicedArray = [].slice.call(arguments, 0,3);
//   console.log(arguments);
//   console.log(slicedArray);
//   let hi = `hi, ${this.name}`;
//   console.log(hi);

// }

// let obj = {name: "Tom"};

// greet.call(obj, "aaa", "aaa"); //call→呼び出し先のthisを指定する。objを使ってください

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
// let sum = (...args) => {
//   console.log(args);
//   return args.reduce((previous, current) => {
//     return previous + current;
//   });
// }

// console.log(sum(1,2,3));


//------------------分割代入
// let a, b, rest;
// [a, b] = [10, 20]; 
// console.log(a);
// console.log(b);

// let c, d, rest1;
// [c, d, ...rest1] = [10, 20, 30, 40, 50];
// console.log(c); //10
// console.log(d); //20
// console.log(rest1); //[30 ~ 50]

// let e, f, rest2;
// [e] = [10, 20, 30, 40, 50];
// console.log(e); //10
// [e,,f] = [10, 20, 30, 40, 50];
// console.log(e); //10
// console.log(f); //30

// let g, h, i;
// [g,,h,i=1] = [10, 20, 30];
// console.log(g); //10
// console.log(h); //30
// console.log(i); //1

// //obg分割代入 要プロパティ一致
// const { p1: p11, p2, ...restp} = {p1: 10, p2: 20, p3: 30, p4: 40};
// console.log(p11); //10
// console.log(p2); //20
// console.log(restp); //{p3 ~ p4}

//関数の引数を分割代入
//引数がある場合はそれが入り、ない場合は初期値。右辺の空オブジェクトがないと引数なしはエラー。
//左辺に初期値は代入する右辺に値なしの場合にセットされるから。
// const drawES2015Chart = ({size = 'big', coords = {x: 0, y: 0}, radius = 25} = {}) => { 
//   console.log(size);  //渡されたさいず
//   console.log(coords); //渡されたcoords obj
//   console.log(radius); //25
// }

// drawES2015Chart({
//   size: 'hahaha',
//   coords: { c: 111, y: 222},
// });

// -----------------テンプレートリテラル(バックスラッシュ)
//変数追加とかで使う
//old
// let str = "hello";
// let str1 = "Hello" + str;
// //new
// let str2 = `Hello\n${str}`;
// console.log(str1);
// console.log(str2);

// const bFunc = (strings, ...values) => { //strings = 文字列が配列、...values=変数配列 
//   console.log(strings);
//   console.log(values);
//   return strings.reduce((accu, str, i) => {
//     let val = values[i] ? `${values[i]}` : "";
//     return `${accu}${str}${val}`
//   }, '');
// }
// const str1 = "bob";
// const str2 = "david";
// const result = bFunc`${str1} and ${str2}12345678`;　//変数以外の文字列が配列で引数stringsに渡される 変数は第2以降
// console.log(result);


//-------------------------------------------------loop
// const data = [1, 4, 2, 5, 3];
// const fruits = {banana: 'ばなな',apple: 'アップル', orange: 'オレンジ'};
// console.log(fruits);

// Object.prototype.additionalFn = function(){console.log('add')};

// Object.prototype.additionalFn();

// //object loop
// let keyFruits = Object.keys(fruits); //keyを配列化
// // console.log(keyFruits);
// // for (let i = 0; i < keyFruits.length; i++) {
// //   console.log(i, fruits[keyFruits[i]]);
// // }

// //object for in キー情報,添字をiに格納する
// for (let i in fruits) {
//   if(fruits.hasOwnProperty(i)) { //プロタイプまで参照するため排除する
//     console.log(i, fruits[i]);
//   }
    
// }

// // for of バリューをiに格納する
// for (let i of data) {
//   console.log(i); //dataの値
// }

// for (let i of keyFruits) { //fruitsのプロパティ配列
//   console.log(i,fruits[i]); //iのプロパティ参照でfruitsの値
// }

// const valueFruits = Object.values(fruits); //objのバリューとる
// console.log(`values:${valueFruits}`);
// for (let i of valueFruits) { //fruitsのプロパティ配列
//   console.log(i); //iのプロパティ参照でfruitsの値
// }

// const entries = Object.entries(fruits); //ES8~ key: valueを1組ずつ配列で持つ
// console.log(entries);

// for ( let [k, v] of entries) { //k key v value
//   console.log(k, v);
// }

//-------------------------loop 高階関数 関数を引数や戻り値に持つ。基本こっち使う方が可読性が高い
 const data = [1, 4, 2, 5, 3];
// const fruits = {banana: 'ばなな',apple: 'アップル', orange: 'オレンジ'};
// console.log(fruits);

// data.forEach((val, ind, arr) => {
//   console.log(val, ind, arr);
// });

// const newData = data.map((val, ind, arr) => { //mapは戻り値が格納
//   const str = 'new';
//   console.log(val, ind, arr);
//   return `${str}:${val}${ind}${arr}`;
// });
// console.log(data);
// console.log(newData);

// //objectは一旦keyやvalueを配列化してから
// const newObj = Object.keys(fruits).map((val, ind, arr) => { //mapは戻り値が格納
//   const str = 'newObj';
//   console.log(val, ind, arr);
//   return `${str}:val:${val}ind:${ind}arr:${arr}`;
// });
// console.log(fruits);
// console.log(newObj);

// //filter
// const newFil = data.filter((val, ind, arr) => { //mapは戻り値が格納
//   return val <= 3;
// });
// console.log(newFil);

// //redude accuにループ毎に蓄積
// const reduce = data.reduce((accu, curr) => {
//   console.log(accu);
//   return accu + curr;
// });
// console.log(reduce);

// const sort = data.sort((a, b) => {
//   return a - b;
// });
// console.log(sort);
// console.log(data); //元の配列もソートされる

//for loopして作った配列をさらにloopしてソートするより可読性が高い
// const twoFunc = data
// .map((v) => v + 1)
// .sort((a, b) => {
//   return a - b;
// });
// console.log(data);
// console.log(twoFunc);

/**
 * 非同期処理 - callback func
 */
 const wait = (callback, num) => {
   setTimeout(() => {
     callback(num); //引数callbackに渡された関数を実行
    }, num);
  }
//入れ子になるとcallback地獄!!
wait(num => {
  num++;
  console.log(num);
  console.log('callback!')
  wait(num => {
    num++;
    console.log(num);
    console.log('callback number2!');
    wait(num => {
      num++;
      console.log(num);
      console.log('callback number3!');
    }, num);
  }, num);
}, 1000);

/**
 * 非同期処理 - promise func
 */
// const promise = (callback, num) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(num); //引数callbackに渡された関数を実行
//     }, num);  
//   });
// }

// wait(0).then(num => {
//   num + 1000;
//   return wait(num);
// })
