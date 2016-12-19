/**
 * 三、String.fromCodePoint()
 */

//ES6中的String.fromCodePoint(),替代了ES5中的String.fromCharCode()方法，
//可以识别大于0xFFFF的码点

String.fromCodePoint(0x20BB7) //"𠮷"