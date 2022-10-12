import { IShape } from "./IShape";
import { Circle } from "./Circle"
import { Triangle } from "./Triangle"
function drawAll(shape: IShape) {
    shape.draw()
}
drawAll(new Circle())
drawAll(new Triangle())