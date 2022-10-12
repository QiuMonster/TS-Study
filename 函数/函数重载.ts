(() => {
    //主要通过 any 和 可选参数是? 来实现函数重载

    function disp(s1: string): void;
    function disp(n1: number, s1: string): void;

    function disp(x: any, y?: any): void {
        console.log(x);
        console.log(y);
    }
    disp("abc")
    disp(1, "xyz");


    //可以存在很多个重载函数
    function fun(a?: any, b?: any, c?: any) {
        console.log(a)
        console.log(b)
        console.log(c)
    }
    fun(1, 2, 3)
})()