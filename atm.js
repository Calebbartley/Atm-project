const account= require("./account");
const prompt = require('prompt-sync')();

const wallet = require(`./wallet`)

function verifyAccount(pin){
    if(pin == 8989)
    console.log(`Your account balance is \n ${balance}`)
};
function makeDeposit(depositAmount,balance){
    let newBalance=  depositAmount + balance;
    console.log(newBalance)
}


function makeWithdraw(withdrawAmount,balance){
    let newBalance =  withdrawAmount - balance;
    console.log (newBalance)
}




module.exports.verify = verifyAccount

module.exports.deposit = makeDeposit
module.exports.withdraw = makeWithdraw