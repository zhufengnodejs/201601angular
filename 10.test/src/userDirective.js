angular.module('zfpxMod').directive('hello',function(){
    return {
       restrict:'E',
        replace:true,
        templateUrl:'/hello.html'
    }
})

angular.module('zfpxMod').directive('green',function(){
    return {
        restrict:'A',
        link:function(scope,element,attrs){
            element.css('color','green');
        }

    }
})