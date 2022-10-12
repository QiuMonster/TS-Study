(() => {
    //never是其他类型  是null和undefined的子类型 表示不会出现的值
    let x;
    let y;
    // x = 123 //编译错误 number不能转 never类型
    //never类型可以赋给never类型  函数执行是不会出现值的情况
    // x = (() => { throw new Error("抛出异常x") })()
    //never类型可以赋给 number类型
    y = (() => { throw new Error("抛出异常y"); })();
    //返回值是never的情况 可以是抛出异常的情况
    function error() {
        throw new Error("返回值为never的情况，抛出异常");
    }
    //返回值是never的情况 可以是无法被执行到终点的情况
    function loop() {
        while (true) {
        }
    }
})();
