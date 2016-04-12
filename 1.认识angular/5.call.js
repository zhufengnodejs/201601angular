
function call(self){
   //1.修改函数中的this指针
   //2.让函数执行
}
var obj = {name:'zfpx'};
function say(){
    console.log(this.name);
}
console.log(Function.prototype.call);
Function.prototype.mycall = function(thisObj){
 var source = this.toString();
 source.replace(/this/,function(result){
    return 'arguments[0]';
 });
 //var func = new Function('thisObj',source);
 eval('+('+source+')('+thisObj+')');
}
say.mycall(obj);