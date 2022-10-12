(() => {
    var str = new String("RUNOOB");
    console.log("str.charAt(0) 为:" + str.charAt(0)); // R
    console.log("str.charAt(1) 为:" + str.charAt(1)); // U 
    console.log("str.charAt(2) 为:" + str.charAt(2)); // N 
    console.log("str.charAt(3) 为:" + str.charAt(3)); // O 
    console.log("str.charAt(4) 为:" + str.charAt(4)); // O 
    console.log("str.charAt(5) 为:" + str.charAt(5)); // B

    var str = new String("RUNOOB");
    console.log("str.charCodeAt(0) 为:" + str.charCodeAt(0)); // 82
    console.log("str.charCodeAt(1) 为:" + str.charCodeAt(1)); // 85 
    console.log("str.charCodeAt(2) 为:" + str.charCodeAt(2)); // 78 
    console.log("str.charCodeAt(3) 为:" + str.charCodeAt(3)); // 79 
    console.log("str.charCodeAt(4) 为:" + str.charCodeAt(4)); // 79
    console.log("str.charCodeAt(5) 为:" + str.charCodeAt(5)); // 66

    var str1 = "RUNOOB";
    var str2 = "GOOGLE";
    var str3 = str1.concat(str2);
    console.log("str1 + str2 : " + str3) // RUNOOBGOOGLE


    var index = str1.indexOf("OO");
    console.log("查找的字符串位置 :" + index);  // 3

    var str4 = new String("This is string one and again string");
    var index = str1.lastIndexOf("string");
    console.log("lastIndexOf 查找到的最后字符串位置 :" + index); // 29
    index = str4.lastIndexOf("one");
    console.log("lastIndexOf 查找到的最后字符串位置 :" + index); // 15


    var str5 = new String("This is beautiful string");
    var index = str5.localeCompare("This is beautiful string");
    console.log("localeCompare first :" + index);  // 0 

    var str6 = "The rain in SPAIN stays mainly in the plain";
    var n = str6.match(/ain/g);  // ain,ain,ain

    //不理解 $1  $2
    var re = /(\w+)\s(\w+)/;
    var str6 = "zara ali";
    var newstr = str6.replace(re, "$2, $1");
    console.log(newstr); // ali, zara


    var re = /apples/gi;
    var str7 = "Apples are round, and apples are juicy.";
    if (str7.search(re) == -1) {
        console.log("Does not contain Apples");
    } else {
        console.log("Contains Apples");
    }


    var str8 = "Apples are round, and apples are juicy.";
    var splitted = str8.split(" ", 3);
    console.log(splitted)  // [ 'Apples', 'are', 'round,' ]

    var str9 = "RUNOOB GOOGLE TAOBAO FACEBOOK";
    console.log("(1,2): " + str9.substring(1, 2));   // U
    console.log("(0,10): " + str9.substring(0, 10)); // RUNOOB GOO
    console.log("(5): " + str9.substring(5));     // B GOOGLE TAOBAO FACEBOOK

    var str10 = "Runoob Google";
    console.log(str10.toLocaleLowerCase());  // runoob google

    var str11 = "Runoob Google";
    console.log(str11.toLocaleUpperCase());  // RUNOOB GOOGLE

    var str12 = "Runoob Google";
    console.log(str12.toLowerCase());  // runoob google

    var str13 = "Runoob";
    console.log(str13.toString()); // Runoob

    var str14 = "Runoob Google";
    console.log(str14.toUpperCase());  // RUNOOB GOOGLE

    var str15 = new String("Runoob");
    console.log(str15.valueOf());  // Runoob
})()