"use strict";
class account {
    constructor(name, surname, accountBalance) {
        this.name = name;
        this.surname = surname;
        this.balanceInit = accountBalance;
    }
    deposit(money) {
        this.balanceInit = this.balanceInit + money;
        console.log(`${this.name} ${this.surname}, hai depositato ${money}, Il tuo saldo attuale è ${this.balanceInit}`);
    }
    withdraw(money) {
        this.balanceInit = this.balanceInit - money;
        console.log(`${this.name} ${this.surname}, hai prelevato ${money}, Il tuo saldo attuale è ${this.balanceInit}`);
    }
}
class motherAccount extends account {
    interest() {
        this.balanceInit = Math.floor(this.balanceInit * 1.1);
        console.log(`${this.name} ${this.name}, con gli interessi, Il tuo saldo attuale è ${this.balanceInit}`);
    }
}
class sonAccount extends account {
}
let son = new sonAccount("Marco", "Rossi", 0);
son.deposit(400);
son.withdraw(200);
let mother = new motherAccount("Maria", "Verdi", 500);
mother.deposit(500);
mother.withdraw(200);
mother.interest();
