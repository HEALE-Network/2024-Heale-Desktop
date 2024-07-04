import { createThirdwebClient } from "thirdweb";
 
const clientId = "d7010ce5ec016bec9d6217c5dda661ba"; // this will be used on the client
const secretKey = "d6VnL9uaKnMQ8AvNKQOorfh3nzKwWZIf_beLQbuVq5K6vdAXX1hKjCkTrz9_1R-o0fkwsFXw9O_XRgEeuCoOng"; // this will be used on the server-side
 
export const client = createThirdwebClient(
  secretKey
    ? { secretKey }
    : {
        clientId,
      },
);