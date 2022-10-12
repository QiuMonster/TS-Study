(() => {
    interface Dog {
        dname: string
        age: number
        eat: () => string
    }

    var d: Dog = {
        dname: 'dog',
        age: 22,
        eat: function (): string {

            console.log("小狗正在吃饭")
            return 'hello world'
        }
    }
    console.log(d.age)
    console.log(d.dname)
    d.eat()
})()