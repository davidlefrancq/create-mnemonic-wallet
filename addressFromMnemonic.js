import { Wallet, providers } from "ethers";
import rpcs from './rpcs.json' assert {type: 'json'}

const mnemonic = '___Mnemonic___'
const provider = new providers.JsonRpcBatchProvider(rpcs.test.url)

const walletFromMnemonic = Wallet.fromMnemonic(mnemonic)
const wallet = new Wallet(walletFromMnemonic.privateKey, provider);

console.log('network', await provider.getNetwork())
console.log('mnemonic', mnemonic)
console.log('privateKey', walletFromMnemonic.privateKey)
console.log('address', wallet.address)

