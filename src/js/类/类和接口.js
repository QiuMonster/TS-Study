(() => {
    class AgriLoan {
        constructor(interest, rebate) {
            this.interest = interest;
            this.rebate = rebate;
        }
    }
    var a = new AgriLoan(10, 1);
    console.log("利润为:" + a.interest + ",抽成为:" + a.rebate);
})();
