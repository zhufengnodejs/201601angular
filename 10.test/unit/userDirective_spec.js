(function(){
    describe('userDirective',function(){
        var $compile;
        var $rootScope;
        var $httpBackend;
        //初始化模块 因为始化之后下面才能注入服务
        beforeEach(module('zfpxMod'));
        //依赖注入参数并且运行函数 如果服务名前有下划线 注入时会自动去掉
        beforeEach(inject(function(_$compile_,_$rootScope_,_$httpBackend_){
            $httpBackend = _$httpBackend_;
            $compile = _$compile_;
            $rootScope = _$rootScope_;
            $httpBackend.whenGET('/hello.html').respond("<h1>hello</h1>");
        }));
        it('测试userDirective值是否正确',function(){
           //编译包含指令的模板
            var element = $compile('<hello></hello>')($rootScope);
            $rootScope.$digest();
            console.error(element);
            expect(element.html()).toEqual('hello');
            $httpBackend.flush();

            var element2 = $compile('<div  green>hello</div>')($rootScope);
            expect(element2.css('color')).toEqual('green');
        });
    });
})()