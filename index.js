const prompt = require('prompt-sync')();
const atm = require('./atm')
const account = require('./account');
const {verifyAccount} = require('./atm')
const balance = require('./account')



atm.verifyAccount()



const atmMenu= prompt(`To check your account balance select option '1'.
    To make a withdraw select option '2'.
    To make a deposit select option '3'.
     To exit please enter '4'.`);
     switch(atmMenu){
         case '1':
             console.log(`Your current balance is, ${balance} `)
             break;
        case '2':
            let cat = prompt(`How much would you like to withdraw? Minimum withdraw amount is $20.00. Please enter multiples of 5.`)
            //let withdrawAmount = parseFloat(prompt)
            let withdrawAmount = (parseInt(cat))
            let newBalance =  parseInt(account.balance) - withdrawAmount ;
                let withdResult= prompt(`Your new balance is, ${newBalance}. To make another Selection please press '1'`)
                return newBalance
            break;
        case '3':
            let dog = prompt(`How much would you like to deposit? `)
            let depositAmount = (parseInt(dog))
            let updatedBalance = depositAmount + parseInt(account.balance);
                console.log(updatedBalance)
            break;
        case '4':
            return;

     }








