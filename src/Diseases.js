// Diseases.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Diseases.css';

const Diseases = () => {
  const location = useLocation();


  const navLinks = [
    { path: '/solutions', label: 'Solutions' },
    { path: '/', label: 'Demo' },
    { path: '/diseases', label: 'Diseases' }
  ];

  const isActive = (path) => location.pathname === path;

  const diseasesData = [
    {
      id: 1,
      name: "Early Blight",
      scientificName: "Alternaria solani",
      description: "A common fungal disease that affects tomatoes, potatoes, and other plants, characterized by target-like spots on leaves.",
      symptoms: [
        "Dark brown concentric rings on leaves",
        "Yellow halos around spots",
        "Lower leaves affected first",
        "Stem cankers and fruit lesions"
      ],
      prevention: [
        "Rotate crops every 2-3 years",
        "Use certified disease-free seeds",
        "Avoid overhead watering",
        "Remove infected plant debris"
      ],
      treatment: "Apply fungicides containing chlorothalonil or copper-based products early in season",
      riskLevel: "High",
      season: "Warm, humid conditions",
      affectedPlants: ["Tomato", "Potato", "Eggplant"]
    },
    {
      id: 2,
      name: "Late Blight",
      scientificName: "Phytophthora infestans",
      description: "The infamous disease that caused the Irish Potato Famine, rapidly destroying entire crops in favorable conditions.",
      symptoms: [
        "Water-soaked gray-green spots",
        "White fuzzy growth undersides",
        "Rapid plant collapse",
        "Dark, firm rot on fruits/tubers"
      ],
      prevention: [
        "Use resistant varieties",
        "Ensure good air circulation",
        "Avoid overhead irrigation",
        "Destroy infected plants immediately"
      ],
      treatment: "Apply systemic fungicides at first sign of disease",
      riskLevel: "Very High",
      season: "Cool, wet weather",
      affectedPlants: ["Potato", "Tomato"]
    },
    {
      id: 3,
      name: "Leaf Miner",
      scientificName: "Liriomyza spp.",
      description: "Insect larvae that tunnel through leaves, creating winding trails or blotches while feeding on plant tissue.",
      symptoms: [
        "Winding white trails on leaves",
        "Blotchy mined areas",
        "Reduced photosynthesis",
        "Leaf drop in severe cases"
      ],
      prevention: [
        "Use floating row covers",
        "Remove infected leaves promptly",
        "Encourage natural predators",
        "Practice crop rotation"
      ],
      treatment: "Insecticidal soaps or spinosad for heavy infestations",
      riskLevel: "Medium",
      season: "Spring through Fall",
      affectedPlants: ["Tomato", "Bean", "Spinach", "Lettuce"]
    },
    {
      id: 4,
      name: "Leaf Mold",
      scientificName: "Fulvia fulva",
      description: "A fungal disease primarily affecting greenhouse tomatoes, thriving in high humidity conditions.",
      symptoms: [
        "Pale green or yellow spots upper surface",
        "Velvety olive-green mold undersides",
        "Leaves curl and die",
        "Reduced fruit production"
      ],
      prevention: [
        "Maintain humidity below 85%",
        "Provide good air circulation",
        "Space plants adequately",
        "Use resistant varieties"
      ],
      treatment: "Apply fungicides containing chlorothalonil or mancozeb",
      riskLevel: "Medium",
      season: "High humidity conditions",
      affectedPlants: ["Tomato", "Occasionally other nightshades"]
    },
    {
      id: 5,
      name: "Mosaic Virus",
      scientificName: "Tobacco Mosaic Virus",
      description: "A viral disease causing mottled appearance on leaves, stunted growth, and reduced yields.",
      symptoms: [
        "Light and dark green mosaic pattern",
        "Leaf distortion and curling",
        "Stunted plant growth",
        "Reduced fruit size and quality"
      ],
      prevention: [
        "Use virus-free seeds",
        "Control aphid populations",
        "Disinfect tools regularly",
        "Remove infected plants"
      ],
      treatment: "No cure - remove and destroy infected plants",
      riskLevel: "High",
      season: "Throughout growing season",
      affectedPlants: ["Tomato", "Tobacco", "Pepper", "Cucumber"]
    },
    {
      id: 6,
      name: "Septoria",
      scientificName: "Septoria lycopersici",
      description: "A common fungal disease creating numerous small spots on leaves, potentially causing severe defoliation.",
      symptoms: [
        "Small circular spots with dark borders",
        "Yellow halos around spots",
        "Tiny black fruiting bodies in centers",
        "Lower leaves affected first"
      ],
      prevention: [
        "Rotate crops annually",
        "Avoid working with wet plants",
        "Remove lower leaves early",
        "Use drip irrigation"
      ],
      treatment: "Copper-based fungicides or chlorothalonil applications",
      riskLevel: "Medium",
      season: "Warm, wet weather",
      affectedPlants: ["Tomato", "Eggplant"]
    },
    {
      id: 7,
      name: "Spider Mites",
      scientificName: "Tetranychus urticae",
      description: "Tiny arachnids that feed on plant sap, causing stippling and webbing on leaves under hot, dry conditions.",
      symptoms: [
        "Fine yellow stippling on leaves",
        "Fine webbing on undersides",
        "Leaves turn bronze and drop",
        "Reduced plant vigor"
      ],
      prevention: [
        "Maintain adequate moisture",
        "Encourage predatory mites",
        "Regularly hose plants",
        "Avoid over-fertilizing"
      ],
      treatment: "Miticides, insecticidal soaps, or horticultural oils",
      riskLevel: "Medium",
      season: "Hot, dry conditions",
      affectedPlants: ["Many vegetables", "Ornamentals", "Fruits"]
    },
    {
      id: 8,
      name: "Yellow Leaf Curl Virus",
      scientificName: "Tomato yellow leaf curl virus",
      description: "A viral disease transmitted by whiteflies, causing severe stunting and yield loss in tomatoes.",
      symptoms: [
        "Upward curling of leaves",
        "Yellowing of leaf margins",
        "Severe stunting of plants",
        "Reduced fruit production"
      ],
      prevention: [
        "Use resistant varieties",
        "Control whitefly populations",
        "Use reflective mulches",
        "Remove infected plants"
      ],
      treatment: "No cure - focus on prevention and whitefly control",
      riskLevel: "Very High",
      season: "Warm seasons with whitefly activity",
      affectedPlants: ["Tomato", "Pepper", "Bean"]
    },
    {
      id: 9,
      name: "Healthy",
      scientificName: "Optimal Plant Condition",
      description: "Plants showing no signs of disease or pest damage, with vigorous growth and proper development.",
      symptoms: [
        "Uniform green coloration",
        "Strong, upright growth",
        "Proper leaf development",
        "Abundant fruit production"
      ],
      prevention: [
        "Regular monitoring and inspection",
        "Proper watering and nutrition",
        "Good air circulation",
        "Crop rotation practices"
      ],
      treatment: "Maintain current care practices",
      riskLevel: "None",
      season: "All seasons with proper care",
      affectedPlants: ["All properly maintained plants"]
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

        <Link to="/" className="btn-primary">
          Detect Disease
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="diseases-hero">
        <div className="hero-content">
          <h1>Plant Disease Encyclopedia</h1>
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