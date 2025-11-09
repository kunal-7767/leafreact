// Diseases.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Diseases.css';

const Diseases = () => {
  const location = useLocation();

const navLinks = [
  { path: '/usecase', label: 'UseCase' },
  { path: '/solutions', label: 'Metrics' },
  { path: '/demo', label: 'Demo' },
  { path: '/diseases', label: 'Diseases' }
];

  const isActive = (path) => location.pathname === path;

  // Complete diseases data
  const diseasesData = [
    {
  id: 1,
  name: 'Septoria Leaf Spot',
  scientificName: 'Septoria lycopersici',
  description: 'A common fungal disease that causes small, dark spots on lower leaves, leading to yellowing and premature leaf drop.',
  riskLevel: 'High',
  season: 'Warm, Humid Conditions',
  affectedPlants: ['Tomatoes', 'Eggplants', 'Parsley', 'Celery'],
  symptoms: [
    'Small circular brown or gray spots with dark borders',
    'Yellowing around the spots',
    'Lower leaves affected first',
    'Premature leaf drop'
  ],
  prevention: [
    'Rotate crops annually',
    'Avoid overhead watering',
    'Remove plant debris after harvest',
    'Ensure proper spacing for airflow'
  ],
  treatment: 'Remove infected leaves and apply copper-based or chlorothalonil fungicides. Maintain dry foliage and healthy soil conditions.'
}
,
    {
      id: 2,
      name: 'Early Blight',
      scientificName: 'Alternaria solani',
      description: 'A common fungal disease affecting tomatoes and potatoes.',
      riskLevel: 'High',
      season: 'Summer',
      affectedPlants: ['Tomatoes', 'Potatoes', 'Eggplants'],
      symptoms: [
        'Dark spots with concentric rings',
        'Yellowing leaves',
        'Defoliation',
        'Fruit rot'
      ],
      prevention: [
        'Rotate crops yearly',
        'Use disease-free seeds',
        'Space plants properly',
        'Mulch around plants'
      ],
      treatment: 'Apply copper-based fungicides. Remove infected plant debris from garden.'
    },
    {
      id: 3,
      name: 'Leaf Spot',
      scientificName: 'Cercospora species',
      description: 'Fungal disease causing circular spots on leaves.',
      riskLevel: 'Low',
      season: 'Spring, Fall',
      affectedPlants: ['Beets', 'Spinach', 'Ornamentals'],
      symptoms: [
        'Small circular spots on leaves',
        'Spots with dark margins',
        'Leaf yellowing',
        'Premature leaf drop'
      ],
      prevention: [
        'Water at base of plants',
        'Remove infected leaves',
        'Improve air circulation',
        'Avoid working with wet plants'
      ],
      treatment: 'Apply fungicides containing chlorothalonil. Ensure proper plant spacing.'
    },
    {
      id: 4,
      name: 'Root Rot',
      scientificName: 'Phytophthora species',
      description: 'A serious disease affecting plant roots in waterlogged conditions.',
      riskLevel: 'Very High',
      season: 'All seasons',
      affectedPlants: ['Tomatoes', 'Peppers', 'Avocado', 'Citrus'],
      symptoms: [
        'Wilting despite adequate water',
        'Yellowing leaves',
        'Stunted growth',
        'Dark, mushy roots'
      ],
      prevention: [
        'Ensure proper drainage',
        'Avoid overwatering',
        'Use well-draining soil',
        'Plant in raised beds'
      ],
      treatment: 'Improve soil drainage. Apply fungicides containing mefenoxam. Remove severely affected plants.'
    },
    {
      id: 5,
      name: 'Rust',
      scientificName: 'Pucciniales',
      description: 'Fungal disease characterized by orange, yellow, or brown pustules.',
      riskLevel: 'Medium',
      season: 'Spring, Summer',
      affectedPlants: ['Beans', 'Asparagus', 'Roses', 'Hollyhocks'],
      symptoms: [
        'Orange, yellow or brown pustules',
        'Leaf discoloration',
        'Premature leaf drop',
        'Reduced vigor'
      ],
      prevention: [
        'Water early in the day',
        'Remove infected leaves',
        'Space plants adequately',
        'Avoid overhead irrigation'
      ],
      treatment: 'Apply sulfur or copper-based fungicides. Remove and destroy infected plant material.'
    },
    {
      id: 6,
      name: 'Blight',
      scientificName: 'Phytophthora infestans',
      description: 'A devastating disease that can destroy entire crops quickly.',
      riskLevel: 'Very High',
      season: 'Cool, wet weather',
      affectedPlants: ['Tomatoes', 'Potatoes'],
      symptoms: [
        'Dark lesions on leaves and stems',
        'White mold under leaves in humidity',
        'Rapid plant collapse',
        'Fruit rot'
      ],
      prevention: [
        'Use resistant varieties',
        'Avoid overhead watering',
        'Remove volunteer plants',
        'Apply preventive fungicides'
      ],
      treatment: 'Apply fungicides containing chlorothalonil or copper. Destroy infected plants immediately.'
    }
  ];

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'Very High': return '#dc2626';
      case 'High': return '#ea580c';
      case 'Medium': return '#d97706';
      case 'Low': return '#65a30d';
      case 'None': return '#16a34a';
      default: return '#6b7280';
    }
  };

  return (
    <div className="diseases-container">
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
      <div className="diseases-hero">
        <div className="hero-content">
          <h1>Plant Disease</h1>
          <p>Comprehensive guide to {diseasesData.length} common plant diseases detected by our AI system</p>
        </div>
      </div>

      {/* Diseases Grid */}
      <div className="diseases-grid">
        {diseasesData.map((disease) => (
          <div key={disease.id} className="disease-card">
            <div className="disease-header">
              <h2>{disease.name}</h2>
              <div 
                className="risk-badge"
                style={{ backgroundColor: getRiskColor(disease.riskLevel) }}
              >
                {disease.riskLevel} Risk
              </div>
            </div>
            
            <div className="scientific-name">
              {disease.scientificName}
            </div>
            
            <p className="disease-description">{disease.description}</p>

            <div className="disease-details">
              <div className="detail-item">
                <span className="detail-label">Season:</span>
                <span className="detail-value">{disease.season}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Affected Plants:</span>
                <span className="detail-value">{disease.affectedPlants.join(', ')}</span>
              </div>
            </div>

            <div className="symptoms-section">
              <h4>🔍 Common Symptoms</h4>
              <ul>
                {disease.symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            </div>

            <div className="prevention-section">
              <h4>🛡️ Prevention Methods</h4>
              <ul>
                {disease.prevention.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
            </div>

            <div className="treatment-section">
              <h4>💊 Treatment</h4>
              <p>{disease.treatment}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="diseases-stats">
        <div className="stats-container">
          <div className="stat-item">
            <div className="stat-number">{diseasesData.length}</div>
            <div className="stat-label">Diseases Covered</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">95%</div>
            <div className="stat-label">Detection Accuracy</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">50+</div>
            <div className="stat-label">Plant Species</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Monitoring</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Diseases;