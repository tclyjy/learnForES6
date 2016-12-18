/*
* function* 声明（function关键字后跟一个星号）定义一个generator（生成器）函数，
* 返回一个Generator对象。
*
*  你也可以用GeneratorFunction构造器和function* expression定义一个generator函数。
*
*  语 法
*  function* name([param[, param[, ... param]]]) { statements }
*/

//例一
function* idMaker(){
  var index = 0;
  while(index<3)
    yield index++;
}

var gen = idMaker();

console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // undefined

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

//例二
function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

console.log(gen.next().value); // 10
console.log(gen.next().value); // 11
console.log(gen.next().value); // 12
console.log(gen.next().value); // 13
console.log(gen.next().value); // 20

/**
 * 总结，通过Generator.prototype.next() 方法可以迭代返回 generatorG函数内yield的值，
 * 若yield迭代后无值，则返回undefined。
 */