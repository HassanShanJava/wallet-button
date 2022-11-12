import React, { useState } from "react";

// import { useWeb3React } from "@web3-react/core";

// import { Injected, CoinbaseWallet, WallectConnect } from "./connector";
import { Buffer } from "buffer";
// import Modal from "./component/Modal";
// import Account from "./component/Modal";
import Button from "./Button";

function App() {
  // const { activate, deactivate } = useWeb3React();

  // const [modal, setModal] = useState(false);

  // I've tried all the answers here to resolve this issue and nothing worked for me. What did work for me was putting the following in my polyfills.ts:

  // @ts-ignore
  Buffer.from("anything", "base64");
  window.Buffer = window.Buffer || require("buffer").Buffer;

  // trying out modal

  // return (
  //   <div className="App">
  //     {/* <button
  //       onClick={async () => {
  //         await activate(CoinbaseWallet);
  //       }}
  //     >
  //       Coinbase Wallet
  //     </button>
  //     <button
  //       onClick={async () => {
  //         await activate(WallectConnect);
  //       }}
  //     >
  //       Wallet Connect
  //     </button>

  //     <button
  //       onClick={ () => {
  //         try {
  //           activate(Injected);
  //         } catch (ex) {
  //           console.log(ex);
  //         }
  //       }}
  //     >
  //       Metamask
  //     </button>

  //     <button onClick={deactivate}>Disconnect</button> */}
  //     <h1>Click Me</h1>
  //     <button className='openModal' onClick={()=>setModal(true)}>Click</button>

  //     {modal&&(<p>{Account}</p>)}
  //     {modal&&<Modal closeModal={setModal}/>}

  //   </div>
  // );
  return (
    <>
      <Button />
    </>
  );
}

export default App;
