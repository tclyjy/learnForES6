/*
 * 三、字符串的解构赋值
 * 字符串也可以解构赋值。这是因为此时字符串被转换成了一个类数组对象
 */

let [a,b,c,d,e] = 'hello';
a; //"h"
b; //"e"

let {length : len} = "hello";
len; //5
