(() => {
    //数组作为函数参数
    var arr = [1, 2, 3]
    function fun(arr: number[]) {
        arr.forEach((val) => {
            console.log(val)
        })
    }
    fun(arr)

    //将数组作为函数的返回值进行返回
    function fun1(): string[] {
        var arr = ['qiu', 'lks', 'love']
        return arr
    }
    var arr1: string[] = fun1()
    arr1.forEach(val => {
        console.log(val)
    })
})()