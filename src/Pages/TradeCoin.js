import React from 'react';
import { useParams } from 'react-router';
const TradeCoin = () => {
  const id = useParams();
  console.log(id);
  return (
    <section>
      <div id = 'chart'>
        CHART
      </div>
    </section>
  );
};

export default TradeCoin;