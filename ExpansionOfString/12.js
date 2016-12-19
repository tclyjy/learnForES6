/**
 * 十二、标签模板
 */

alert`123` == alert(123);

var a = 5;
var b = 10;
tag`Hello ${ a+b } world ${ a*b }`;
//等同于
tag(['Hello','world',''], 15, 50);

function tag(stringArr, value1, value2){
  console.log(stringArr[0]);
  console.log(stringArr[1]);
  console.log(stringArr[2]);
  console.log(value1);
  console.log(value2);
}
// "Hello "
// " world "
// ""
// 15
// 50

var total = 30;
var msg = passthru`The total is ${total} (${total*1.05} with tax)`;

function passthru(literals) {
  var result = '';
  var i = 0;

  while (i < literals.length) {
    result += literals[i++];
    if (i < arguments.length) {
      result += arguments[i];
    }
  }

  return result;
}

msg // "The total is 30 (31.5 with tax)"

//“标签模板”的一个重要应用，就是过滤HTML字符串，防止用户输入恶意内容。

var message =
  SaferHTML`<p>${sender} has sent you a message.</p>`;

function SaferHTML(templateData) {
  var s = templateData[0];
  for (var i = 1; i < arguments.length; i++) {
    var arg = String(arguments[i]);

    // Escape special characters in the substitution.
    s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    // Don't escape special characters in the template.
    s += templateData[i];
  }
  return s;
}
var sender = '<script>alert("abc")</script>'; // 恶意代码
var message = SaferHTML`<p>${sender} has sent you a message.</p>`;

message
// <p>&lt;script&gt;alert("abc")&lt;/script&gt; has sent you a message.</p>

//上面代码中，sender变量往往是用户提供的，经过SaferHTML函数处理，里面的特殊字符都会被转义。

