const { ethers } = require("ethers"); 

const provider = new ethers.JsonRpcProvider(process.env.BLOCKCHAIN_NODE);

let myWallet = null;

function createWallet(){
    myWallet = ethers.Wallet.createRandom(provider);
    return myWallet;
}

function recoverWallet(pkOrMnemonic){
    myWallet = pkOrMnemonic.indexOf(" ") !== -1
        ? ethers.Wallet.fromPhrase(pkOrMnemonic, provider)
        : new ethers.Wallet(pkOrMnemonic, provider);

    return myWallet;
}

async function getBalance(address){
    const balance = await provider.getBalance(address);
    return {
        balanceInWei: balance,
        balanceInEth: ethers.formatEther(balance)
    }
}

module.exports = {
    createWallet,
    recoverWallet,
    getBalance
}