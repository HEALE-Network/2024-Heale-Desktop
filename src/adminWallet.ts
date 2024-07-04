import { privateKeyToAccount } from "thirdweb/wallets";
import { client } from "twclient";

export async function getAdminWallet() {
    
    const wallet = privateKeyToAccount({
        client,
        privateKey: "971131fffa0d661b98a90ab8fc7463af98c867b829630a3df1b4d9b981c6f042",
      });
   
    return wallet;
  }