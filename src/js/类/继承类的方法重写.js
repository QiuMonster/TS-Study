(() => {
    class Dog {
        disp() {
            console.log("小狗展示");
        }
    }
    class BlackDog extends Dog {
        disp() {
            //使用 super关键字调用父类中的方法
            super.disp();
            console.log("小黑狗展示中");
        }
    }
    new BlackDog().disp();
})();
