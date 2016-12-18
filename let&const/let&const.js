{
    let a = 10;
    var b = 1;
}

console.log(a);// ReferenceError: a is not defined
console.log(b);// 1

var a = [];
for(var i = 0; i < 10; i++){
    a[i] = function(){
        console.log(i);
    }
}
a[6](); //10

/*=================================*/

var a = [];
for(let i = 0; i<10; i++){
    a[i] = function(){
        console.log(i);
    }
}
a[6](); //6

/*==========暂时性死区（temporal dead zone, TDZ）==========*/
/*
*   ES6明确规定，如果在区块中存在let和const关键字，这个区块对这些关键字声明的变量，
*   从一开始就形成了封闭作用域。凡是在声明之前使用这些变量，就会报错（referenceError）
 */
var tmp = 123;
if(true){
    tmp = 'abc'; // referenceError
    let tmp;
}

if(true) {
    //TDZ开始
    tmp = 'abc';  //referenceError
    console.log(tmp); //referenceError

    let tmp; //TDZ 结束
    console.log(tmp); //undefined

    tmp = 123; 
    console.log(tmp); //123
}

/**
 * 总结： 在ES6中规定了暂时性死区和let、const语句不出现变量提升，
 * 在ES6中使用变量一定要在声明该变量之后，避免此类错误。
 */

/*============ ES6中不允许重复声明 =========*/

/* 报错
function () {
    let a = 10;
    var a =1;
}

function (){
    let a = 10;
    let a = 1;
}

function fun(arg){
    let arg; //报错
}
*/
function fun (arg){
    {
        let arg; //不报错
    }
}

/*=================== 块级作用域 ===================*/
function fn (){
    let n = 5;
    if(true){
        let n =10;
    }
    console.log(n); //5
}
//不同的块级作用域声明的变量不会互相影响

/**
 * const声明一个只读常量。一旦声明，常量的值就不能改变，
 * 且const在声明时就要立即赋值，否则会报错。
 * 与let类似。
 */

/*================== const特殊点 ======================*/
/**
 * 对于复合类型的变量，变量名不指向数据，
 * 而是指向数据所在的地址。const命令只是保证变量名指向的地址不变，
 * 并不保证该地址的数据不变，所以将一个对象声明为常量必须非常小心。
 */
const foo = {};
foo.prop = 123;
foo.prop; //123

const arr = [];
arr.push('hello');//可执行
arr.length = 0; //可执行
arr = ['Dave']; //报错

//ES6 提供了一个对象冻结方法 Object.freeze，使常量指向一个冻结的对象，
//添加新属性则不起作用，严格模式下报错。
const freezeObject = Object.freeze({});
freezeObject.prop = 123; //报错;

/*================== 在不同环境中获取顶层对象的方法 =====================*/
//方法一
var getGlobal = function () {
  if (typeof self !== 'undefined') { return self; }
  if (typeof window !== 'undefined') { return window; }
  if (typeof global !== 'undefined') { return global; }
  throw new Error('unable to locate global object');
};
//方法二
(typeof window !== 'undefined'
   ? window
   : (typeof process === 'object' &&
      typeof require === 'function' &&
      typeof global === 'object')
     ? global
     : this);