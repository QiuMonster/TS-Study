(() => {
    //位 与
    console.log(5 & 1); //输出 1
    //位 取反
    console.log(~5) //输出 -6    取反后 是 一个数的补码  原码取反=补码-1
    // >>> 无符号右移
    console.log(-2 >>> 1)  //输出 2147483647
    //有符号右移
    console.log(-2>>1) //输出 -1

    //三元运算符
    if(1>2?false:true){
        console.log("1是比2大的")
    }
    //类型运算符
    var num:number=10
    console.log(typeof(num))
    //instanceof 判断变量是否为指定类型
    // console.log(number.instanceof(num))
})()