(() => {
    interface namelist {
        //定义数组 索引是 number类型 值是string类型
        [index: number]: string
    }
    var list: namelist = ['qiu', 'lks']
    console.log(list)
    // var list1: namelist = ['qiu', 1, 'lks'] //元素 1 不是string类型
    // console.log(list1)
})()