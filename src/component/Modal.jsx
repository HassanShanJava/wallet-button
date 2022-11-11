import React from "react";
import "./Modal.css";

import { useWeb3React } from "@web3-react/core";

import { Injected, CoinbaseWallet, WallectConnect } from "../connector";
import { Buffer } from "buffer";

import MetaMask from "./modal/metamask.png";
import CoinBas from "./modal/coinbase.png";
import WalletConn from "./modal/walletconnect.png";


let acc;

const Modal = ({ closeModal }) => {
  const { activate,account, deactivate } = useWeb3React();

  acc={account}

  Buffer.from("anything", "base64");
  window.Buffer = window.Buffer || require("buffer").Buffer;

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <h1>Select Wallet</h1>
          <button onClick={() => closeModal(false)}>X</button>
        </div>

        <div className="body">
          <button
            onClick={async () => {
              await activate(CoinbaseWallet);
            }}
          >
            <img className="image" src={CoinBas} alt="/" />
            <span >
            Coinbase Wallet
            </span>
          </button>
          <button
            onClick={async () => {
              await activate(WallectConnect);
            }}
          >
              <img className="image" src={WalletConn} alt="/" />
            <span >
              Wallet Connect
            </span>
          </button>

          <button
            onClick={() => {
              try {
                activate(Injected);
              } catch (ex) {
                console.log(ex);
              }
            }}
          >
<img className="image" src={MetaMask} alt="/" />
            <span >
            MetaMask
            </span>
          </button>

          <button onClick={deactivate}>Disconnect</button>
        </div>
      </div>
    </div>
  );
};


export const Account =acc;

export default Modal;
