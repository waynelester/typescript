var BankAccount = /** @class */ (function () {
    function BankAccount(owner, balance, transactions) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = transactions;
    }
    return BankAccount;
}());
var patron = new BankAccount("John Smith", 50000, [200, 500, 1000]);
console.log(patron);
