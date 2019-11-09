import "./App.css";

import React, { useEffect, useState } from "react";

import MarketWatch from "./MarketWatch";

const App = () => {
  return (
    <div>
      <MarketWatch
        socket={
          new WebSocket(
            "wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin,cardano"
          )
        }
      />
    </div>
  );
};

export default App;
