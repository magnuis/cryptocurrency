import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import Card from "./Card";
import CurrencyList from "./CurrencyList";
import Currency from "./Currency";

import Grid from "react-css-grid";

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
      <CurrencyList className="currencies" items={currencies} />

      <header className="App-header">
        <h1>Krypto for dummies</h1>

        <p>Hvilken kryptovaluta vil du lære mer om?</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
