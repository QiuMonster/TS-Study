(() => {
    //使用数组的构造器 定义一个number类型大小为4的数组
    var arr = new Array(4);
    var i = 0;
    while (i < 4) {
        arr[i] = i * 2 + 1;
        i++;
    }
    console.log(arr + "\n" + arr.length);
    //直接使用构造器初始化数组元素
    var arr1 = new Array('qiu', 'lks');
    console.log(arr1);
})();
