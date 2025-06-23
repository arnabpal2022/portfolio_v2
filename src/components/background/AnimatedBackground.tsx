"use client";

import React from 'react';
import './animated-background.css';

const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-background">
      {/* Floating orbs */}
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>
      <div className="orb orb-3"></div>
      <div className="orb orb-4"></div>
      <div className="orb orb-5"></div>
      
      {/* Grid pattern */}
      <div className="grid-pattern"></div>
      
      {/* Gradient overlay */}
      <div className="gradient-overlay"></div>
      
      {/* Particle system */}
      <div className="particles">
        {Array.from({ length: 50 }, (_, i) => (
          <div key={i} className={`particle particle-${(i % 3) + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedBackground;