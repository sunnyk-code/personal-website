// src/components/WaveDivider.jsx
import React from 'react';

function WaveDivider({ fillColor = '#ffffff', flip = false }) {
  // flip vertically if needed
  const transform = flip ? 'scale(1, -1)' : '';

  return (
    <svg
      viewBox="0 0 1440 320"
      className="wave-divider"
      style={{ transform }}
      preserveAspectRatio="none"
    >
      <path
        fill={fillColor}
        d="M0,192L80,165.3C160,139,320,85,480,101.3C640,117,800,203,960,213.3C1120,224,1280,160,1360,128L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
      />
    </svg>
  );
}

export default WaveDivider;
