(() => {
    var alpha: any[] = ["a", "b", "c"];
    var numeric = [1, 2, 3];

    var alphaNumeric = alpha.concat(numeric);
    console.log("alphaNumeric : " + alphaNumeric);    // a,b,c,1,2,3   


    //     every()
    // 检测数值元素的每个元素是否都符合条件。
    function isBigEnough(element, index, array) {
        return (element >= 10);
    }
    var passed = [12, 5, 8, 130, 44].every(isBigEnough);
    console.log("Test Value : " + passed); // false


    // filter()
    // 检测数值元素，并返回符合条件所有元素的数组。
    function isBigEnough1(element, index, array) {
        return (element >= 10);
    }

    var passed1 = [12, 5, 8, 130, 44].filter(isBigEnough1);
    console.log("Test Value : " + passed); // 12,130,44

    //  forEach()
    //  数组每个元素都执行一次回调函数。
    let num = [7, 8, 9];
    num.forEach(function (value) {
        console.log(value);
    });


    // indexOf()
    // 搜索数组中的元素，并返回它所在的位置。

    // 如果搜索不到，返回值 -1，代表没有此项。
    var index = [12, 5, 8, 130, 44].indexOf(8);
    console.log("index is : " + index);  // 2


    // join()
    // 把数组的所有元素放入一个字符串。
    var arr = new Array("Google", "Runoob", "Taobao");

    var str = arr.join();
    console.log("str : " + str);  // Google,Runoob,Taobao

    var str = arr.join(", ");
    console.log("str : " + str);  // Google, Runoob, Taobao

    var str = arr.join(" + ");
    console.log("str : " + str);  // Google + Runoob + Taobao

    // lastIndexOf()
    // 返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
    var index = [12, 5, 8, 130, 44].lastIndexOf(8);
    console.log("index is : " + index);  // 2


    // map()
    // 通过指定函数处理数组的每个元素，并返回处理后的数组。
    var numbers = [1, 4, 9];
    var roots = numbers.map(Math.sqrt);
    console.log("roots is : " + roots);  // 1,2,3


    // pop()
    // 删除数组的最后一个元素并返回删除的元素。
    var numbers = [1, 4, 9];

    var element = numbers.pop();
    console.log("element is : " + element);  // 9

    var element = numbers.pop();
    console.log("element is : " + element);  // 4


    // push()
    // 向数组的末尾添加一个或更多元素，并返回新的长度。
    var numbers = new Array(1, 4, 9);
    var length = numbers.push(10);
    console.log("new numbers is : " + numbers);  // 1,4,9,10 
    length = numbers.push(20);
    console.log("new numbers is : " + numbers);  // 1,4,9,10,20

    // reduce() 从左到右进行数据的处理操作
    // 将数组元素计算为一个值（从左到右）。
    var total = [0, 1, 2, 3].reduce(function (a, b) { return a + b; });
    console.log("total is : " + total);  // 6

    // reduceRight() 从右到左进行数据处理
    // 将数组元素计算为一个值（从右到左）。
    var total = [0, 1, 2, 3].reduceRight(function (a, b) { return a + b; });
    console.log("total is : " + total);  // 6

    // reverse()
    // 反转数组的元素顺序。
    var arr1 = [0, 1, 2, 3].reverse();
    console.log("Reversed array is : " + arr1);  // 3,2,1,0



    // slice() 切片
    // 选取数组的的一部分，并返回一个新数组。
    var arr = ["orange", "mango", "banana", "sugar", "tea"];
    console.log("arr.slice( 1, 2) : " + arr.slice(1, 2));  // mango
    console.log("arr.slice( 1, 3) : " + arr.slice(1, 3));  // mango,banana


    // some()
    // 检测数组元素中是否有元素符合指定条件。
    function isBigEnough2(element, index, array) {
        return (element >= 10);

    }
    var retval = [2, 5, 8, 1, 4].some(isBigEnough2);
    console.log("Returned value is : " + retval);  // false

    var retval = [12, 5, 8, 1, 4].some(isBigEnough);
    console.log("Returned value is : " + retval);  // true

    // sort()
    // 对数组的元素进行排序。
    var arr = new Array("orange", "mango", "banana", "sugar");
    var sorted = arr.sort();
    console.log("Returned string is : " + sorted);  // banana,mango,orange,sugar


    // splice()
    // 从数组中添加或删除元素。
    var arr = ["orange", "mango", "banana", "sugar", "tea"];
    var removed = arr.splice(2, 0, "water");
    console.log("After adding 1: " + arr);    // orange,mango,water,banana,sugar,tea 
    console.log("removed is: " + removed);

    removed = arr.splice(3, 1);
    console.log("After removing 1: " + arr);  // orange,mango,water,sugar,tea 
    console.log("removed is: " + removed);  // banana


    // shift()
    // 删除并返回数组的第一个元素。
    var arr2 = [10, 1, 2, 3].shift();
    console.log("Shifted value is : " + arr2);  // 10


    // toString()
    // 把数组转换为字符串，并返回结果。
    var arr = new Array("orange", "mango", "banana", "sugar");
    var str = arr.toString();
    console.log("Returned string is : " + str);  // orange,mango,banana,sugar

    // unshift()
    // 向数组的开头添加一个或更多元素，并返回新的长度。
    var arr = new Array("orange", "mango", "banana", "sugar");
    var length = arr.unshift("water");
    console.log("Returned array is : " + arr);  // water,orange,mango,banana,sugar 
    console.log("Length of the array is : " + length); // 5

})()