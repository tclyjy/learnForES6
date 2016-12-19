/**
 * 八、repeat()
 */

//repeat()方法返回一个新的字符串，表示将原字符串重复n次

'x'.repeat(3); //'xxx'
'hello'.repeat(2); //'hellohello'
'na'.repeat(0); //''

//参数若为小数，则会被向下取整
'na'.repeat(2.9); //'nana'

//如果参数是负数或者Infinity，会报错

//如果参数是0到-1 之间的小数，则等同于0

//如果参数是NAN 等同于0

//如果是字符串则自动转换为数字
'na'.repeat('2'); //'nana'
'na'.repeat('aa'); //''

