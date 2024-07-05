require("dotenv").config();

const WalletService = require("./WalletService");
const SYMBOL = process.env.SYMBOL;

const { config } = require("dotenv");
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let myAddress = null;

function menu() {
    setTimeout(() => {
    console.clear();

    if(myAddress){
        console.log(`You are logged as ${myAddress}`);
    }else{
        console.log(`You aren't logged!`);
    }

        console.log("1 - Create Wallet");
        console.log("2 - Recover Wallet");
        console.log("3 - Balance");
        console.log("4 - Send " + SYMBOL);
        console.log("5 - Seaech Tx");

        rl.question("Choose your option: ", (answer) => {
            switch(answer){
                case "1": createWallet(); break;
                case "2": break;
                case "3": break;
                case "4": break;
                case "5": break;
                default: {
                    console.log("Wrong option!");
                    menu();
                }
            }
        })
    },2000)
}

function preMenu(){
    rl.question("Press any key to continue...", () => {
        menu();
    })
}

function createWallet(){
    const myWallet = WalletService.createWallet();
    myAddress = myWallet.address;

    console.log(`Your new Wallet:`);
    console.log(myAddress);
    preMenu();
}

menu();

