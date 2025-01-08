import React from 'react';
import './Header.css'; // Import the CSS file

function Header() {
  return (
    <header>
      <a href="/" className="brand-name">
        <img src="https://www.google.com/imgres?q=resume%20analyzer%20image&imgurl=https%3A%2F%2Fassets.apilayer.com%2Fapis%2Fresume_parser.png&imgrefurl=https%3A%2F%2Fapilayer.com%2Fmarketplace%2Fresume_parser-api&docid=gWI8DLsZ71voLM&tbnid=RF2Mk33ZH3SrYM&vet=12ahUKEwic0urh4NOKAxVl9zgGHbntO-44ChAzegQIRxAA..i&w=512&h=512&hcb=2&ved=2ahUKEwic0urh4NOKAxVl9zgGHbntO-44ChAzegQIRxAA" alt="ResumeX Logo" className="brand-logo" /> {/* Add your image here */}
        ResumeX
      </a>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
