/**
 *  二、对象的解构赋值
 */

/*
 * 解构不仅可以作用于数组，还可以用于对象。
 * 对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；
 * 而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
 */

var {foo, bar, baz} = {foo: "aaa", bar: "bbb"};
foo; // "aaa"
bar; // "bbb"
baz; // undefined

var {first: f, last: l} = {first: 'hello', last: 'world'};
f; //hello
l; //world
//上面代码中 first和last只是匹配的模式，f和l才是变量。真正被赋值的是变量不是模式

var node = {
    loc: {
        start: {
            line:1
        }
    }
}
var {loc: {start: { line }}} = node;
line; //1
loc; //undefined
start; //undefined
//上面的代码中，只有line是变量，loc和start都是模式不会被赋值

/*
 * 对象的解构也可以指定默认值 ,和数组解构赋值一样
 */

var {x = 3} = {};
x; //3

var {x, y = 5} = {x: 1};
x; //1
y; //5

let {log, sin, cos} = Math;
//上面代码将Math对象的对数、正弦、余弦三个方法，赋值到对应的变量上，使用起来会方便很多


