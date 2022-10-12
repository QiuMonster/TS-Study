(() => {
    var str = new String("This is string");
    console.log("str.constructor is:" + str.constructor)

    var uname = new String("Hello World")
    console.log("Length " + uname.length)  // 输出 11

    function employee(id: number, name: string) {
        this.id = id
        this.name = name
    }
    var emp = new employee(123, "admin")
    employee.prototype.email = "admin@runoob.com" // 添加属性 email
    console.log("员工号: " + emp.id)
    console.log("员工姓名: " + emp.name)
    console.log("员工邮箱: " + emp.email)
})()