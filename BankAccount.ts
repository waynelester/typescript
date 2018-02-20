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
    withdraw(amount: number) {
        if (this.balance > 0) {
        this.balance -= amount;
        this.transactions.push(this.balance);
        console.log("Current balance: " + this.balance)
        }
    }
    deposit(amount: number) {
        this.balance += amount;
        this.transactions.push(this.balance);
        console.log("Current balance: " + this.balance)

    }
}

let patron = new BankAccount("John Smith", 500, []);
patron.deposit(200);