import {ethers} from "ethers";

const wallet = ethers.Wallet.createRandom()
console.log('📜 mnemonic   :', wallet.mnemonic.phrase)
console.log('🔑 privateKey :', wallet.privateKey)
console.log('#️⃣  address    :', wallet.address)
