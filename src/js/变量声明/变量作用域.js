(() => {
    var global_num = 12; // 全局变量
    class Numbers {
        constructor() {
            this.num_val = 13; //实例变量
        }
        storeNum() {
            var local_num = 14; //局部变量
            console.log("输出局部变量:" + local_num);
        }
    }
    Numbers.sval = 10; //静态变量 属于类的
    console.log("输出全局变量:" + global_num);
    console.log("输出类的静态变量:" + Numbers.sval);
    console.log("输出类实例变量:" + new Numbers().num_val);
    new Numbers().storeNum(); //输出类方法中的局部变量
})();
