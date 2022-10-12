(() => {
    interface ILoan {
        interest: number
    }
    class AgriLoan implements ILoan {
        interest: number
        rebate: number
        constructor(interest: number, rebate: number) {
            this.interest = interest
            this.rebate = rebate
        }

    }
    var a = new AgriLoan(10, 1)
    console.log("利润为:" + a.interest + ",抽成为:" + a.rebate)
})()