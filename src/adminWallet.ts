import { privateKeyToAccount } from "thirdweb/wallets";
import { client } from "twclient";

export async function getAdminWallet() {
    
    const wallet = privateKeyToAccount({
        client,
        privateKey: process.env.ADMIN_WALLET_KEY,
      });
   
    return wallet;
  }