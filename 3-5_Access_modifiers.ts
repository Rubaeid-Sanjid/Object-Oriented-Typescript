{
    class BankAccount{
        readonly id: number;
        public name: string;
        // private _balance : number
        protected _balance : number

        constructor(id : number, name : string, balance : number){
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        addDeposit(amount : number){
            this._balance = this._balance + amount;
        }
        getBalance(){
            return this._balance;
        }

    }

    const user = new BankAccount(111, "Sanjid", 1000);
    user.addDeposit(500);
    const myBalance = user.getBalance();
    console.log(myBalance);
    
    class StudentAccount extends BankAccount{
        test(){
            this._balance;
        }
    }
}