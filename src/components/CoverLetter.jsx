// src/components/CoverLetter.jsx

import React from 'react';

function CoverLetter() {
  return (
    <section className="section" id="cover-letter">
      <h2 className="section-title">Cover Letter</h2>
      <p className="section-subtitle">
        Tailored to a specific job or opportunity. Customize with your own details.
      </p>

      <div style={{ marginTop: '2rem', textAlign: 'left' }}>
        <p>
          January 15, 2025<br />
          <br />
          Company Name<br />
          Attn: Hiring Manager<br />
          1234 Example St.<br />
          City, State ZIP
        </p>

        <p>
          Dear Hiring Manager,
        </p>

        <p>
          I am writing to apply for the [Position Title] at [Company Name]. With
          [X years/experience] in [relevant field/industry], I bring a strong
          commitment to [skill/quality] and a passion for [key focus of the role].
        </p>

        <p>
          I am drawn to [Company Name’s] mission and culture, which aligns 
          with my values and career goals. Thank you for your consideration, 
          and I look forward to the opportunity to discuss how my skills 
          and experience could contribute to your team.
        </p>

        <p>Sincerely,<br />[Your Name]</p>
      </div>
    </section>
  );
}

export default CoverLetter;
