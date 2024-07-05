import { createThirdwebClient } from "thirdweb";
 
const clientId = process.env.TW_ID; // this will be used on the client
const secretKey = process.env.TW_KEY; // this will be used on the server-side
 
export const client = createThirdwebClient(
  secretKey
    ? { secretKey }
    : {
        clientId,
      },
);