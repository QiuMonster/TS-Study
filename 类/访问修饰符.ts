(() => {
    class Encapsulate {
        str: string = 'hello'
        private str1: string = 'world'
    }
    var e = new Encapsulate()
    console.log(e.str) //输出 hello
    // console.log(e.str1)//编译错误 不可以在类的外部访问类的私有属性
})()