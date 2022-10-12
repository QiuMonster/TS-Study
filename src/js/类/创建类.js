(() => {
    class Person {
        //构造函数
        constructor(engine) {
            this.engine = engine;
        }
        //方法
        disp() {
            console.log("发动机为:" + this.engine);
        }
    }
    var p = new Person('toX');
    p.disp();
})();
