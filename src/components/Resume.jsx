import React from 'react';
import WaveDivider from './WaveDivider';

function Resume() {
  return (
  
    <section className="section section-gray" id="resume">
      <h2 className="section-title">Résumé</h2>
      <p className="section-content">
        Here is a summary of my professional background and skills. 
        Download my full résumé 
        <a href="../../images/ShyamanthKudumResume.pdf" download style={{ color: '#fff', textDecoration: 'underline', margin: '0 5px' }}>
          here
        </a>
        or read the highlights below:
      </p>
      <div className="resume-preview">
        <iframe 
          src="../../images/ShyamanthKudumResume.pdf" 
          width="100%" 
          height="900px" 
          style={{ border: 'none' }}
          title="Resume Preview"
        ></iframe>
      </div>
    </section>
    

  );
}

export default Resume;