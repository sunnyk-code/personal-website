import React from 'react';

function Home() {
  return (
    <div className="home-hero">
      {/* Dark overlay */}
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>Welcome to My Professional Portfolio</h1>
        <p>
          Hi, I’m [Your Name], a [Your Profession/Role] with a passion for 
          [key skills/areas of expertise]. Explore my work, 
          skills, and experiences as you journey through this site!
        </p>
        <button className="hero-btn" onClick={() => window.location.href = '/resume'}>
          View My Résumé
        </button>
      </div>
    </div>
  );
}

export default Home;
