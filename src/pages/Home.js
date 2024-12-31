// src/pages/Home.js
import React, { useState } from 'react';
import './Home.css';
import HRLogin from './HRLogin'; // Import HRLogin component
import CandidateLogin from './CandidateLogin'; // Import CandidateLogin component
import Register from './Register'; // Import Register component

function Home() {
  const [showForm, setShowForm] = useState('');

  const handleFormOpen = (formType) => {
    setShowForm(formType);
  };

  const handleClose = () => {
    setShowForm('');
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1 className="app-title">Welcome to <span className="brand-name">ResumeX</span></h1>
        <p className="hero-subtitle">
          Your AI-powered solution for crafting professional resumes effortlessly.
        </p>
      </header>

      <section className="why-resumex">
        <h2>Why Choose <span className="brand-name">ResumeX?</span></h2>
        <p>
          Transform your job search experience with advanced AI tools and customizable templates.
        </p>
        <p>Stand out and land your dream job faster!</p>
      </section>

      <section className="features">
        <h2>Our Features</h2>
        <ul>
          <li>Easy-to-use interface</li>
          <li>Customizable, industry-specific templates</li>
          <li>AI suggestions tailored to your skills</li>
        </ul>
        <a href="/about" className="call-to-action">Explore More Features</a>
      </section>

      <div className="cta-section">
        <h3>Get Started</h3>
        <div className="login-buttons">
          <button onClick={() => handleFormOpen('hr')} className="login-btn">Login as HR</button>
          <button onClick={() => handleFormOpen('candidate')} className="login-btn">Login as Candidate</button>
        </div>
        <p className="register-link">
          Not registered yet? <span onClick={() => handleFormOpen('register')} className="register-btn">Register Now</span>
        </p>
      </div>

      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close-btn" onClick={handleClose}>&times;</span>
            {showForm === 'hr' && <HRLogin onClose={handleClose} />}
            {showForm === 'candidate' && <CandidateLogin onClose={handleClose} />}
            {showForm === 'register' && <Register onClose={handleClose} />}
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
