const account= require("./account");
const prompt = require('prompt-sync')();
const {pin} = require('./account')
const {balance} = require('./account')
const wallet = require(`./wallet`)
const {enterPin}= require('./index')
const index = require('./index')



function verifyAccount(){
    let enterPin=prompt('Enter your pin:')
    if(enterPin === pin)
    atmMenu()
};




function makeDeposit(userInput,balance){
    console.log('How much would you like to deposit?');
    let userInput= prompt();
    let newBalance=  userInput + balance;
    console.log(`Your new balance is, ${newBalance}`)
}




function makeWithdraw(withdrawAmount,balance){
    console.log('How much would you like to withdraw? \n Minimum withdraw amount is $20.00 \n Please enter multiples of 5.');
    let userInput= prompt();
    let withdrawAmount = userInput
    let newBalance =  withdrawAmount - balance;
    console.log (`Your new balance is, ${newBalance}`)
}








module.exports.verifyAccount = verifyAccount

module.exports.makeDeposit = makeDeposit
module.exports.makeWithdraw = makeWithdraw
