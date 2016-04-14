function one(){
    var first = 'first';
    function two(){
        var second = 'first';
    }
    two();
}
one();
/**
 * 1.当启动的时候先生成一个全局上下文环境。 window
 *   this=window
 *   全局属性 Math Reg Array
 *   提升上来的函数定义 var 变量
 * 2.当进入一个函数的时候会产生一个函数级的执行上下文环境
 *   this
 *   值对象/激活对象  var变量 function定义
 *   参数
 **/
