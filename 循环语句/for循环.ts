(() => {
    var arr = [1, 2, 3, 4, 5]
    console.log(typeof (arr)) //输出 object
    //使用 for i
    for (var i = 0; i < arr.length; i++) {
        console.log("遍历数据:" + arr[i])
    }
    //使用 for in   中 j是数组下标
    for (var j in arr) {
        console.log("in遍历数据:下标:" + j + ",对应的值为:" + arr[j])
    }
    //for of  k 为数组内部值
    for (var k of arr) {
        console.log("of输出:" + k)
    }
    //foreach   先 值 后 下标  没有返回值
    arr.forEach((val, index) => {
        console.log("forEach遍历数据:下标:" + index + ",对应的值为:" + val)
    })
    //every  和  some
    arr.every((val, index) => {
        if (val == undefined) {
            return false
        }
        console.log("every遍历数据:下标:" + index + ",对应的值为:" + val)
        return true//返回 true时会继续迭代输出数据 false时 结束迭代输出
    })
    arr.some((val, index) => {
        console.log("some遍历数据:下标:" + index + ",对应的值为:" + val)
    })
})()