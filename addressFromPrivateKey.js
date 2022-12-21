import { Wallet } from "ethers";

/**
 * @dev private key without 2 first characters "0x"
 */
const privateKey = '___PrivateKey___'
const wallet = new Wallet(privateKey)

console.log('privateKey', privateKey)
console.log('address', wallet.address)

