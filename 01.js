/**
 * RegExp构造函数
 */

//在ES5中，RegExp构造函数的参数有两种情况
var regex = new RegExp('xyz', 'i');
//等价于
var regex = /xyz/i;

var regex = new RegExp(/xyz/i);

//ES6中第一个参数可以是正则对象，第二个参数可以是指定修饰符，覆盖第一个参数正则对象的修饰符
new RegExp(/abc/ig,'i');
//原有正则对象的修饰符是ig，它会被第二个参数i覆盖


/**
 * 字符串的正则方法
 * 字符串对象共有4个方法，可以使用正则表达式：
 * match(),replace(),search()和split()
 * ES6将这4个方法，在语言内部全部调用RegExp的实例方法，
 * 从而做到所有以正则相关的方法，全部定义在RegExp对象上
 */


/**
 * u修饰符
 * ES6对正则表达式添加了u修饰符，含义为“Unicode模式”，用来正确处理
 * 大于\uFFFF的字符。
 */

//点字符 （.）在正则表达式中的含义是除了换行符以外的任意单个字符。对于
//大于0xFFFF的字符，必须加上u修饰符

/**
 * 字符串必须转义，才能作为正则模式。
 */

function escapeRegExp(str) {
  return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}

let str = '/path/to/resource.html?search=query';
escapeRegExp(str)
// "\/path\/to\/resource\.html\?search=query"

