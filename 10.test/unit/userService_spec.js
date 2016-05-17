(function(){
    describe('userCtrl',function(){
        var userService ;
        //初始化模块 因为始化之后下面才能注入服务
        beforeEach(module('zfpxMod'));
        //依赖注入参数并且运行函数 如果服务名前有下划线 注入时会自动去掉
        beforeEach(inject(function(_userService_){
            userService = _userService_;
        }));
        it('测试title值是否正确',function(){
            expect(userService.name).toEqual('zfpx');
        });
    });
})()