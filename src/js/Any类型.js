(function () {
    //定义any类型
    var x;
    x = false;
    console.log(x);
    x = 4;
    console.log(x);
    var x1 = 4;
    // x.ifItExists()
    console.log(x1.toFixed());
    //定义任意类型数据的数组
    var arr = [1, 2, false, true, 'hello', true, 'lks', 12.34];
    //遍历数组中的全部值
    arr.forEach(function (val) {
        console.log(val);
    });
})();
