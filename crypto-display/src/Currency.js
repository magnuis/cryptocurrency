import { useState } from "react";
import "./Currency.css";
import Popup from "./Popup";

const Currency = (props) => {
  const [popup, setPopup] = useState(false);

  return (
    <div onClick={() => setPopup(true)}>
      <div className="currency-container">
        <div className="currency-row">
          <div className="currency">
            <img src={props.image} />
            <h1>{props.name}</h1>
            <p className="currency-symbol" />
            <p>{props.price}</p>
            <p className="currency-symbol" />
          </div>
        </div>
      </div>
      <Popup trigger={popup} setTrigger={setPopup}>
        <img src={props.image} />
        <h1>
          {props.name} ({props.symbol})
        </h1>
        <h3>Current value: ${props.price}</h3>
        <h3>Change of value last 24H: {props.priceChange}%</h3>
      </Popup>
    </div>
  );
};

export default Currency;
/*
<p>
  {props.priceChange < 0 ? (
    <p className="coin-percent red">{props.priceChange.toFixed(2)}%</p>
  ) : (
    <p className="coin-percent green">{props.priceChange.toFixed(2)}%</p>
  )}
</p>;
*/
