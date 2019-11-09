import React, { useState, useEffect } from "react";

const MarketWatch = props => {
  let { socket } = props;
  const [state, setState] = useState({});
  const [oldState, setOldState] = useState({});
  useEffect(() => {
    socket.onmessage = msg => {
      let obj = JSON.parse(msg.data);
      setOldState(state);
      setState({ ...state, ...obj });
    };
  });

  return (
    <div className="marketWatch">
      <h1>Market Watch</h1>
      <div className="marketGrid">
        {Object.keys(state).map(el => (
          <div className="gridItem">
            <i className="fab fa-bitcoin"></i>
            <h2>{el}</h2>
            <span
              style={{
                color: state[el] > oldState[el] ? "#99b898" : "#e84a5f"
              }}
            >
              {state[el]}
              {state[el] > oldState[el] ? (
                <i class="fas fa-arrow-up"></i>
              ) : (
                <i class="fas fa-arrow-down"></i>
              )}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketWatch;
