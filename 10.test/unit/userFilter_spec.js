(function(){
    describe('userFilter',function(){
        var userFilter ;
        //初始化模块 因为始化之后下面才能注入服务
        beforeEach(module('zfpxMod'));
        //依赖注入参数并且运行函数 如果服务名前有下划线 注入时会自动去掉
        beforeEach(inject(function($filter){
            userFilter = $filter('userFilter');
        }));
        it('测试title值是否正确',function(){
            expect(userFilter('zfpx',2)).toEqual('ZFpx');
        });
    });
})()