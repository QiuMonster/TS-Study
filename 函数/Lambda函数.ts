(() => {
    var foo = (x: number) => x += 10
    console.log(foo(100))

    //当函数只有一个参数时  可以省略括号
    var fun = x => {
        console.log(x)
    }
})()