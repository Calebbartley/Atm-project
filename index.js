const prompt = require('prompt-sync')();

const { balance, pin } = require('./account');
const atm = require('./atm')
const {withdraw} = require('./atm');
const{verify} = require('./atm');
const{deposit} = require('./atm');

let pinEntered = prompt(`Enter your pin:\n`);

if(pinEntered == 8989){
    console.log(`Success!`);
    let menuSelect= prompt(`To check your account balance select option '1'.
     \n To make a withdraw select option '2'.
     \n To make a deposit select option '3'.`);{
         switch(menuSelect){
            case '1':
                 console.log(`Your account balance is:${balance}, "Would you like to make another selection? 'Yes' or 'No' `);{
                     if(console.log == 'yes'){
                         return menuSelect
                     }
                 }
                
            break;
            case '2':
                prompt(`How much would you like to withdraw?`)
            break;
            case '3':
                let depositAmount = parseFloat(prompt('How much would you like to deposit?'))
        }

     }

}
else(
    console.log('Wrong PIN! try again'));{
        return pinEntered
    }


reroll

    let reroll= prompt("Would you like to make another selection? 'Yes' or 'No'");{
        if(reroll == 'yes'){
            menuSelect
        }
        else if(reroll == 'no'){
            console.log("Thank You! Enjoy your day!")
        }
    }







