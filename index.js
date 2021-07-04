const prompt = require('prompt-sync')();
const atm = require('./atm')
const { balance, pin } = require('./account');
const {makeWithdraw,verifyAccount,makeDeposit} = require('./atm')





atm.verifyAccount()



const atmMenu = function atmMenu(){
    console.log(`To check your account balance select option '1'.
    To make a withdraw select option '2'.
    To make a deposit select option '3'.`)
    let userInput= prompt();{
        if(userInput === '1'){
            return balance;
        }
        else if(userInput === '2'){
            atm.makeWithdraw()
        }
        else if(userInput === '3'){
            atm.makeDeposit()
        }
        else(userInput === '4');{
            verifyAccount();
        }
    }
}
