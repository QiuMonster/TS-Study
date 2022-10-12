(() => {
    //一般只有一个返回值
    function fun1() {
        return 100;
    }
    var num = fun1();
    console.log(num);
    //返回其中一个类型即可
    function fun2() {
        return 'hello world';
    }
    console.log(fun2());
    //带参函数
    function fun3(a, b) {
        return a > b ? a : b;
    }
    console.log(fun3(12, 23)); //输出较大的数
    //指定函数参数默认值  当函数调用缺失时 会使用默认值
    function fun4(a = 33, b = 12) {
        return a > b ? a : b;
    }
    console.log(fun4());
    //设置函数的可选参数  b 是可选参数
    function fun5(a, b) {
        if (b == undefined) {
            return a;
        }
        return a + b;
    }
    console.log(fun5("hello"));
    console.log(fun5("hello", "world"));
    //剩余参数  其实就是一个数组
    function fun6(a, ...b) {
        var sum = a;
        b.forEach((val) => {
            sum += val;
        });
        return sum;
    }
    console.log(fun6(1, 2, 3, 4));
    //只是调用时 写法不同 一个传入数组 一个直接参数类型参数即可
    function fun7(a, b) {
        var sum = a;
        b.forEach((val) => {
            sum += val;
        });
        return sum;
    }
    console.log(fun7(1, [2, 3, 4]));
    //匿名函数
    var fun = function () {
        console.log("我是匿名函数，使用对象进行调用");
    };
    fun();
    //匿名函数自调用
    (function test() {
        console.log("匿名函数自调用");
    })();
    //构造函数  使用 new关键字通过构造函数创建函数
    var funBody = "var c=a+b;if(c>a&&c>b){return c}else{return a}";
    var myFun = new Function('a', 'b', funBody); //a b 是函数参数 funBody是函数逻辑代码
    console.log("使用构造函数输出值:" + myFun(12, 1));
})();
