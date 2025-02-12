import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Exchange from "./pages/Exchange";
import Create from "./pages/Create";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

// 1. Get projectId
const projectId = "pompi.fi";

// 2. Set chains
const mainnet = {
  chainId: 245022926,
  name: "Neon EVM DevNet",
  currency: "NEON",
  explorerUrl: "https://devnet.neonscan.org",
  rpcUrl: "https://devnet.neonevm.org",
};

// 3. Create a metadata object
const metadata = {
  name: "pompi.fy",
  description: "pump it",
  url: "https://pompi.fi", // origin must match your domain & subdomain
  icons: ["https://avatars.mywebsite.com/"],
};

// 4. Create Ethers config
const ethersConfig = defaultConfig({
  /*Required*/
  metadata,

  /*Optional*/
  enableEIP6963: true, // true by default
  enableInjected: true, // true by default
  enableCoinbase: true, // true by default
  rpcUrl: "...", // used for the Coinbase SDK
  defaultChainId: 1, // used for the Coinbase SDK
});

// 5. Create a Web3Modal instance
createWeb3Modal({
  featuredWalletIds: [
    "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
  ],
  ethersConfig,
  chains: [mainnet],
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="exchange/:address" element={<Exchange />} />
        <Route path="create" element={<Create />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
