import { Wallet, providers } from "ethers";
import rpcs from './rpcs.json' assert {type: 'json'}

/**
 * @dev private key without 2 first characters "0x"
 */
const privateKey = '___PrivateKey___'
const provider = new providers.JsonRpcBatchProvider(rpcs.test.url)
const wallet = new Wallet(privateKey, provider)

console.log('network', await provider.getNetwork())
console.log(privateKey)
console.log(wallet.address)

