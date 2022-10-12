(() => {
    //toExponential() 
    var num1 = 1225.30;
    var val = num1.toExponential();
    console.log(val); // 输出： 1.2253e+3
    var num3 = 177.234;
    console.log("num3.toFixed() 为 " + num3.toFixed()); // 输出：177
    console.log("num3.toFixed(2) 为 " + num3.toFixed(2)); // 输出：177.23
    console.log("num3.toFixed(6) 为 " + num3.toFixed(6)); // 输出：177.234000
    var num = new Number(177.1234);
    console.log(num.toLocaleString()); // 输出：177.1234
    var num = new Number(7.123456);
    console.log(num.toPrecision()); // 输出：7.123456 
    console.log(num.toPrecision(1)); // 输出：7
    console.log(num.toPrecision(2)); // 输出：7.1
    var num = new Number(10);
    console.log(num.toString()); // 输出10进制：10
    console.log(num.toString(2)); // 输出2进制：1010
    console.log(num.toString(8)); // 输出8进制：12
    var num = new Number(10);
    console.log(num.valueOf()); // 输出：10
})();
