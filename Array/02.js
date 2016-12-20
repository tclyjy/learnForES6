/**
 * Array.of() 用于将一组值，转换为数组
 */

Array.of(3, 11, 8) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1

//对比构造函数Array()
Array() // []
Array(3) // [, , ,]
Array(3, 11, 8) // [3, 11, 8]

// Array.of基本上可以用来替代Array()或new Array()，并且不存在由于参数不同而导致的重载。它的行为非常统一。