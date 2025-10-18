// class Account {
//   constructor(email, password, fullname) {
//     this.email = email;
//     this.password = password;
//     this.fullname = fullname;
//   }

//   static checkIfExists(email) {

//     return accounts.some(account => account.email === email);
//   }
// }

// const accounts = [];

// const acc1 = new Account("test@example.com", "123456", "Tornike");
// accounts.push(acc1);

// console.log(Account.checkIfExists("test@example.com")); //გამოიტანს True-ს
// console.log(Account.checkIfExists("notfound@example.com"));// გამოიტანს False-ს

// class Account {
//   constructor(email, password, fullname) {
//     this.email = email;
//     this.password = password;
//     this.fullname = fullname;
//   }

//   static checkIfExists(email) {
//     return accounts.some(account => account.email === email);
//   }

//   static AddToStorage(accountObj) {
//     if (Account.checkIfExists(accountObj.email)) {
//       alert("Registration Ended Unsuccesfull, This E-Mail Is Already Registered");
//       return;
//     }

//     accounts.push(accountObj);
//     console.log("Registration Ended Succesfully!");
//   }
// }
// const accounts = [];

// // ტესტი:
// const newAcc1 = new Account("someone@mail.com", "123456", "Nika");
// Account.AddToStorage(newAcc1);

// const newAcc2 = new Account("someone@mail.com", "abcdef", "Ana");
// Account.AddToStorage(newAcc2);


class Account {
  constructor(email, password, fullname) {
    this.email = email;
    this.password = password;
    this.fullname = fullname;
  }

  static getFromStorage(key) {
    const data = localStorage.getItem(key);
    const parsed = JSON.parse(data);
    return parsed === null ? [] : parsed;
  }

  static checkIfExists(email) {
    const accounts = Account.getFromStorage("accounts");
    return accounts.some(account => account.email === email);
  }

  static AddToStorage(accountObj) {
    const accounts = Account.getFromStorage("accounts");

    if (Account.checkIfExists(accountObj.email)) {
      alert("Registration Ended Unsuccesfull, This E-Mail Is Already Registered");
      return;
    }

    accounts.push(accountObj);
    localStorage.setItem("accounts", JSON.stringify(accounts));
    console.log("Registration Ended Succesfully");
    }
}