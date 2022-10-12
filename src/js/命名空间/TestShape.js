/// <reference path="IShape.ts"/>
/// <reference path="Circle.ts"/>
/// <reference path="Triangle.ts"/>
//使用命名空间中的接口作为参数
function drawAll(shape) {
    shape.draw();
}
drawAll(new Drawing.Circle());
drawAll(new Drawing.Triangle());
