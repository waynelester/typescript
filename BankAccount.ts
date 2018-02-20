class BankAccount {
    owner: string;
    balance: number;
    transactions: number[];
    
    constructor(owner: string, balance: number, transactions: number[]) {
        this.owner = owner;
        this.balance = balance;
        this.transactions = transactions;
    }
}

let patron = new BankAccount("John Smith", 50000, [200, 500, 1000]);
console.log(patron)