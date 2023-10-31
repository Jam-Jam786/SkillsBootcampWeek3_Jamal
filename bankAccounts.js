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
        (this.balance += deposit)
        // return this.balance
   if (this.balance < -500) {
    console.log("exceeded overdraft limit")
        
    }
    }

    // Step 3
    // add a method called getDescription, it should output a sentance that describes this account.
    // e.g. sally smith has 1000 in her bank account, the account number is 12345678 and the sort code is 112233.
    getDescription(){
        return(`${this.holder} has £${this.balance} in this bank account, the account number is ${this.accountNumber} and the sort code is ${this.sortCode} `)
    }
    
}




let acc1 = new bankAccount(1000,112233, 12345678, "Sally Smith")
// let acc2 = new bankAccount(-5000, 112233, 23456789, "John Smith")
console.log(acc1.balance)
acc1.modifyBalance(-1501)
console.log(acc1.balance)
// console.log(acc2.balance)
// console.log(acc1.holder)
// console.log(acc1.getDescription())
// console.log(acc2.getDescription())
