(() => {
    var sites = {
        site1: 'qiu',
        site2: 'lks',
        sayHi: function () { }//类型模板
    }
    sites.sayHi = function () {
        console.log("hello" + sites.site1)
    }
    sites.sayHi()

    //对象也可以作为参数 传递给函数
    var say = function (obj: { site1: string, site2: string }) {
        console.log("输出对象参数中的属性值:" + obj.site1 + obj.site2)
    }
    say(sites)
})()