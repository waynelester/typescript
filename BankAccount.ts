class BankAccount {
    owner: string;
    balance: number;
    transactions: number[];
    
    constructor(owner: string, balance: number, transactions: number[]) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = transactions;
    }
    currentBalance() {
        return this.balance;
    }
    withdrawnAmount(amount: number) {
        if (this.balance > 0) {
        this.balance -= amount;
        this.transactions.push(this.balance);
        }
    }
    depositedAmount(amount: number) {
        this.balance += amount;
        this.transactions.push(this.balance);
    }
}

let patron = new BankAccount("John Smith", 500, [100, 200]);
console.log(patron.withdrawnAmount(500));