import React from 'react';
// Option 1: Using local SVGs or images 
// (place them in /src/images or /public/icons etc.)
import emailIcon from '../../images/email.webp';
import linkedinIcon from '../../images/linkedin.webp';
import githubIcon from '../../images/github.png';



function Contact() {
  return (
    <section className="section section-gray" id="contact">
      <h2 className="section-title">Get in Touch</h2>
    

      <div className="contact-icons">
        {/* Email */}
        <a 
          href="mailto:apple.sunny.k@gmail.com"
          className="contact-icon"
          target="_blank"
          rel="noreferrer"
        >
          {/* If using images, do this: */}
          <img src={emailIcon} alt="Email" />
          
          {/* If using React Icons, do this instead:
            <FaEnvelope className="icon-svg" />
          */}
          <span>Email</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/shyamanth-kudum/"
          className="contact-icon"
          rel="noreferrer"
        >
          <img src={linkedinIcon} alt="LinkedIn" />
          {/* or <FaLinkedin className="icon-svg" /> */}
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/sunnyk-code"
          className="contact-icon"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="Github" />
          {/* or <FaTwitter className="icon-svg" /> */}
          <span>Github</span>
        </a>
      </div>
    </section>
  );
}

export default Contact;
