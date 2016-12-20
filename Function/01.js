/**
 * 一、函数参数的默认值
 */
//ES6之前，函数参数指定默认值方法
function log(x, y) {
  y = y || 'world';
  console.log(x, y);
}
log('Hello') // Hello World
log('Hello', 'China') //Hello China
log('Hello', '') //Hello World

//ES6写法
function log(x, y = 'World') {
  console.log(x, y);
}
log('Hello') //Hello World
log('Hello', 'China') //Hello China
log('Hello', '') //Hello

//例二
function Point(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
var p1 = new Point();
p1 //{x:0,y:0}
var p2 = new Point(1);
p2 //{x:1,y:0}
var p3 = new Point(1, 1);
p3 // {x:1,y:1}

/**
 *  参数变量默认声明，不能用let或const再次声明
 *  function foo (x=5){
 *    let x = 1; //error
 *    const x =2; //error
 *  }
 */

//与解构赋值默认值结合使用
function foo({
  x,
  y = 5
}) {
  console.log(x, y);
}
foo({}) //undefined,5
foo({
    x: 1
  }) //1,5
foo({
    x: 1,
    y: 2
  }) //1,2

//例二
function fetch(url, {
  body = '',
  method = 'GET',
  headers = {}
}) {
  console.log(method);
}
fetch('http://example.com', {}) //'GET'
fetch('http://example.com') //error

//特殊用法
function fetch(url, {
  method = 'GET'
} = {}) {
  console.log(method);
}

fetch('http://example.com') // "GET"
  //上面代码中，函数fetch没有第二个参数是，函数参数的默认值就会生效，然后进行解构赋值，变量method取到默认值GET


//测试 下列两种写法有何区别
// 写法一
function m1({
  x = 0,
  y = 0
} = {}) {
  return [x, y];
}

// 写法二
function m2({
  x,
  y
} = {
  x: 0,
  y: 0
}) {
  return [x, y];
}
//上面两种写法都对函数的参数设定了默认值，区别是写法一函数参数的默认值是空的对象，但是设置了对象解构赋值的默认值
//写法二函数参数的默认值是一个有具体属性的对象，但是没有设置对象解构的默认值

// 函数没有参数的情况
m1() // [0, 0]
m2() // [0, 0]

// x和y都有值的情况
m1({
    x: 3,
    y: 8
  }) // [3, 8]
m2({
    x: 3,
    y: 8
  }) // [3, 8]

// x有值，y无值的情况
m1({
    x: 3
  }) // [3, 0]
m2({
    x: 3
  }) // [3, undefined]

// x和y都无值的情况
m1({}) // [0, 0];
m2({}) // [undefined, undefined]

m1({
    z: 3
  }) // [0, 0]
m2({
    z: 3
  }) // [undefined, undefined]

//参数默认值得位置
// 例一
function f(x = 1, y) {
  return [x, y];
}

f() // [1, undefined]
f(2) // [2, undefined])
f(, 1) // 报错
f(undefined, 1) // [1, 1]

// 例二
function f(x, y = 5, z) {
  return [x, y, z];
}

f() // [undefined, 5, undefined]
f(1) // [1, 5, undefined]
f(1, , 2) // 报错
f(1, undefined, 2) // [1, 5, 2]
  //上面代码中，有默认值的参数都不是尾参数。这时，无法只省略该参数，而不省略它后面的参数，除非显式输入undefined。

//如果传入undefined，将触发该参数等于默认值，null则没有这个效果。
function foo(x = 5, y = 6) {
  console.log(x, y);
}

foo(undefined, null) // 5 null