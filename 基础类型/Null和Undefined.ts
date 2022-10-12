(()=>{
    //null表示 空对象引用  typeOf 检测 null 返回object
    var obj = null
    console.log(typeof (obj)) // object

    //当只定义变量  并未初始化时 输出变量的值是 undefined
    let x;
    console.log(x) // undefined

    //使用 | 定义多类型的变量
    let x1: number | string
    x1 = 12
    console.log(x1)
    x1 = 'hello world'
    console.log(x1)
    // x1=false //编译错误
    // console.log(x1)
})()