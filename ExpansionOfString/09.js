/**
 * 九、padStart(),padEnd()字符串补全
 */

'x'.padStart(5,'ab') //ababx
'x'.padStart(4,'abc') //abcx

'x'.padEnd(5,'ab') //xabab
'x'.padEnd(4,'ab') //xaba

//如果原字符串的长度等于或大于指定的最小长度，则返回原字符串

//padStart 最常见的用途就是为数值补全定位数
'1'.padStart(10,'0'); //0000000001
'12'.padStart(10,'0'); //0000000012

//提示字符串格式

'12'.padStart(10,'YYYY-MM-DD') //'YYYY-MM-12'
