const prompt = require('prompt-sync')();

const { balance } = require('./account');
const atm = require('./atm')

let pinEntered = prompt(`Enter your pin:\n`);

if(pinNumber == 8989){
    console.log(`Success!`);
    let menuSelect= prompt(`To check your account balance select option '1'.
     \n To make a withdraw select option '2'. 
     \n To make a deposit select option '3'.`);{
         switch(menuSelect){
            case '1':
                 console.log(`Your account balance is:`,'$',balance )
            break;
            case '2':
                console.log(`How much would you like to withdraw?`, atm.withdraw)
            break;
         
        }
        let reroll= prompt("Would you like to make another selection? 'Yes' or 'No'");{
            if(reroll == 'yes'){
                menuSelect
            }
            else{
                console.log("Thank You! Enjoy your day!")
            }
        }
     }

}
else(
    console.log('Wrong PIN! try again'));{
        return pinNumber
    }







