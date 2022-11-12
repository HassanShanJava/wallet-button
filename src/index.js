import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// import { ethers } from "ethers";
// import { Web3ReactProvider } from "@web3-react/core";

// import { Web3Provider } from "@ethersproject/providers";

// function getLibrary(provider) {
//   return new Web3Provider(provider);
// }

import { Web3Modal } from "@web3modal/react";
import {chains, providers} from "@web3modal/ethereum"

const modalConfig={
  theme: 'dark',
  accentColor: 'default',
  ethereum: {
    appName: 'Web3Modal',
    chains:[
      chains.goerli,

      chains.avalanche,
      chains.polygon,
      chains.binanceSmartChain,
      chains.fantom,
      chains.arbitrum,
      chains.optimism
      

    ],
    providers:[
      providers.walletConnectProvider({
        projectId:'194fc8bc9f4606be8865a9803392cc10'        
      })
    ],
    autoConnect:true
  },
  projectId:'194fc8bc9f4606be8865a9803392cc10'

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <>
         <App />
         <Web3Modal config={modalConfig}/>
    
      </>
);
