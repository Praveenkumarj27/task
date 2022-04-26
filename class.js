class Account{
    constructor(name,accno,balance){
        this.name=name;                   //member variables
        this.accno=accno;
        this.balance=balance;
    }

    getBalance(){
        return `Your balance is: ${this.balance}`;
    }
    withdrawl(amount){
        if(this.balance>=amount){ 
    this.balance=this.balance-amount;
    return this.getBalance();
    }else{
        return`Insufficient balance. ${this.getBalance()}`
    }
}
deposit(amount){
    this.balance=this.balance+amount
    return this.getBalance();
}
}

//creating the object-initiating object

let prem=new Account("Prem",26,1_00_000);
let mahat=new Account("Mahat",27,7_00_000);
let vinayak=new Account("Vinayak",26,50_00_000);

console.log(prem);
console.log(mahat);
console.log(vinayak);

console.log(vinayak.getBalance());

console.log(vinayak.withdrawl(50000));

console.log(prem.deposit(50000));








