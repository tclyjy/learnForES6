/**
 *  一、数组的解构赋值
 */

var [a,b,c] = [1,2,3];
//上面代码表示，在ES6中可以从数组中提取值，按照对应的位置，对变量赋值。
/**
 * 本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，
 * 左边的变量就会被赋予对应的值。下面是一些使用嵌套数组进行解构的例子。
 */
let [foo,[[bar],bax]] = [1,[[2],3]];
foo; //1
bar; //2
baz; //3

let [,,last] = ['foo','bar','brz'];
last; //'brz'

/**
 *  数组解构赋值的关键点在于，赋值对象数据解构是否具有Iterator接口，
 * 只要有Iterator接口都可以采用数组形式的结构赋值。
 * 注意：在ES6中，有三类数据结构原生具备Iterator接口： 数组、某些类似数组的对象、Set和Map结构 ，
 * 对象（Object）之所以没有默认部署Iterator接口，是因为对象的哪个属性先遍历，
 * 哪个属性后遍历是不确定的，需要开发者手动指定。
 */

let [x, y, z] = new Set(["a", "b", "c"]);
x // "a"
y // "b"
z // "c"

/* 报错
* let [foo] = 1;
* let [foo] = false;
* let [foo] = NaN;
* let [foo] = undefined;
* let [foo] = null;
* let [foo] = {};
*/

function* fibs() { 
  var a = 0;
  var b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var [first, second, third, fourth, fifth, sixth] = fibs();
sixth // 5

//上面代码中fibs是一个Generator函数，原生具有Iterator接口。
