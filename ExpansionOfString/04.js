/**
 * 四、字符串的遍历器接口
 */

for(let codePoint of 'foo'){
  console.log(codePoint);
}
// "f"
// "o"
// "o"

//可以识别大于0xFFFF的码点

var str = String.fromCodePoint(0x20BB7);

//传统for循环无法识别大于0xFFFF的码点
for(let i = 0; i < str.length; i++){
  console.log(str[i]);
}

for (let i of str){
  console.log(i);
}
// "𠮷"