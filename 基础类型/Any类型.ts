(() => {

    //定义any类型
    let x: any;
    x = false
    console.log(x)
    x = 4
    console.log(x)

    let x1: any = 4
    // x.ifItExists()
    console.log(x1.toFixed())

    //定义任意类型数据的数组
    let arr: any[] = [1, 2, false, true, 'hello', true, 'lks', 12.34]
    //遍历数组中的全部值
    arr.forEach((val) => {
        console.log(val)
    })
})()