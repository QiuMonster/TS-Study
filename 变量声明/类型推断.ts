(() => {
    //如果无法推断数据类型 则为 any类型
    var num = 100
    console.log(typeof (num)) //编译器会自动推断数据类型 为number
    // num='hello'  // num为 number类型 编译错误
    
})()