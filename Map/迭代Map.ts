(() => {
    //无法正常遍历map中的数据
    //直接初始化 map
    var map = new Map()
    map.set(1, 'lks')
    map.set(2, 'qiu')
    map.set(3, 'love')
    console.log(map);

    console.log(map.keys())
    console.log(map.values())
    console.log(map.entries())

    var arr = map.keys()
    //遍历key值
    for (var key of arr) {
        console.log("map中的key为:" + key)
    }

    //遍历value值
    for (var i of map.values()) {
        console.log("map中的value为:" + i)
    }

    //遍历key-value值  entries 实体  与Java中的map相似
    for (var i1 of map.entries()) {
        console.log("map中的key为:" + i1[0] + ",value值为:" + i1[1])
    }

    // 使用对象解析
    for (let [key, value] of map) {
        console.log(key, value);
    }
})()