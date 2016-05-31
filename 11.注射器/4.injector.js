var Module = function(){
    //模块内的配方库
    this.providers = {};
}
//添加服务配方
Module.prototype.provider = function(name,constructor){
    if(typeof  constructor != 'function')
        throw Error('服务的定义必须是一个函数');
    this.providers[name] = constructor;
}
//返回一个注射器
Module.prototype.injector = function(){
  var self = this;
  //将要返回的注射器对象
  var injector = {
        cache:{}
  }
  //解析出函数的形参
   injector.annotate = function(fn){
       return fn.toString().match(/function\s*\((.+)\)/)[1].split(/\s*,\s*/);
   }
    //用于获取某个服务的实例
    injector.get  = function(name){
        var service = this.cache[name];
        if(!service){
            service =  new self.providers[name]().$get();
            this.cache[name] =  service;
        }
        return service;

    }
    //判断是否有此名字的配方
    injector.has = function(name){
        return self.providers[name];
    }

    //注入并调用一个函数
    injector.invoke = function(fn,thisObj){
        //先得到参数
        var params = this.annotate(fn);
        var args = [];//存放服务的实例
        for(var i=0;i<params.length;i++){
            args.push(this.get(params[i]));
        }
         fn.apply(thisObj,args);
        return thisObj;
    }
    //实例化一个构造函数
    injector.instantiate= function(fn){
        return this.invoke(fn,fn.prototype);
    }
  return injector;
}

var module = new Module();
module.provider('hello',function(){
    this.$get = function(){
        return 'hello';
    }
})
var injector = module.injector();
var hello1 = injector.get('hello');
var hello2 = injector.get('hello');

console.log(hello1===hello2);

injector.invoke(function(hello){
    console.log(hello);
})
var obj = injector.instantiate(function(hello){
    this.hello = hello;
})

console.log(obj);
