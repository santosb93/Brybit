import React, { useEffect } from 'react';
import { useParams } from 'react-router';
const TradeCoin = () => {
  const {id} = useParams();
  console.log('id',);

  //fetch the ohlc
  useEffect(() => {
    console.log('fetching ohlc');
    fetch(`http://localhost:8080/ohlc/${id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data.ohlc)
      console.log(document.querySelector('#chart'))
      }
    )
    .catch((err) => console.log("error", err))
  },[id]);
  return (
    <section>
      <div id = 'chart'>
        CHART
      </div>
    </section>
  );
};

export default TradeCoin;