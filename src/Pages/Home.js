import '../css/Home.css'

import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import Markets from '../components/Markets';
function Home() {
  // utilize use effect hook to fetch from gecko api for market data  
  return (
    <div className = "home_page">
    <Hero/>
    <Banner/>
    <Markets/>
      <div>Footer</div>
    </div>
  );
}

export default Home;