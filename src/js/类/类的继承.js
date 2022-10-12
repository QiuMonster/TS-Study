(() => {
    //定义一个父类
    class Shape {
        constructor(Area) {
            this.Area = Area;
        }
    }
    //定义子类继承父类
    class Circle extends Shape {
        disp() {
            console.log("这个⚪的面积是:" + this.Area);
        }
    }
    var c = new Circle(100);
    c.disp();
})();
