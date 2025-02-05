import React from 'react';
import './Work.css';
import pltr from '../../images/pltrlogo.png';
import c1 from '../../images/c1logo.png';
import jd from '../../images/jdlogo.png'
import poker from '../../images/poker.png';
import binvision from '../../images/binvision.png';
import emade from '../../images/emade.png';
import meta from '../../images/meta.png';
import WaveDivider from './WaveDivider';

function Work() {
  return (
    <section className="work-section" id="work">
      <h2 className="work-title">My Work</h2>
      <p className="work-subtitle">
        Below are cards showcasing my professional experience and personal projects.
        Hover over each card to see more details.
      </p>

      {/* EXPERIENCES */}
      <h3 className="section-header">Professional Experience</h3>
      <div className="card-grid">
      <div className="flip-card">
          <div className="flip-card-inner">
            {/* Front of card */}
            <div className="flip-card-front">
              {/* Replace src with a relevant Palantir image/logo if desired */}
              <img
                src={meta}
                className="card-image"
              />
              <h3>Meta</h3>
              <p>May 2025 - Aug 2025</p>
              <p>Incoming Software Engineer Intern</p>
            </div>
            {/* Back of card */}
            <div className="flip-card-back">
              <ul>
                
              </ul>
            </div>
          </div>
        </div>
        
        {/* Palantir */}
        <div className="flip-card">
          <div className="flip-card-inner">
            {/* Front of card */}
            <div className="flip-card-front">
              {/* Replace src with a relevant Palantir image/logo if desired */}
              <img
                src={pltr}
                className="card-image"
              />
              <h3>Palantir Technologies</h3>
              <p>Sept 2024 - Dec 2024</p>
              <p>Software Engineer Intern</p>
            </div>
            {/* Back of card */}
            <div className="flip-card-back">
              <ul>
                <li>
                  Engineered a computer vision system in C++ for automotive seat models, 
                  cutting manual inspection by 30%.
                </li>
                <li>
                  Integrated vision system into Palantir Foundry (Java & TypeScript) for 
                  5+ companies.
                </li>
                <li>
                  Reduced procurement costs by 15% with a Python & Apache Spark system 
                  analyzing supplier pricing.
                </li>
                <li>
                  Developed supply chain anomaly detection (Go, Kafka, Kubernetes) 
                  reducing detection latency by 40%.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Capital One */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={c1}
                className="card-image"
              />
              <h3>Capital One</h3>
              <p>May 2024 - Aug 2024</p>
              <p>Software Engineer Intern</p>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>
                  Created software used by 5000+ devs to standardize Capital One 
                  enterprise requirements.
                </li>
                <li>
                  Developed text analysis microservices (Python NLP & LLM, C++ real-time).
                </li>
                <li>
                  Expanded the Architecture Catalog API in Golang for text 
                  evaluation/correction.
                </li>
                <li>
                  Automated compliance checks using Go, AWS Batch, SQS, RDS, & Lambda.
                </li>
              </ul>
            </div>
          </div>
        </div>

       
      </div>

      {/* PROJECTS */}
      <h3 className="section-header">Personal Projects</h3>
      <div className="card-grid">
        {/* Concurrent Poker Simulation */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={poker}
                className="card-image"
              />
              <h3>Concurrent Poker Simulation</h3>
              <p>Go, Computer Vision, AWS, JavaScript</p>
              <p>Dec 2023 - May 2024</p>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>
                  Parallelized Monte Carlo poker simulations across 50 goroutines 
                  in Go.
                </li>
                <li>
                  Deployed AWS EC2 instances with auto-scaling & Lambda for resource 
                  management.
                </li>
                <li>
                  Engineered Firebase backend (Firestore/Auth + D3.js for analytics).
                </li>
                <li>
                  Built a React Native app with card-recognition CV & REST API backend.
                </li>
              </ul>
              {/* Add link at the bottom, for example */}
              <p style={{ marginTop: '1rem' }}>
                <a 
                  href="https://github.com/sunnyk-code/PokerEngine"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#00ffcc', textDecoration: 'underline' }}
                >
                  View the Poker Engine Repo
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* BinVision */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={binvision}
                className="card-image"
              />
              <h3>BinVision</h3>
              <p>React.js, Express.js, Flask, Firebase, CV</p>
              <p>Oct 2023</p>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>
                  1st place at Hack Georgia Tech & research grant for 
                  sustainability/recycling impact.
                </li>
                <li>
                  Developed & hosted ResNet34 CV model (90% accuracy) on AWS EC2.
                </li>
                <li>
                  Created a full-stack React.js app with Firebase for real-time 
                  campus trash analytics.
                </li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://devpost.com/software/binvision"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#00ffcc', textDecoration: 'underline' }}
                >
                  See BinVision on Devpost
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Google & Georgia Tech Research */}
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img
                src={emade}
                className="card-image"
              />
              <h3>Georgia Tech Research</h3>
              <p>C++, CUDA, ML, Quantitative Finance</p>
              <p>Dec 2023 - Present</p>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>
                  Working on Google-sponsored project using Multi-Objective 
                  Genetic Programming (C++).
                </li>
                <li>
                  Predict mid-point price for HFT markets using limit order 
                  book data.
                </li>
                <li>
                  Improved algorithm efficiency by 30% leveraging GPU/CUDA 
                  & Supercomputers.
                </li>
              </ul>
              <p style={{ marginTop: '1rem' }}>
                <a
                  href="https://github.gatech.edu/emade/emade"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#00ffcc', textDecoration: 'underline' }}
                >
                  Check out the Research Repo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
