import { Wallet } from "ethers";

const mnemonic = '___Mnemonic___'

const walletFromMnemonic = Wallet.fromMnemonic(mnemonic)
const wallet = new Wallet(walletFromMnemonic.privateKey);

console.log('mnemonic', mnemonic)
console.log('privateKey', walletFromMnemonic.privateKey)
console.log('address', wallet.address)

