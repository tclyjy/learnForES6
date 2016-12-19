/**
 * 十、模板字符串
 */

//传统的JavaScript,输出模板通常是这样写的
$('#result').append(
  'There are <b>' + basket.count + '</b>' +
  'items in your basket, ' +
  '<em>' + basket.onSale +
  '</em> are on sale!'
);

//ES6 模板字符串写法
$('#result').append(`
  There are <b>${basket.count}</b> items
  in your basket,<em>${basket.onSale}</em>
  are on sale!
`);

//如果需要引用模板字符串本身，在需要时执行，可以像下面这样写。

// 写法一
let str1 = 'return ' + '`Hello ${name}!`';
let func1 = new Function('name', str1);
func1('Jack') // "Hello Jack!"

// 写法二
let str2 = '(name) => `Hello ${name}!`';
let func2 = eval.call(null, str2);
func2('Jack') // "Hello Jack!"