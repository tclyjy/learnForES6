/**
 * 六、圆括号问题
 * 解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说，一个式子到底是模式，
 * 还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道。
 * 由此带来的问题是，如果模式中出现圆括号怎么处理。ES6的规则是，只要有可能导致解构的歧义，
 * 就不得使用圆括号。
 * 但是，这条规则实际上不那么容易辨别，处理起来相当麻烦。因此，建议只要有可能，
 * 就不要在模式中放置圆括号。
 */

//声明语句中不能带有圆括号，包括函数声明

// 全部报错
/*
var [(a)] = [1];

var {x: (c)} = {};
var ({x: c}) = {};
var {(x: c)} = {};
var {(x): c} = {};

var { o: ({ p: p }) } = { o: { p: 2 } };
function f([(z)]) { return z; }
*/

//可以使用圆括号的情况只有一种：赋值语句的非模式部分，可以使用圆括号。

[(b)] = [3]; // 正确
({ p: (d) } = {}); // 正确
[(parseInt.prop)] = [3]; // 正确