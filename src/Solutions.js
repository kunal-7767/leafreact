import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Solutions.css';

const Solutions = () => {
  const location = useLocation();

  const navLinks = [
  { path: '/usecase', label: 'UseCase' },
  { path: '/solutions', label: 'Metrics' },
  { path: '/demo', label: 'Demo' },
  { path: '/diseases', label: 'Diseases' }
];

  const isActive = (path) => location.pathname === path;

  // Performance metrics data
  const performanceData = [
    { name: 'Yolov11', accuracy: '99.00%', precision: '99.00%', recall: '94.00%', f1: '72.00%' }
  ];

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
          <h1>Model Performance Overview</h1>
          <p>Advanced computer vision for plant disease detection</p>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="solutions-content">
        <div className="solutions-grid">
          <div className="solutions-card">
            <div className="solutions-header">
              <h2>Model Performance Metrics</h2>
              <p>YOLOv11 demonstrates exceptional accuracy in leaf disease detection</p>
            </div>

            {/* Performance Table */}
            <div className="performance-table-container">
              <h3>📊 Performance Metrics</h3>
              <table className="performance-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Accuracy</th>
                    <th>Precision</th>
                    <th>Recall</th>
                    <th>F1 Score</th>
                  </tr>
                </thead>
                <tbody>
                  {performanceData.map((model, index) => (
                    <tr key={index}>
                      <td>{model.name}</td>
                      <td>{model.accuracy}</td>
                      <td>{model.precision}</td>
                      <td>{model.recall}</td>
                      <td>{model.f1}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Performance Charts */}
            <div className="performance-charts">
              <h3>📈 Performance Curves</h3>
              <div className="charts-grid">
                <div className="chart-item">
                  <h4>Precision Curve</h4>
                  <div className="chart-image">
                    <img 
                      src="/images/BoxP_curve (1).png" 
                      alt="Precision Curve" 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="image-placeholder" style={{display: 'none'}}>
                      <p>Precision Curve Image</p>
                      <small>BoxP_curve.png</small>
                    </div>
                  </div>
                </div>
                
                <div className="chart-item">
                  <h4>Recall Curve</h4>
                  <div className="chart-image">
                    <img 
                      src="/images/BoxR_curve (1).png" 
                      alt="F1 Score Curve" 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="image-placeholder" style={{display: 'none'}}>
                      <p>Recall Curve Image</p>
                      <small>BoxR_curve.png</small>
                    </div>
                  </div>
                </div>
                
                <div className="chart-item">
                  <h4>F1 Score Curve</h4>
                  <div className="chart-image">
                    <img 
                      src="/images/BoxF1_curve (1).png" 
                      alt="Recall Curve" 
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="image-placeholder" style={{display: 'none'}}>
                      <p>f1 Score Curve Image</p>
                      <small>BoxF1_curve.png</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Model Insights */}
            <div className="model-insights">
              <h3>🔍 Model Insights</h3>
              <div className="insights-content">
                <div className="insight-item">
                  <h4>High Accuracy & Precision</h4>
                  <p>99% accuracy and precision indicate excellent disease classification capabilities with minimal false positives.</p>
                </div>
                <div className="insight-item">
                  <h4>Strong Recall</h4>
                  <p>94% recall demonstrates the model's ability to correctly identify most actual disease cases.</p>
                </div>
                <div className="insight-item">
                  <h4>F1 Score Analysis</h4>
                  <p>The 72% F1 score suggests a good balance between precision and recall for practical applications.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;