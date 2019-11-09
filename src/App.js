import './App.css';

import React, {useEffect, useState} from 'react';

import logo from './logo.svg';


const pricesWs = new WebSocket(
    'wss://ws.coincap.io/prices?assets=bitcoin,ethereum,monero,litecoin,cardano')
const App = () => {
  const [state, setState] = useState({})
  const [oldState, setOldState] = useState({})
  useEffect(() => {
    pricesWs.onmessage = (msg) => {
      let obj = JSON.parse(msg.data)
      setOldState(state)
      setState({...state, ...obj})
     }
  })

  return (
    <div className="marketWatch">
      <h1>Market Watch</h1>
      <div className="marketGrid">
      {
        Object.keys(state).map(el => 
          <div className="gridItem">
            <i className="fab fa-bitcoin"></i>
            <h2>{el}</h2>
            <span 
              style={{color: state[el] > oldState[el] ? '#99b898' : '#e84a5f'}}>
              {state[el]}
              {state[el] > oldState[el] ? 
                <i class="fas fa-arrow-up"></i> : 
                <i class="fas fa-arrow-down"></i>
              }
            </span>
          </div>)
      }
      </div>
    </div>
  )
}

export default App;
