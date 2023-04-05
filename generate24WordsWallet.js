// Import the ethers library
import {ethers} from "ethers";

// Generate a 24-word mnemonic
const mnemonic = ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(32));

// Create an HD wallet using the mnemonic
const wallet = ethers.Wallet.fromMnemonic(mnemonic);

// Log the mnemonic and wallet details
console.log("📜 mnemonic    :", mnemonic);
console.log("🔑 private Key :", wallet.privateKey);
console.log("#️⃣ address     :", wallet.address);
