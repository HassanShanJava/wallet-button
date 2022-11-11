import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { InjectedConnector } from "@web3-react/injected-connector";

export const CoinbaseWallet = new WalletLinkConnector({
  url: `https://mainnet.infura.io/v3/fe43aca1438840a2b83c51e6869cf8dd`,
  appName: "BUTTON",
  supportedChainIds: [1, 3, 4, 5, 42],
});

export const WallectConnect = new WalletConnectConnector({
  rpcUrl: `https://mainnet.infura.io/v3/fe43aca1438840a2b83c51e6869cf8dd`,
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
});

export const Injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42]
});


