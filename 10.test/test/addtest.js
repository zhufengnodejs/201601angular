//对单元测试进行分组
(function(){
    describe('calculator',function(){
        var number = 0;
        //每个单元测试之前执行此任务 数据准备
        beforeEach(function(){
            number = 0;
            console.log('before');
        });
        it('add',function(){
            expect(++number).toEqual(1);
        })
        it('minus',function(){
            expect(--number).toEqual(-1);
        })
        //每个单元测试之前之后执行此任务 数据和对象的清理
        afterEach(function(){
            console.log('after');
        });
    })
})()
