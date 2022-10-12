(() => {
    //创建map
    var map = new Map();
    map.set(1, 'qiu');
    map.set(2, 'lks');
    console.log(map); // Map(2) { 1 => 'qiu', 2 => 'lks' }
    //通过key来获取val
    console.log("获取map中的key为1的值:" + map.get(1));
    //通过 函数 has来判断 map中是否存在 key为 目标的值 返回值为 Boolean
    console.log(map.has(1)); //存在 key 为 1 的 map对象
    //输出map的大小
    console.log("map的大小是:" + map.size);
    //删除对象
    map.delete(1); //删除 key为 1的map对象
    console.log(map); //Map(1) { 2 => 'lks' }
    //清除map
    map.clear();
})();
