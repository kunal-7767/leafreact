// Causes.js
import React from 'react';
import './Causes.css';

const Causes = () => {
  const causesData = [
    {
      id: 1,
      disease: "Early Blight",
      causes: [
        "Fungus Alternaria solani surviving in plant debris",
        "Warm temperatures (24-29°C) with high humidity",
        "Poor air circulation around plants",
        "Overhead watering causing leaf wetness",
        "Infected seeds or transplants"
      ],
      contributingFactors: [
        "Crop monoculture practices",
        "Poor soil drainage",
        "Lack of crop rotation",
        "Weakened plant immunity"
      ],
      preventionTips: [
        "Practice 3-year crop rotation",
        "Use drip irrigation instead of overhead",
        "Remove and destroy infected plant debris",
        "Apply mulch to prevent soil splash"
      ]
    },
    {
      id: 2,
      disease: "Late Blight",
      causes: [
        "Phytophthora infestans fungus spores",
        "Cool, wet weather conditions (15-21°C)",
        "High humidity (>90%) for extended periods",
        "Infected seed potatoes or tomato transplants",
        "Wind-blown spores from nearby infected fields"
      ],
      contributingFactors: [
        "Dense planting reducing air flow",
        "Poor drainage in fields",
        "Frequent rainfall or heavy dew",
        "Temperature fluctuations"
      ],
      preventionTips: [
        "Use certified disease-free seeds",
        "Plant resistant varieties",
        "Ensure proper plant spacing",
        "Apply protective fungicides before infection"
      ]
    },
    {
      id: 3,
      disease: "Leaf Miner",
      causes: [
        "Larvae of small flies (Liriomyza species)",
        "Adult flies laying eggs in leaf tissue",
        "Larvae tunneling through leaf layers",
        "Overwintering in soil or plant debris",
        "Continuous cropping without break"
      ],
      contributingFactors: [
        "Lack of natural predators",
        "Warm temperatures accelerating life cycle",
        "Weed hosts in surrounding areas",
        "Poor garden sanitation"
      ],
      preventionTips: [
        "Use floating row covers",
        "Encourage beneficial insects",
        "Remove and destroy infected leaves",
        "Practice good weed control"
      ]
    },
    {
      id: 4,
      disease: "Leaf Mold",
      causes: [
        "Fungus Fulvia fulva (Cladosporium fulvum)",
        "High humidity environments (>85%)",
        "Poor ventilation in greenhouses",
        "Leaf wetness for extended periods",
        "Moderate temperatures (21-24°C)"
      ],
      contributingFactors: [
        "Overcrowded planting",
        "Inadequate air circulation",
        "Watering late in the day",
        "Poor greenhouse management"
      ],
      preventionTips: [
        "Maintain humidity below 85%",
        "Improve air circulation with fans",
        "Water plants in the morning",
        "Use resistant tomato varieties"
      ]
    },
    {
      id: 5,
      disease: "Mosaic Virus",
      causes: [
        "Tobacco Mosaic Virus (TMV) infection",
        "Mechanical transmission through tools",
        "Aphid vectors spreading the virus",
        "Infected seeds or plant material",
        "Contaminated soil or containers"
      ],
      contributingFactors: [
        "Smoking near plants (TMV)",
        "Using contaminated gardening tools",
        "Poor hand hygiene when handling plants",
        "Lack of aphid control"
      ],
      preventionTips: [
        "Wash hands before handling plants",
        "Disinfect tools regularly",
        "Control aphid populations",
        "Use virus-free certified seeds"
      ]
    },
    {
      id: 6,
      disease: "Septoria",
      causes: [
        "Fungus Septoria lycopersici",
        "Splashing water spreading spores",
        "Infected plant debris in soil",
        "Warm, wet weather conditions",
        "Working with plants when wet"
      ],
      contributingFactors: [
        "Overhead irrigation systems",
        "Poor garden cleanup",
        "Dense foliage preventing drying",
        "Wound sites on plants"
      ],
      preventionTips: [
        "Use drip irrigation",
        "Remove lower leaves early",
        "Practice crop rotation",
        "Avoid working with wet plants"
      ]
    },
    {
      id: 7,
      disease: "Spider Mites",
      causes: [
        "Tetranychus urticae infestations",
        "Hot, dry conditions favoring reproduction",
        "Dusty conditions on leaf surfaces",
        "Overuse of pesticides killing natural predators",
        "Introduction from infected plants"
      ],
      contributingFactors: [
        "Water stress in plants",
        "Over-fertilization with nitrogen",
        "Lack of natural enemies",
        "Poor plant vigor"
      ],
      preventionTips: [
        "Maintain adequate soil moisture",
        "Use water sprays to dislodge mites",
        "Encourage predatory insects",
        "Monitor plants regularly"
      ]
    },
    {
      id: 8,
      disease: "Yellow Leaf Curl Virus",
      causes: [
        "Tomato yellow leaf curl virus (TYLCV)",
        "Whitefly (Bemisia tabaci) transmission",
        "Infected transplants or cuttings",
        "Weed hosts like nightshade family",
        "Global trade of infected plant material"
      ],
      contributingFactors: [
        "High whitefly populations",
        "Warm temperatures favoring whiteflies",
        "Continuous tomato cultivation",
        "Lack of resistant varieties"
      ],
      preventionTips: [
        "Use whitefly-resistant varieties",
        "Install yellow sticky traps",
        "Remove weed hosts",
        "Use reflective mulches"
      ]
    },
    {
      id: 9,
      disease: "Healthy Plants",
      causes: [
        "Proper growing conditions maintained",
        "Adequate nutrition and watering",
        "Good air circulation and spacing",
        "Regular monitoring and early intervention",
        "Balanced ecosystem with natural predators"
      ],
      contributingFactors: [
        "Consistent care practices",
        "Optimal environmental conditions",
        "Strong plant genetics",
        "Integrated pest management"
      ],
      preventionTips: [
        "Maintain consistent care routine",
        "Regular soil testing and amendment",
        "Implement companion planting",
        "Practice good garden hygiene"
      ]
    }
  ];

  return (
    <div className="causes-container">
      {/* Navigation */}
      <nav className="nav-header">
        <div className="logo">
          <div className="leaf-logo">🌿</div>
          <span className="logo-text">LeafCare</span>
        </div>
        
        <div className="nav-links">
          <a href="/" className="nav-link">Home</a>
          <a href="/diseases" className="nav-link">Diseases</a>
          <a href="#" className="nav-link active">Causes</a>
          <a href="#" className="nav-link">Prevention</a>
          <a href="#" className="nav-link">Care</a>
        </div>

        <a href="/" className="btn-primary">
          Detect Disease
        </a>
      </nav>

      {/* Hero Section */}
      <div className="causes-hero">
        <div className="hero-content">
          <h1>Disease Causes & Contributing Factors</h1>
          <p>Understanding the root causes of plant diseases for better prevention and management</p>
        </div>
      </div>

      {/* Causes Grid */}
      <div className="causes-grid">
        {causesData.map((item) => (
          <div key={item.id} className="cause-card">
            <div className="cause-header">
              <h2>{item.disease}</h2>
              <div className={`status-indicator ${item.disease === 'Healthy Plants' ? 'healthy' : 'diseased'}`}>
                {item.disease === 'Healthy Plants' ? '✅ Healthy' : '🦠 Diseased'}
              </div>
            </div>

            <div className="causes-section">
              <h3>🎯 Primary Causes</h3>
              <ul>
                {item.causes.map((cause, index) => (
                  <li key={index}>{cause}</li>
                ))}
              </ul>
            </div>

            <div className="factors-section">
              <h3>📈 Contributing Factors</h3>
              <ul>
                {item.contributingFactors.map((factor, index) => (
                  <li key={index}>{factor}</li>
                ))}
              </ul>
            </div>

            <div className="prevention-section">
              <h3>🛡️ Prevention Strategies</h3>
              <ul>
                {item.preventionTips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Key Insights Section */}
      <div className="insights-section">
        <div className="insights-container">
          <h2>Key Insights for Disease Prevention</h2>
          <div className="insights-grid">
            <div className="insight-card">
              <div className="insight-icon">💧</div>
              <h4>Water Management</h4>
              <p>Proper watering techniques prevent many fungal diseases by reducing leaf wetness duration</p>
            </div>
            <div className="insight-card">
              <div className="insight-icon">🌱</div>
              <h4>Soil Health</h4>
              <p>Healthy soil with good drainage and proper nutrients supports strong plant immunity</p>
            </div>
            <div className="insight-card">
              <div className="insight-icon">🔄</div>
              <h4>Crop Rotation</h4>
              <p>Breaking disease cycles through rotation reduces pathogen buildup in soil</p>
            </div>
            <div className="insight-card">
              <div className="insight-icon">🐞</div>
              <h4>Biological Control</h4>
              <p>Encouraging beneficial insects helps control pest populations naturally</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Causes;