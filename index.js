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
                case "2": recoverWallet(); break;
                case "3": getBalance(); break;
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
    console.log("PK: " + myWallet.privateKey);

    preMenu();
}

function recoverWallet(){
    console.clear();
    rl.question(`What is your private key or phrase mnemonic? `, (pkOrMnemonic) => {
        const myWallet = WalletService.recoverWallet(pkOrMnemonic);
        myAddress = myWallet.address;

        console.log(`Your recovered wallet: `);
        console.log(myAddress);

        preMenu();
    })
}

async function getBalance(){
    console.clear();

    if(!myAddress){
        console.log(`You don't have a wallet yet!`);
        return preMenu();
    }

    const{balanceInEth} = await WalletService.getBalance(myAddress);
    console.log(`${SYMBOL} ${balanceInEth}`);

    preMenu();
}

menu();

