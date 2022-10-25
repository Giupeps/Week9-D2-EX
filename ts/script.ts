class account {
  public name: string;
  public surname: string;
  public balanceInit: number;

  constructor(name: string, surname: string, accountBalance: number) {
    this.name = name;
    this.surname = surname;
    this.balanceInit = accountBalance;
  }

  deposit(money: number) {
    this.balanceInit = this.balanceInit + money;
    console.log(
      `${this.name} ${this.surname}, hai depositato ${money}, Il tuo saldo attuale è ${this.balanceInit}`
    );
  }

  withdraw(money: number) {
    this.balanceInit = this.balanceInit - money;
    console.log(
      `${this.name} ${this.surname}, hai prelevato ${money}, Il tuo saldo attuale è ${this.balanceInit}`
    );
  }
}

class motherAccount extends account {
  interest() {
    this.balanceInit = Math.floor(this.balanceInit * 1.1);
    console.log(
      `${this.name} ${this.name}, con gli interessi, Il tuo saldo attuale è ${this.balanceInit}`
    );
  }
}

class sonAccount extends account {}

let son = new sonAccount("Marco", "Rossi", 0);
son.deposit(400);
son.withdraw(200);

let mother = new motherAccount("Maria", "Verdi", 500);
mother.deposit(500);
mother.withdraw(200);
mother.interest();
