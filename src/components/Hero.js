import React from 'react';
import '../css/Hero.css'

const Hero = () => {
  return (
    <section id = "hero">
      <video loop autoPlay muted>
        <source src ='./images/coins.mp4' type="video/mp4"></source>
      </video>
      {/* <picture><img src='./images/hero_large.jpg' alt=''></img></picture> */}
      <header>
       <h1><span>The #1 FREE practice trading website</span></h1>
       <h2><span>Trade for fun. Trade to practice. Trade to compete.</span></h2>
        <span>
          <input placeholder ="Enter Email"></input>
          <a href='/signup'><button>Sign Up</button></a>
        </span>
      </header>

    </section>
  );
};

export default Hero;