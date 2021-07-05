const prompt = require('prompt-sync')();
const atm = require('./atm')
const {verifyAccount} = require('./atm')
const balance = require('./atm')



atm.verifyAccount()


do{
console.log(`To check your account balance select option '1'.\n To make a withdraw select option '2'.\n To make a deposit select option '3'.`);
let atmMenu = prompt();
    switch(atmMenu){
         case '1':
             atm.balance();
            break;
             case '2':
                atm.makeWithdraw();
            break;
        case '3':
                atm.makeDeposit();
            break;
     }
     userInput= prompt("Would you like to return to the menu? 'Y' or 'N'").toLowerCase();
    }while(userInput != 'n')
    console.log('Thank you for visiting!')