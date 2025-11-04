// Care.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Care.css';

const Care = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/diseases', label: 'Diseases' },
    { path: '/causes', label: 'Causes' },
    { path: '/prevention', label: 'Prevention' },
    { path: '/care', label: 'Care' }
  ];

  const isActive = (path) => location.pathname === path;

  const careData = [
    {
      id: 1,
      category: "Watering Care",
      icon: "💧",
      tips: [
        "Water plants in the morning to allow leaves to dry during the day",
        "Use drip irrigation or water at soil level to avoid wetting foliage",
        "Check soil moisture before watering - stick finger 2 inches deep",
        "Water deeply but infrequently to encourage strong root growth",
        "Adjust watering frequency based on season and weather conditions",
        "Use room temperature water to avoid shocking plant roots"
      ],
      frequency: "Daily monitoring, adjust based on plant needs"
    },
    {
      id: 2,
      category: "Nutrition & Fertilization",
      icon: "🌱",
      tips: [
        "Test soil every 2-3 years to determine nutrient needs",
        "Use balanced organic fertilizers during growing season",
        "Apply compost or well-rotted manure in spring and fall",
        "Avoid over-fertilizing which can burn roots and leaves",
        "Use foliar sprays for quick nutrient absorption",
        "Mulch around plants to conserve moisture and add nutrients"
      ],
      frequency: "Seasonal - Spring and Fall for major applications"
    },
    {
      id: 3,
      category: "Pruning & Maintenance",
      icon: "✂️",
      tips: [
        "Remove dead, damaged, or diseased leaves regularly",
        "Prune for air circulation and light penetration",
        "Disinfect pruning tools between plants to prevent disease spread",
        "Pinch back growing tips to encourage bushier growth",
        "Remove lower leaves that touch the soil to prevent disease",
        "Thin crowded areas to improve air flow"
      ],
      frequency: "Weekly inspection, major pruning seasonally"
    },
    {
      id: 4,
      category: "Pest Monitoring",
      icon: "🔍",
      tips: [
        "Inspect leaves top and bottom weekly for early pest detection",
        "Look for signs like holes, spots, discoloration, or webbing",
        "Use yellow sticky traps to monitor flying insects",
        "Encourage beneficial insects like ladybugs and lacewings",
        "Remove pests manually when populations are small",
        "Keep garden clean to eliminate pest hiding places"
      ],
      frequency: "Weekly detailed inspection"
    },
    {
      id: 5,
      category: "Seasonal Care",
      icon: "🌞",
      tips: [
        "Spring: Prepare soil, plant, and start regular monitoring",
        "Summer: Increase watering, watch for heat stress and pests",
        "Fall: Clean up debris, apply mulch, prepare for winter",
        "Winter: Protect sensitive plants, plan for next season",
        "Adjust care based on temperature and daylight changes",
        "Rotate crops annually to prevent soil depletion"
      ],
      frequency: "Seasonal adjustments"
    },
    {
      id: 6,
      category: "Soil Health",
      icon: "🪴",
      tips: [
        "Maintain soil pH between 6.0-7.0 for most plants",
        "Add organic matter regularly to improve soil structure",
        "Use cover crops to protect and enrich soil during off-season",
        "Avoid compacting soil around plant roots",
        "Test drainage and amend soil if waterlogged",
        "Rotate planting locations to prevent disease buildup"
      ],
      frequency: "Seasonal maintenance and testing"
    }
  ];

  const quickCareChecklist = [
    { task: "Check soil moisture", frequency: "Daily", icon: "👆" },
    { task: "Inspect leaves for pests/disease", frequency: "2-3 times weekly", icon: "🔍" },
    { task: "Remove dead/damaged leaves", frequency: "Weekly", icon: "🍂" },
    { task: "Water thoroughly", frequency: "As needed", icon: "💧" },
    { task: "Fertilize", frequency: "Monthly during growth", icon: "🌱" },
    { task: "Prune and tidy", frequency: "Bi-weekly", icon: "✂️" }
  ];

  return (
    <div className="care-container">
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
      <div className="care-hero">
        <div className="hero-content">
          <h1>Plant Care Guide</h1>
          <p>Essential care practices to maintain healthy, vibrant leaves and prevent diseases</p>
        </div>
      </div>

      {/* Quick Care Checklist */}
      <div className="checklist-section">
        <div className="checklist-container">
          <h2>Quick Care Checklist</h2>
          <p>Regular maintenance tasks for optimal leaf health</p>
          <div className="checklist-grid">
            {quickCareChecklist.map((item, index) => (
              <div key={index} className="checklist-item">
                <div className="checklist-icon">{item.icon}</div>
                <div className="checklist-content">
                  <h4>{item.task}</h4>
                  <span className="frequency">{item.frequency}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Detailed Care Guide */}
      <div className="care-grid">
        {careData.map((category) => (
          <div key={category.id} className="care-card">
            <div className="care-header">
              <div className="category-icon">{category.icon}</div>
              <h2>{category.category}</h2>
              <div className="frequency-badge">
                ⏰ {category.frequency}
              </div>
            </div>

            <div className="care-tips">
              <h3>Essential Tips</h3>
              <ul>
                {category.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Monthly Care Guide */}
      <div className="monthly-guide">
        <div className="guide-container">
          <h2>Monthly Care Calendar</h2>
          <div className="calendar-grid">
            <div className="month-card">
              <h4>Spring 🌸</h4>
              <ul>
                <li>Prepare soil and plant new crops</li>
                <li>Start regular pest monitoring</li>
                <li>Apply balanced fertilizer</li>
                <li>Install supports for climbing plants</li>
              </ul>
            </div>
            <div className="month-card">
              <h4>Summer ☀️</h4>
              <ul>
                <li>Increase watering frequency</li>
                <li>Watch for heat stress signs</li>
                <li>Control pests and diseases</li>
                <li>Harvest regularly</li>
              </ul>
            </div>
            <div className="month-card">
              <h4>Fall 🍂</h4>
              <ul>
                <li>Clean up plant debris</li>
                <li>Apply winter mulch</li>
                <li>Test and amend soil</li>
                <li>Plan next season's garden</li>
              </ul>
            </div>
            <div className="month-card">
              <h4>Winter ❄️</h4>
              <ul>
                <li>Protect sensitive plants</li>
                <li>Maintain indoor plants</li>
                <li>Order seeds and supplies</li>
                <li>Review garden journal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Care Tips */}
      <div className="emergency-care">
        <div className="emergency-container">
          <h2>Emergency Care Signs</h2>
          <div className="emergency-grid">
            <div className="emergency-item">
              <div className="warning-icon">🚨</div>
              <h4>Yellowing Leaves</h4>
              <p>Check watering, nutrition, or possible overwatering</p>
            </div>
            <div className="emergency-item">
              <div className="warning-icon">🚨</div>
              <h4>Brown Spots</h4>
              <p>Could indicate fungal disease or sunburn</p>
            </div>
            <div className="emergency-item">
              <div className="warning-icon">🚨</div>
              <h4>Wilting</h4>
              <p>Check for under-watering, root rot, or pests</p>
            </div>
            <div className="emergency-item">
              <div className="warning-icon">🚨</div>
              <h4>Holes in Leaves</h4>
              <p>Look for caterpillars, beetles, or other pests</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Care;