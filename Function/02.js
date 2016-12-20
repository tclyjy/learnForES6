/**
 * 二、rest参数
 * ES6引入rest参数("...变量名")，用于获取函数的多余参数
 * arguments就不需要使用了
 */

function add(...values) {
  let sum = 0;
  for (var val of values) {
    sum += val;
  }
  return sum;
}
add(1, 2, 3, 4, 5, 6) //21


// arguments变量的写法
function sortNumbers() {
  return Array.prototype.slice.call(arguments).sort();
}

// rest参数的写法
var sortnumbers = (...numbers) => numbers.sort();

//用rest改写数组push方法
function push(array, ...items) {
  items.forEach(function (item) {
    array.push(item);
  });
}
var a = [];
push(a, 1, 2, 3)

//注意！！！rest参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。