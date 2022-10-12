(() => {
    //类型断言 类型转换  使用 <类型>变量 必须一个类型是另一个类型的子类型
    var str = '1';
    var str2 = str;
    console.log(str2); //输出 1
    console.log(typeof (str2)); //输出string
    var num = 1;
    var num1 = num;
    console.log(typeof (num1));
})();
