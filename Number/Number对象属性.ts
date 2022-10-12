(() => {
    console.log("Number属性:")
    console.log("最大值:" + Number.MAX_VALUE)
    console.log("最小值:" + Number.MIN_VALUE)
    console.log("负无穷大:" + Number.NEGATIVE_INFINITY)
    console.log("正无穷大:" + Number.POSITIVE_INFINITY)

    //NaN实例
    var month = 0
    if (month <= 0 || month > 12) {
        console.log("月份是:" + Number.NaN)
    } else {
        console.log("输入月份正确")
    }

    //prototype实例  给对象添加属性使用
    function employee(id: number, name: string) {
        this.id = id
        this.name = name
    }
    var emp = new employee(1, 'qiu')
    console.log(emp)
    //向对象添加属性
    employee.prototype.email = '123456@qq.com'
    console.log(emp.email)
})()