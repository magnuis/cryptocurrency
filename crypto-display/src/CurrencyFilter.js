const CurrencyFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div>
      <label>Choose sorting property: </label>
      <select value={props.selected} onChange={dropDownChangeHandler}>
        <option value="name">Alphabetically</option>
        <option value="-name">Reversed alphabetically</option>
        <option value="current_price">By price, increasing</option>
        <option value="-current_price">By price, decreasing</option>
      </select>
    </div>
  );
};

export default CurrencyFilter;
