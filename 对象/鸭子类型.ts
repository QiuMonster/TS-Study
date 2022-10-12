(() => {
    interface IPoint {
        x: number
        y: number
    }
    class Xpoint implements IPoint {
        x: number
        y: number
        z: string
        constructor(x, y, z) {
            this.x = x
            this.y = y
            this.z = z
        }
    }
    //使用接口类型的参数  可以扩大 调用函数时 传入的参数范围额
    function addPoints(p1: IPoint, p2: IPoint): IPoint {
        var x = p1.x + p2.x
        var y = p1.y + p2.y
        return { x: x, y: y }
    }

    // 正确
    var newPoint = addPoints({ x: 3, y: 4 }, { x: 5, y: 1 })
    var x = new Xpoint(1, 2, 'lks')
    //正确使用   传入的参数只要是接口或接口的子类型即可
    var p = addPoints(x, x)
    // 错误 
    // var newPoint2 = addPoints({ x: 1 }, { x: 4, y: 3 })
})()