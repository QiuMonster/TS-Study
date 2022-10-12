(() => {
    var arr = [[1, 2, 3], [4, 5, 6]];
    for (var i of arr) {
        for (var j of i) {
            console.log("遍历结果:" + j);
        }
    }
})();
