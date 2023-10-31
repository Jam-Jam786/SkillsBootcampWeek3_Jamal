class bankAccount{

    // Step 1
    // modify the constructor to set an account holder name
    // e.g. console.log(acc1.holder) output Sally Smith

    // step 4
    // modify the class so it has an overdraft limit attribute, in modifyBalance,
    // only change the value of balance if it won't exceede the overdraft limit
    // e.g. calling acc1.modifyBalance(-10000) won't work if the account has an overdraft limit of -500
    constructor(bal, sort, accNo, accountName, draftLimit){
    
    this.balance = bal
    this.sortCode = sort
    this.accountNumber = accNo
    this.holder = accountName
    this.overDraftLimit = draftLimit

    }

    // Step 2
    // add to this code so the following method takes a single argument (integer)
    // add this number to the account balance
    // example - acc1.modifyBalance(150)
    modifyBalance(deposit){
        this.newAmmount = this.balance + deposit
        // return this.balance
   if (this.newAmmount < -500) {
    console.log("exceeded overdraft limit")
    
    }else{
        this.blance += deposit
    }
    }

    // step 4
    // add a method called annualInterest, which should inflate the balance by a certain percentage
    // start by the method always adding 5% interest
    // e.g. on an account with 100 balance calling acc1.anuualInterest() will make the balance 105
    // once this working, modift so the interest is a parameter,
    // e.g. acc1.annulInterest(3) would inflate balancec by 3%

    
    annualInterest(){
    this.interestRate = 0.03
    this.newAnualInterest = this.balance * this.interestRate
    this.balance += this.newAnualInterest
    return this.balance
    }


    // Step 3
    // add a method called getDescription, it should output a sentance that describes this account.
    // e.g. sally smith has 1000 in her bank account, the account number is 12345678 and the sort code is 112233.
    getDescription(){
        return(`${this.holder} has £${this.balance} in this bank account, the account number is ${this.accountNumber} and the sort code is ${this.sortCode} `)
    }
    
}




let acc1 = new bankAccount(100,112233, 12345678, "Sally Smith")
// let acc2 = new bankAccount(-5000, 112233, 23456789, "John Smith")
// console.log(acc1.balance)
// acc1.modifyBalance(-1500)

console.log(acc1.balance)
// console.log(acc2.balance)
// console.log(acc1.holder)
// console.log(acc1.getDescription())
// console.log(acc2.getDescription())
console.log(acc1.annualInterest())
