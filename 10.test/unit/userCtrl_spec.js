(function(){
    describe('userCtrl',function(){
        var $scope ;
        //初始化模块 因为始化之后下面才能注入服务
        beforeEach(module('zfpxMod'));
        //依赖注入参数并且运行函数
        beforeEach(inject(function($rootScope,$controller){
            //生成一个全新的$scope
             $scope = $rootScope.$new();
            //得到控制器函数的定义并自动传入参数并执行此控制器方法，然后初始$scope
            $controller('userCtrl',{$scope:$scope});
        }));
        it('测试title值是否正确',function(){
            console.log($scope.title);
            //expect($scope.title).toEqual('zfpx');
        });
    });
})()