/**
 * 七、用途
 */

// (1) 交换变量的值
[x,y] = [y,x];

// (2) 从函数返回多个值
/* 
 *一般情况下函数只能返回一个值，如果要返回多个值，只能将值装在数组或者对象上返回，
 * 解构赋值可轻松取出这些值
 */
//返回数组
function example () {
  return [1,2,3];
}
var [a,b,c] = example();

//返回对象
function example () {
  return {
    foo: 1,
    bar: 2
  };
}
var {foo, bar} = example();

// (3) 函数参数的定义

//参数是一组有次序的值
function f([x,y,z]){};
f([1,2,3]);

//参数是一组无次序的值
function f({x,y,z}){};
f({z:3,x:1,y:2});

// (4) 提取JSON数据

var jsonData = {
  id: 42,
  status: "OK",
  data: [123,456]
};
let{ id, status, data:number } = jasonData;
console.log(id,status,number);

// (5) 函数参数的默认值
jQuery.ajax = function (url, {
  async = true,
  beforeSend = function () {},
  cache = true,
  complete = function () {},
  crossDomain = false,
  global = true,
  // ... more config
}){
  // ... do stuff
};

// (6) 遍历Map解构
var map = new Map();
map.set('first','hello');
map.set('second','world');

for(let[key,value] of map){
  console.log(key + 'is' + value);
}

// (7) 输入模块的指定方法
const { SourceMapConsumer, SourceNode} = require("source-map");