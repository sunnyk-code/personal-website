import React from 'react';

function About() {
  return (
    <section className="section" id="about">
      <h2 className="section-title">About Me</h2>

      {/* 1) Curved rectangle around the text */}
      <div className="about-content-box">
        <p className="about-text">
        Hi, I’m Sunny Kudum, a computer science student at Georgia Tech, 
        on track to graduate with both my Bachelor’s and Master’s degrees 
        by May 2026. I’m passionate about developing innovative solutions 
        that bridge cutting-edge technology and real-world applications. 
        Whether I’m tackling challenging coding projects, exploring the 
        latest breakthroughs in AI, or brainstorming ways to improve user experiences, 
        I love the thrill of turning creative ideas into tangible results. 
        Outside the classroom, I’ve been involved in hackathons, student tech organizations,
         and research projects that push my problem-solving skills to the limit. 
         When I need a break from the screen, I enjoy playing sports, traveling, 
         and hanging out with friends. As I continue to grow both personally and professionally, 
         I’m eager to collaborate with others who share my curiosity and enthusiasm for 
         building a more connected, tech-driven future.


        </p>
      </div>

     
    </section>
  );
}

export default About;
