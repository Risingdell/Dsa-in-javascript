/*Bank Account

Class: BankAccount

Properties: accountNumber, balance

Methods: deposit(amount), withdraw(amount), checkBalance()
Practice: Test deposits/withdrawals.*/

class Bank{
    constructor(accNo,name){
        this.accNo=accNo;
        this.name=name;
        this.amount=0;
        this.balance=0;
    }
    deposit(amount){
        this.balance+=amount;
        return `customer name:${this.name}  Acc.no.:${this.accNo} =>the current balance is:${this.balance}`;
    }

    withdraw(amount){
        this.balance-=amount;
        return `customer name:${this.name}  Acc.no.:${this.accNo} =>the existing money is: ${this.balance}`;

    }
}
let cus1=new Bank(123456789098765,"dhanush");
console.log(cus1.deposit(900000000000));
console.log(cus1.withdraw(9000));