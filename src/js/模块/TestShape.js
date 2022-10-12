import { Circle } from "./Circle";
import { Triangle } from "./Triangle";
function drawAll(shape) {
    shape.draw();
}
drawAll(new Circle());
drawAll(new Triangle());
