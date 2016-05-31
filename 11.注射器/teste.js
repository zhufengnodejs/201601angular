
var annotate = function(fn){
    return fn.toString().match(/function\s*\((.+)\)/)
}
var r = annotate(function(a,b,c){

})[1].split(/\s*,\s*/);
console.log(r);