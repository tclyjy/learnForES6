/**
 * 五、函数参数的解构赋值
 * 函数的参数也可以使用解构赋值
 */

function add ([x,y]){
  return x+y;
}
add([1, 2]); //3

/**
 * 上面代码中，函数add的参数表面上是一个数组，但在传入参数的那一刻，
 * 数组参数就被解构成变量x和y。对于函数内部的代码来说，它们能感受到的参数就是x和y。
 */

