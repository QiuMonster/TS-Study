(() => {
    class Person {
        //字段
        engine: string
        //构造函数
        constructor(engine: string) {
            this.engine = engine
        }
        //方法
        disp(): void {
            console.log("发动机为:" + this.engine)
        }
    }
    var p=new Person('toX')
    p.disp()
})()