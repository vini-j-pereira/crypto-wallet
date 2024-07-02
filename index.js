const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function menu() {
    setTimeout(() => {
    console.clear();

        console.log("1 - Create Wallet");
        console.log("2 - Recover Wallet");
        console.log("3 - Balance");
        console.log("4 - Send");
        console.log("5 - Seaech Tx");

        rl.question("Choose your option: ", (answer) => {
            switch(answer){
                case "1": break;
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

menu();

