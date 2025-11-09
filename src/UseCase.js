import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './UseCase.css';

const UseCase = () => {
  const location = useLocation();

  const navLinks = [
  { path: '/usecase', label: 'UseCase' },
  { path: '/solutions', label: 'Metrics' },
  { path: '/demo', label: 'Demo' },
  { path: '/diseases', label: 'Diseases' }
];

  const isActive = (path) => location.pathname === path;

  const useCaseData = [
    { category: 'Business Problem', summary: 'Early plant disease detection is challenging, leading to crop loss, reduced yield, and increased manual effort for farmers and agronomists.' },
    { category: 'Solution', summary: 'A web-based AI system that uses YOLO-based object detection to automatically identify leaf diseases from uploaded images, providing visual annotations and actionable insights.' },
      { 
    category: 'Business Outcome', 
    summary: `• Improved crop health\n• Higher agricultural productivity\n• Reduced manual effort\n• Empowered decision-making for farmers and researchers.` 
  },
  { 
    category: 'Technology Stack', 
    summary: `• Flask (web framework)\n• OpenCV (image processing)\n• Ultralytics (YOLO model)\n• Python\n• OS & DateTime libraries.` 
  }
  ];

  return (
    <div className="usecase-container">
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
      <div className="usecase-hero">
        <div className="hero-content">
          <h1>Use Case Overview</h1>
          <p>AI-Powered Plant Disease Detection System</p>
        </div>
      </div>

      <div className="usecase-layout">
  {/* Left Side - Table (now on left) */}
  <div className="table-section">
    <div className="table-container">
      <h2></h2>
      <table className="usecase-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {useCaseData.map((item, index) => (
            <tr key={index}>
              <td className="category-cell">{item.category}</td>
              <td className="summary-cell">{item.summary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  {/* Right Side - Image (now on right) */}
  <div className="image-section">
    <div className="image-container">
      <img 
        src="/images/image.png" 
        alt="Leaf Disease Detection" 
        onError={(e) => {
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'block';
        }}
      />
      <div className="image-placeholder" style={{display: 'none'}}>
        <p>System Architecture Image</p>
        <small>image.png</small>
      </div>
    </div>
    <div className="image-caption">
      <h3>System Overview</h3>
      <p>AI-powered leaf disease detection and analysis workflow</p>
    </div>
  </div>
</div>

           

          </div>
       
  );
};

export default UseCase;