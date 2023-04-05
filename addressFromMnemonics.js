import * as dotenv from 'dotenv'
dotenv.config()

import { Wallet } from "ethers";

const showMnemonic = (mnemonic) => {
  const walletFromMnemonic = Wallet.fromMnemonic(mnemonic)
  const wallet = new Wallet(walletFromMnemonic.privateKey);

  console.log('')
  console.log('📜 mnemonic   : ', mnemonic)
  console.log('🔑 privateKey : ', walletFromMnemonic.privateKey)
  console.log('#️⃣ address    : ', wallet.address)
}

const mnemonics = JSON.parse(process.env.MNEMONICS.replaceAll('\\',''))
mnemonics.forEach((mnemonic)=>{
  showMnemonic(mnemonic)
})