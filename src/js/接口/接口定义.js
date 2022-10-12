(() => {
    var d = {
        dname: 'dog',
        age: 22,
        eat: function () {
            console.log("小狗正在吃饭");
            return 'hello world';
        }
    };
    console.log(d.age);
    console.log(d.dname);
    d.eat();
})();
