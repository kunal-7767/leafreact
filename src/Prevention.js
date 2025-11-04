// Prevention.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Prevention.css';

const Prevention = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/diseases', label: 'Diseases' },
    { path: '/causes', label: 'Causes' },
    { path: '/prevention', label: 'Prevention' },
    { path: '/care', label: 'Care' }
  ];

  const isActive = (path) => location.pathname === path;

  const preventionData = [
    {
      id: 1,
      disease: "Early Blight",
      preventionMethods: [
        "Practice 3-year crop rotation with non-solanaceous crops",
        "Use certified disease-free seeds and transplants",
        "Space plants properly for good air circulation",
        "Water at the base of plants, avoid overhead irrigation",
        "Apply mulch to prevent soil splash onto leaves",
        "Remove and destroy infected plant debris at season end"
      ],
      organicSolutions: [
        "Apply copper-based fungicides preventively",
        "Use baking soda spray (1 tbsp baking soda + 1 tsp oil + gallon of water)",
        "Neem oil applications every 7-14 days",
        "Compost tea sprays to boost plant immunity"
      ],
      timing: "Start prevention measures at transplanting and continue throughout season"
    },
    {
      id: 2,
      disease: "Late Blight",
      preventionMethods: [
        "Plant resistant varieties when available",
        "Use drip irrigation to keep foliage dry",
        "Destroy volunteer potato and tomato plants",
        "Avoid working in wet fields to prevent spread",
        "Apply protective fungicides before disease appears",
        "Harvest and store potatoes in dry, cool conditions"
      ],
      organicSolutions: [
        "Copper fungicide applications every 7-10 days during wet weather",
        "Potassium bicarbonate sprays",
        "Garlic and chili pepper sprays as repellents",
        "Proper sanitation of tools and equipment"
      ],
      timing: "Critical prevention during cool, wet weather periods"
    },
    {
      id: 3,
      disease: "Leaf Miner",
      preventionMethods: [
        "Use floating row covers to exclude adult flies",
        "Remove and destroy mined leaves promptly",
        "Encourage natural predators like parasitic wasps",
        "Practice good weed control around garden areas",
        "Use yellow sticky traps to monitor adult populations",
        "Rotate crops to break pest life cycles"
      ],
      organicSolutions: [
        "Spinosad applications for heavy infestations",
        "Neem oil sprays to disrupt egg laying",
        "Beneficial nematodes for soil-dwelling pupae",
        "Insecticidal soaps for minor infestations"
      ],
      timing: "Start monitoring early spring when adults become active"
    },
    {
      id: 4,
      disease: "Leaf Mold",
      preventionMethods: [
        "Maintain greenhouse humidity below 85%",
        "Provide excellent air circulation with fans",
        "Space plants adequately to reduce crowding",
        "Water plants in the morning to allow leaves to dry",
        "Use resistant tomato varieties in greenhouse settings",
        "Remove lower leaves to improve air movement"
      ],
      organicSolutions: [
        "Baking soda sprays (1 tsp per quart of water)",
        "Milk sprays (1 part milk to 9 parts water)",
        "Proper ventilation and temperature management",
        "Sulfur dust applications in greenhouse"
      ],
      timing: "Essential in greenhouse environments year-round"
    },
    {
      id: 5,
      disease: "Mosaic Virus",
      preventionMethods: [
        "Use virus-free certified seeds and plants",
        "Control aphid populations with insecticidal soaps",
        "Disinfect tools between plants with bleach solution",
        "Wash hands thoroughly before handling plants",
        "Remove and destroy infected plants immediately",
        "Avoid smoking near tobacco-sensitive plants"
      ],
      organicSolutions: [
        "Reflective mulches to deter aphids",
        "Companion planting with repellent herbs",
        "Row covers to exclude insect vectors",
        "Boost plant health with compost and proper nutrition"
      ],
      timing: "Year-round prevention, especially during active growth"
    },
    {
      id: 6,
      disease: "Septoria",
      preventionMethods: [
        "Implement strict crop rotation (3-4 years)",
        "Remove lower leaves up to 12 inches from ground",
        "Use drip irrigation instead of overhead watering",
        "Stake plants to keep foliage off the ground",
        "Clean up all plant debris at end of season",
        "Avoid working with plants when foliage is wet"
      ],
      organicSolutions: [
        "Copper fungicide applications every 7-10 days",
        "Baking soda sprays for early infection",
        "Garlic and onion extract sprays",
        "Proper plant spacing and pruning"
      ],
      timing: "Begin prevention at transplanting and continue through fruiting"
    },
    {
      id: 7,
      disease: "Spider Mites",
      preventionMethods: [
        "Maintain adequate soil moisture during dry periods",
        "Use overhead watering to wash off mites periodically",
        "Encourage predatory mites and insects",
        "Avoid over-fertilizing with nitrogen",
        "Inspect new plants before introducing to garden",
        "Keep garden areas free of dust and debris"
      ],
      organicSolutions: [
        "Strong water sprays to dislodge mites",
        "Neem oil or horticultural oil applications",
        "Insecticidal soaps for direct contact",
        "Release predatory mites (Phytoseiulus persimilis)"
      ],
      timing: "Monitor closely during hot, dry weather conditions"
    },
    {
      id: 8,
      disease: "Yellow Leaf Curl Virus",
      preventionMethods: [
        "Use resistant tomato varieties when available",
        "Control whitefly populations with yellow sticky traps",
        "Use reflective mulches to repel whiteflies",
        "Remove weed hosts from garden perimeter",
        "Screen greenhouse openings to exclude whiteflies",
        "Destroy infected plants to reduce virus sources"
      ],
      organicSolutions: [
        "Neem oil sprays to deter whiteflies",
        "Companion planting with marigolds and basil",
        "Row covers during peak whitefly season",
        "Beneficial insects like ladybugs and lacewings"
      ],
      timing: "Critical prevention during warm seasons with whitefly activity"
    },
    {
      id: 9,
      disease: "General Plant Health",
      preventionMethods: [
        "Test soil annually and amend with organic matter",
        "Practice proper crop rotation schedules",
        "Use companion planting for natural pest control",
        "Maintain consistent watering practices",
        "Provide adequate sunlight and air circulation",
        "Monitor plants regularly for early problem detection"
      ],
      organicSolutions: [
        "Compost and organic fertilizers for soil health",
        "Companion planting with beneficial herbs and flowers",
        "Natural pest repellents like garlic and chrysanthemum",
        "Proper sanitation and garden hygiene"
      ],
      timing: "Year-round maintenance for optimal plant health"
    }
  ];

  return (
    <div className="prevention-container">
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
      <div className="prevention-hero">
        <div className="hero-content">
          <h1>Disease Prevention Guide</h1>
          <p>Proactive strategies and organic solutions to keep your plants healthy and disease-free</p>
        </div>
      </div>

      {/* Prevention Grid */}
      <div className="prevention-grid">
        {preventionData.map((item) => (
          <div key={item.id} className="prevention-card">
            <div className="prevention-header">
              <h2>{item.disease}</h2>
              <div className="timing-badge">
                ⏰ {item.timing}
              </div>
            </div>

            <div className="prevention-methods">
              <h3>🛡️ Prevention Methods</h3>
              <ul>
                {item.preventionMethods.map((method, index) => (
                  <li key={index}>{method}</li>
                ))}
              </ul>
            </div>

            <div className="organic-solutions">
              <h3>🌱 Organic Solutions</h3>
              <ul>
                {item.organicSolutions.map((solution, index) => (
                  <li key={index}>{solution}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Prevention Tips Section */}
      <div className="prevention-tips">
        <div className="tips-container">
          <h2>Essential Prevention Practices</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <div className="tip-icon">🔄</div>
              <h4>Crop Rotation</h4>
              <p>Rotate plant families to break disease cycles and reduce soil-borne pathogens</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">💧</div>
              <h4>Smart Watering</h4>
              <p>Water at soil level, avoid wetting foliage, and water in the morning</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🌿</div>
              <h4>Proper Spacing</h4>
              <p>Adequate plant spacing ensures good air circulation and reduces humidity</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🧹</div>
              <h4>Garden Sanitation</h4>
              <p>Remove plant debris, disinfect tools, and maintain clean growing areas</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🔍</div>
              <h4>Regular Monitoring</h4>
              <p>Inspect plants frequently for early detection of pests and diseases</p>
            </div>
            <div className="tip-card">
              <div className="tip-icon">🌱</div>
              <h4>Soil Health</h4>
              <p>Maintain balanced soil nutrition and organic matter for strong plants</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prevention;