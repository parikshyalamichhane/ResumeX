import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to ResumeX</h1>

      <div className="section">
        <h2>Why Choose ResumeX?</h2>
        <p>ResumeX helps you create professional resumes with ease, ensuring you stand out in the job market.</p>
      </div>

      <div className="section">
        <h2>Features</h2>
        <p>Easy to use, customizable templates, and AI-powered resume suggestions to make your job application process smoother.</p>
      </div>

      <a href="/about" className="call-to-action">Learn More</a>
    </div>
  );
}

export default Home;
