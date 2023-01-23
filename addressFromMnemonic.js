import * as dotenv from 'dotenv'
dotenv.config()
import { Wallet } from "ethers";

const mnemonic = process.env.MNEMONIC

const walletFromMnemonic = Wallet.fromMnemonic(mnemonic)
const wallet = new Wallet(walletFromMnemonic.privateKey);

console.log('mnemonic', mnemonic)
console.log('privateKey', walletFromMnemonic.privateKey)
console.log('address', wallet.address)

