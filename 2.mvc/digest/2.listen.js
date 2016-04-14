function Scope(){
  this.$$watchers = [];//观察者的数组
}
//当scope上expr变化的时候执行回调监听
Scope.prototype.$watch = function(expr,listener){
    var watcher = {
        expr:expr,
        fn:listener,
        last:undefined
    }
    this.$$watchers.push(watcher);
}

Scope.prototype.$apply = function(expr,listener){
    var self = this;
    this.$$watchers.forEach(function(watcher){
       var newVal = self[watcher.expr];
       var oldVal = watcher.last;
       if(newVal != oldVal){
           watcher.fn(newVal,oldVal);
           watcher.last = newVal;
       }
    });
}
var scope = new Scope();
var age = 0;
scope.age = age++;
scope.$watch('age',function(newVal,oldVal){
    console.log(newVal,oldVal);
});
scope.age = age++;
scope.$apply();
scope.age = age++;
scope.$apply();