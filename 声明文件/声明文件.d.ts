//这时，我们需要使用 declare 关键字来定义它的类型，帮助 TypeScript 判断我们传入的参数类型对不对：
//declare 定义的类型只会用于编译时的检查，编译结果中会被删除。
declare var JQuery: (selector: string) => any
// JQuery('#foo')