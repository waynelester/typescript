var BankAccount = /** @class */ (function () {
    function BankAccount(owner, balance, transactions) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = transactions;
    }
    BankAccount.prototype.currentBalance = function () {
        return this.balance;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (this.balance > 0) {
            this.balance -= amount;
            this.transactions.push(this.balance);
            console.log("Current balance: " + this.balance);
        }
    };
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
        this.transactions.push(this.balance);
        console.log("Current balance: " + this.balance);
    };
    return BankAccount;
}());
var patron = new BankAccount("John Smith", 500, []);
patron.deposit(200);
