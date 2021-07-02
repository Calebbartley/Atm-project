const account= require("./account");
const prompt = require('prompt-sync')();

const wallet = require(`./wallet`)

function verifyAccount(pin){
    if(pin == pin)
    console.log(`Your account balance is \n ${balance}`)
};
function makeDeposit(numberOne,balance){
    return numberOne + balance;
}


function makeWithdraw(numberOne,balance){
    return numberOne - balance;
}




module.exports.verify = verifyAccount

module.exports.deposit = makeDeposit
module.exports.withdraw = makeWithdraw