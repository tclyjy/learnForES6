/**
 * 三、扩展运算符
 * 后面跟数组，将数组转换为用逗号分隔的参数序列
 */

console.log(...[1, 2, 3]); //1,2,3

[...document.querySelectorAll('div')] //[<div>,<div>,<div>]

//该运算符主要用于函数调用

function push(array, ...items) {
  array.push(...items);
}

function add(x, y) {
  return x + y;
}
var numbers = [4, 38];
add(...number); //42

//替代数组的apply方法 将数组转换为函数的参数

//ES5写法
function f(x, y, z) {}
var args = [0, 1, 2];
f.apply(null, args);
//ES6写法
function f(x, y, z) {}
var args = [0, 1, 2];
f(...args);

//另一个例子是通过push函数，将一个数组添加到另一个数组的尾部。
// ES5的写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);

// ES6的写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);

//扩展运算符的应用
//(1)合并数组
//ES5
[1, 2].concat(more);
//ES6
[1, 2, ...more];

//(2)与解构赋值结合
//ES5
a = list[0], rest = list.slice(1)
  //ES6 
  [a, ...rest] = list;

var [first, ...rest] = [1, 2, 3, 4, 5];
first // 1
rest // [2, 3, 4, 5]

var [first, ...rest] = [];
first // undefined
rest // []:

var [first, ...rest] = ["foo"];
first // "foo"
rest // []

//(3)函数的返回值
//JavaScript的函数只能返回一个值，如果需要返回多个值，只能返回数组或对象。扩展运算符提供了解决这个问题的一种变通方法。

var dateFields = readDateFields(database);
var d = new Date(...dateFields);

//（4）字符串
//扩展运算符还可以将字符串转为真正的数组。

[...
  'hello'
]
// [ "h", "e", "l", "l", "o" ]

//（5）实现了Iterator接口的对象

//任何Iterator接口的对象，都可以用扩展运算符转为真正的数组。

var nodeList = document.querySelectorAll('div');
var array = [...nodeList];
//上面代码中，querySelectorAll方法返回的是一个nodeList对象。它不是数组，而是一个类似数组的对象。这时，扩展运算符可以将其转为真正的数组，原因就在于NodeList对象实现了Iterator接口。
let arrayLike = {
  '0': 'a',
  '1': 'b',
  '2': 'c',
  length: 3
};
var arr = [...arrayLike];

//（6）Map和Set结构，Generator函数
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

var arr = [...map.keys()]; // [1, 2, 3]

var go = function* () {
  yield 1;
  yield 2;
  yield 3;
};

[...go()] // [1, 2, 3]