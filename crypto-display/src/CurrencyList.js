import { useState } from "react";
import Currency from "./Currency";
import CurrencyFilter from "./CurrencyFilter";
import "./CurrencyList.css";

const CurrencyList = (props) => {
  const [sortingValue, setSortingValue] = useState("name");

  const sortingChangeHandler = (filter) => {
    setSortingValue(filter);
  };

  function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
    }
    return function (a, b) {
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
      return result * sortOrder;
    };
  }

  const sortedCurrencies = props.items.sort(dynamicSort(sortingValue));

  return (
    <div className="currency-list">
      <CurrencyFilter
        selected={sortingValue}
        onChangeFilter={sortingChangeHandler}
      />
      {sortedCurrencies.map((currency) => (
        <Currency
          key={currency.id}
          name={currency.name}
          image={currency.image}
          symbol={currency.symbol}
          price={currency.current_price}
          priceChange={currency.price_change_percentage_24h}
        />
      ))}
    </div>
  );
};

export default CurrencyList;
