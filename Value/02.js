/**
 * Number.parseInt(),Number.parseFloat()
 * 同样也是将对应的全局方法，移植到了Number对象上面
 */


/**
 * Number.EPSILON(极小的常量)
 * 引入一个这么小的量的目的，在于为浮点数计算，设置一个误差范围。
 * 误差能够小于Number.EPSILON，我们就可以认为得到了正确结果。
 * 因此，Number.EPSILON的实质是一个可以接受的误差范围。
 */

/**
 * 安全整数和Number.isSafeInteger()
 * JavaScript能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值。
 * ES6引入了Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER这两个常量，用来表示这个范围的上下限。
 * Number.isSafeInteger()则是用来判断一个整数是否落在这个范围之内。
 */