import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Resume from './components/Resume';
import CoverLetter from './components/CoverLetter';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      
      <Hero />
      <About />
      <Work />
      <Resume />
      <Contact />

      <Footer />
    </>
  );
}

export default App;
