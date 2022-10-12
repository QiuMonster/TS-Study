(() => {
    class Person { }
    var p = new Person()
    console.log("对象p是Person类实例化出来的吗:" + (p instanceof Person))
})()