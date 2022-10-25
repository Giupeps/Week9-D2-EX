"use strict";
class account {
    constructor(name, surname, accountBalance) {
        this.name = name;
        this.surname = surname;
        this.balanceInit = accountBalance;
    }
    deposit(money) {
        this.balanceInit = this.balanceInit + money;
        console.log(`${this.name} ${this.surname}, hai depositato ${money} euro, Il tuo saldo attuale è ${this.balanceInit} euro`);
    }
    withdraw(money) {
        this.balanceInit = this.balanceInit - money;
        console.log(`${this.name} ${this.surname}, hai prelevato ${money} euro, Il tuo saldo attuale è ${this.balanceInit} euro`);
    }
}
class motherAccount extends account {
    interest() {
        this.balanceInit = Math.floor(this.balanceInit * 1.1);
        console.log(`${this.name} ${this.name}, con gli interessi, Il tuo saldo attuale è ${this.balanceInit} euro`);
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
