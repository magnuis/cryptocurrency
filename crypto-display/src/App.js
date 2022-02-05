import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CurrencyList from "./CurrencyList";

function App() {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCurrencies(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Krypto for dummies</h1>
      </header>
      <CurrencyList className="currencies" items={currencies} />
    </div>
  );
}

export default App;
