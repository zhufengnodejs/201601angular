var a = 1;
var b = 1;
console.log(eval('a+b'));

var obj = {
    a:1,
    b:1,
    $eval:function(exp){
        with(obj){

        }
    }
}