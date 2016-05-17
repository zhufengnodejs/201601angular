(function(){
    describe('userCtrl',function(){
        var $http ;
        var $httpBackend;
        //初始化模块 因为始化之后下面才能注入服务
        beforeEach(module('zfpxMod'));
        //依赖注入参数并且运行函数 如果服务名前有下划线 注入时会自动去掉
        beforeEach(inject(function(_$http_,_$httpBackend_){
            $httpBackend = _$httpBackend_;
            $http = _$http_;
            console.log($httpBackend.when('GET','/users'));
            $httpBackend.whenGET('/phones').respond({name:'zfpx'});
        }));
        it('测试接口是否值是否正确',function(){
           $http.get('/phones').success(function(data){
               expect(data.name).toEqual('zfpx');
           });
            //模拟后台返回数据，这样success才会真正调用
            $httpBackend.flush();
        });
    });
})()