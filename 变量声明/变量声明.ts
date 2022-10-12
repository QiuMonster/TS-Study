(() => {
    var num: number = 123
    console.log(num)
    console.log("当前变量num的类型是:" + typeof (num))
    //不显式定义变量类型时 或定义了没有初始化时   变量类型是 undefined
    var x;
    // var x:number
    console.log(typeof (x))  // undefined
})()