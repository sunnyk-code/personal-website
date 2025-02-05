import React from 'react';
import pfp from '../../images/pfp.jpeg';
function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Shyamanth Kudum</h1>
        <p className="hero-subtitle">
          Hi! I’m Sunny Kudum, a 3rd year college student at Georgia Tech majoring in Computer Science.
        </p>
        <div className="hero-buttons">
            <a href="#contact" className='hero-button'>Work With Me</a>
            <a href="#work" className="hero-button">See My Work</a>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={pfp}
        />
      </div>
    </section>
  );
}

export default Hero;
