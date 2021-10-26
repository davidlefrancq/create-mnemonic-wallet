const {ethers, Wallet} = require("ethers");

const rpcId = "";
const rpcMumbai =`https://polygon-mumbai.infura.io/v3/${rpcId}`;
const providerMumbai= new ethers.providers.JsonRpcProvider(rpcMumbai);

const pureWallet = ethers.Wallet.createRandom();
console.log(pureWallet._mnemonic().phrase);
console.log({pureWallet});

const wallet = new Wallet(pureWallet, providerMumbai);

console.log({wallet});