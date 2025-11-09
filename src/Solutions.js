import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Solutions.css';

const Solutions = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/solutions', label: 'UseCase' },
    { path: '/', label: 'Demo' },
    { path: '/diseases', label: 'Diseases' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="solutions-container">
      {/* Navigation */}
      <nav className="nav-header">
        <Link to="/" className="logo">
          <div className="leaf-logo">🌿</div>
          <span className="logo-text">LeafCare</span>
        </Link>
        
        <div className="nav-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <div className="solutions-hero">
        <div className="hero-content">
          <h1>UseCase Overview</h1>
          <p></p>
        </div>
      </div>

      {/* Solutions Content */}
      <div className="solutions-content">
        <div className="solutions-grid">
          <div className="solutions-card">
            <div className="solutions-header">
              <h2>Solutions Framework</h2>
              
            </div>

            <div className="solutions-methods">
              <h3>🛡️ Comprehensive Plant Health Solutions</h3>
              
              <div className="content-placeholder">
                <p><strong>Write your solutions content here:</strong></p>
                <p>• Integrated pest management strategies</p>
                <p>• Soil health improvement techniques</p>
                <p>• Preventive care approaches</p>
                <p>• Treatment methodologies</p>
                <p>• Long-term plant health maintenance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;