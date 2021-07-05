const account= require("./account");
const prompt = require('prompt-sync')();
const {pin} = require('./account')
const {balance} = require('./account')
const availableCash = require(`./wallet`)
const {enterPin}= require('./index')
const index = require('./index')
const wallet = require('./wallet')

function getBalance(){
    console.log(`Your current balance is, $${balance} `)
}

function verifyAccount(){
    let enterPin=prompt('Enter your pin:')
    if (enterPin == pin){
        console.log('PIN Verified')
        return enterPin;

    }
};




function makeDeposit(){
    console.log('How much would you like to deposit?');
    let userInput= prompt();
    let newBalance=  parseInt(userInput) + account.balance;
    console.log(`Your new balance is, $${newBalance}`)
}




function makeWithdraw(){
    console.log('please enter withdraw amount.')
    let withdrawAmount = prompt();
    if(account.balance >= withdrawAmount){
    let newBalance = balance - withdrawAmount;
    console.log (`Your new balance is, $${newBalance}.`)
    let walletBalance = (wallet.availableCash) + parseInt(withdrawAmount);
    console.log (`$${walletBalance} has now been transferred to your wallet.`)
    }
    else if(account.balance < withdrawAmount){
        console.log("Not enough money.....")
    }
    return withdrawAmount
}








module.exports.verifyAccount = verifyAccount
module.exports.balance = getBalance
module.exports.makeDeposit = makeDeposit
module.exports.makeWithdraw = makeWithdraw