/*
* 七、数组实例的includes() 表示某个数组是否包含给定的值，与字符串的includes方法类似
*/

[1,2,3].includes(2)  //true
[1,2,3].includes(4)  //false
[1,2,NaN].includes(NaN)  //true

//第二个参数表示搜索起始位置，如果第二个参数为负数，则表示倒数的位置
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true

//没有该方法之前，我们通常使用数组的indexOf方法，检查是否包含某个值。

if (arr.indexOf(el) !== -1) {
  // ...
}
//indexOf方法有两个缺点，一是不够语义化，它的含义是找到参数值的第一个出现位置，所以要去比较是否不等于-1，表达起来不够直观。二是，它内部使用严格相当运算符（===）进行判断，这会导致对NaN的误判。

[NaN].indexOf(NaN)
// -1
//includes使用的是不一样的判断算法，就没有这个问题。

[NaN].includes(NaN)
// true