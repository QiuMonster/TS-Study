//定义命名空间  可以有效解决 变量重名问题
namespace Drawing {
    //使用 export 将接口导出去  供其他文件引用使用
    export interface IShape {
        draw() //方法
    }
}