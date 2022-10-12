(() => {
    class StaticMem {
        static disp() {
            console.log("num 值为 " + StaticMem.num);
        }
    }
    StaticMem.num = 12; // 初始化静态变量
    StaticMem.disp(); // 调用静态方法
})();
