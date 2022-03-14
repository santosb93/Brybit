import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import {createChart} from 'lightweight-charts';
import { bryBitReducer } from '../context/context';
import * as types from '../constants/actionTypes'
import "../css/TradeCoin.css"
const TradeCoin = () => {
  const {id} = useParams();
  const {dispatch} = useContext(bryBitReducer);
  console.log('id',);

  //fetch the ohlc
  useEffect(() => {
    console.log('fetching ohlc');
    fetch(`http://localhost:8080/ohlc/${id}`)
    .then(res => res.json())
    .then(data => {
      const chartProperties = {
        width: 600,
        height: 400,
        timeScale:{
          timeVisibile: true,
          secondsVisibile: false,
        },
      }
      console.log(data.ohlc)
      const domElem = document.querySelector('#chart')
      const chart = createChart(domElem, chartProperties);
      const candleSeries = chart.addCandlestickSeries();
      candleSeries.setData(data.ohlc);
      dispatch({type: types.UPDATE_OHLC_COIN, payload: data.ohlc})
      }
    )
    .catch((err) => console.log("error", err))
  },[id]);
  return (
    <section>
      <div id = 'chart'>
      </div>
    </section>
  );
};

export default TradeCoin;