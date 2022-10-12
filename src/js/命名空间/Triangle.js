/// <reference path="IShape.ts"/>
var Drawing;
(function (Drawing) {
    class Triangle {
        draw() {
            console.log("长方形被画好了");
        }
    }
    Drawing.Triangle = Triangle;
})(Drawing || (Drawing = {}));
