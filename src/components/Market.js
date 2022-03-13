import React from 'react';
import '../css/Market.css'
const Market = (props) => {
  // capitalize the first letter of the string
  const coin = props.title.charAt(0).toUpperCase() + props.title.slice(1);
  // make the % change two decimals long
  const changePercentNum = parseFloat(props.change).toFixed(2);
  // if the percent is less than 0 make it red, otherwise green
  const percentColor = () => {
    return {
      color: (parseFloat(props.change).toFixed(2) < 0) ? 'red' : 'green'
    };
  }
  return (
    <div className = "Market">
      <h3>{coin}</h3>
      <p>{'$' + props.price}</p>
      <p id = "percentChange" style = {percentColor()}>{changePercentNum + '%'}</p>
    </div>
  );
};

export default Market;