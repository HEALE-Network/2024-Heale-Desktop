import { getContract } from "thirdweb";
import { polygonAmoy } from "thirdweb/chains";

export function getPIDContract(client: any) {
  return getContract({ 
    client, 
    chain: polygonAmoy, 
    address: "0xb5645f4DF892976dED6b8b33e12961015B95d7D7"
  });
}