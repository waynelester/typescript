var BankAccount = /** @class */ (function() {
    function BankAccount(owner, balance, transactions) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = transactions;
    }
    BankAccount.prototype.currentBalance = function() {
        return this.balance;
    };
    BankAccount.prototype.withdrawnAmount = function(amount) {
        if (this.balance > 0) {
            this.balance -= amount;
            this.transactions.push(this.balance);
        }
    };
    BankAccount.prototype.depositedAmount = function(amount) {
        this.balance += amount;
        this.transactions.push(this.balance);
    };
    return BankAccount;
}());
var patron = new BankAccount("John Smith", 500, [100, 200]);
console.log(patron.withdrawnAmount(500));
