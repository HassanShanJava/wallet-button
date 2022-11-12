import React from "react";
import { Web3Button, useAccount } from "@web3modal/react";

const Button = () => {
  const { account } = useAccount();

//   if(!isConnected){
//     return <Web3Button />;
//   }

//   console.log(account.address);

return (
    <div>
        <Web3Button/>
        {account.isConnected && (
            <p>Address: {account.address}</p>
        )}
    </div>
)
};

export default Button;
