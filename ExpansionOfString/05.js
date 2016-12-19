/**
 * 五、at()
 */

//ES5的charAt()方法不能识别大于0xFFFF的码点
//ES6引进 at()方法识别

'abc'.charAt(0) // "a"
'𠮷'.charAt(0) // "\uD842"

'abc'.at(0) // "a"
'𠮷'.at(0) // "𠮷"