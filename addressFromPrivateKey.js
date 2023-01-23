import * as dotenv from 'dotenv'
dotenv.config()
import { Wallet } from "ethers";

/**
 * @dev private key without 2 first characters "0x"
 */
const privateKey = process.env.PRIVATE_KEY
const wallet = new Wallet(privateKey)

console.log('privateKey', privateKey)
console.log('address', wallet.address)

