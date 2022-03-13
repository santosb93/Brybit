import React, { useEffect, useState } from 'react';
import '../css/Markets.css'
import Market from './Market';
const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin%2Clitecoin%2Ccardano%2Cshiba-inu&vs_currencies=usd&include_24hr_change=true';
const Markets = () => {
  const [isFetching, setIsFetching] = useState(false);
  const [market, setMarket] = useState([])

  useEffect(() => {
      setIsFetching(true);
      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setIsFetching(false);
        console.log('fetched');
        const marketsArray = Object.entries(data).sort((a,b) => b[1].usd - a[1].usd)
        const result = marketsArray.map( (el,i) => <Market
          key = {el[0]} 
          title = {el[0]} 
          price = {el[1].usd} 
          change = {el[1].usd_24h_change}
        />);
        setMarket(result);
      })
      .catch((err)=> console.log('Markets: fetch /api: Error: ', err));
  }, [market.length]);

  return (
    <section id="Markets">
      <div className = "Markets__container">
        <h2 id = "Markets__header">
          Explore crypto like Bitcoin,
          Ethereum, Dogecoin,
          and more...
        </h2>
        </div>
      <div className= "Markets__container">
        {isFetching ? (<img src='./images/B.gif' alt='brybit logo'></img>) : market}
      </div>
    </section>
  );
};

export default Markets;