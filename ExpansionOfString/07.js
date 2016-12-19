/**
 * 七、includes(),startsWith(),endsWith()
 */

// includes() 返回布尔值，表示是否找到参数字符串
// startsWith() 返回布尔值，表示参数字符串是否在源字符串的头部
// endsWith() 返回布尔值，表示参数字符串是否在源字符串的尾部
var str = "Hello World";
str.startsWith('Hello'); //true
str.endsWith('World'); //true
str.includes('o'); //true

//上述三种方法都支持第二个参数，表示开始搜索的位置
//endsWith(),使用第二个参数n时表示，前n个字符