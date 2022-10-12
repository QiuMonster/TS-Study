//当一个命名空间在一个单独的文件中 时  使用  /// 进行引用
/// <reference path="IShape.ts"/>
// import {IShape} from "./IShape"
var Drawing;
(function (Drawing) {
    class Circle {
        draw() {
            console.log("圆形被画好了");
        }
    }
    Drawing.Circle = Circle;
})(Drawing || (Drawing = {}));
