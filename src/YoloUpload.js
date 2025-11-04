import React, { useState } from "react";
import axios from "axios";
import { Link, useLocation } from 'react-router-dom';
import "./LeafDiseaseDetector.css";

function YoloUpload() {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/diseases', label: 'Diseases' },
    { path: '/causes', label: 'Causes' },
    { path: '/prevention', label: 'Prevention' },
    { path: '/care', label: 'Care' }
  ];

  const isActive = (path) => location.pathname === path;

  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [preview, setPreview] = useState(null);

  // ✅ UPDATED: Changed to your deployed Render backend URL
  const API_BASE_URL = "https://leaf-disease-backend-4.onrender.com";

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setError(null);
      setResult(null);
      
      const reader = new FileReader();
      reader.onload = (e) => setPreview(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (endpoint = "/detect") => {
    if (!image) {
      setError("Please select an image first");
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const formData = new FormData();
      formData.append("image", image);
      
      // ✅ UPDATED: Using the deployed backend URL
      const res = await axios.post(`${API_BASE_URL}${endpoint}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
        timeout: 30000,
      });
      
      setResult(res.data);
    } catch (err) {
      setError(err.response?.data?.error || err.message || "Detection failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const getSeverityColor = (confidence) => {
    if (confidence >= 80) return "#dc2626";
    if (confidence >= 60) return "#ea580c";
    if (confidence >= 40) return "#d97706";
    return "#65a30d";
  };

  const getSeverityLevel = (confidence) => {
    if (confidence >= 80) return "High Risk";
    if (confidence >= 60) return "Medium Risk";
    if (confidence >= 40) return "Low Risk";
    return "Very Low Risk";
  };

  return (
    <div className="leaf-detector-container">
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
      <header className="detector-header">
        <div className="header-content">
          <h1 className="header-title">
            <span className="leaf-icon">🌿</span>
            Leaf Disease Detector
          </h1>
          <p className="header-subtitle">
            Advanced AI-powered plant health analysis for precision agriculture
           </p>
           <br></br>

          <p className="header-subtitle">
            IP Registered with the Goverment of India 
           </p>
        </div>
      </header>

      <div className="detector-layout">
        {/* Main Content */}
        <div className="main-content">
          {/* Upload Section */}
          <div className="upload-section">
            <div className="upload-card">
              <div className="upload-header">
                <h2>Upload Leaf Image</h2>
                <p>Supported formats: JPG, PNG, JPEG • Max size: 10MB</p>
              </div>
              
              <div className="upload-area">
                <input 
                  type="file" 
                  id="leaf-upload"
                  accept="image/*" 
                  onChange={handleImageChange}
                  className="upload-input"
                />
                <label htmlFor="leaf-upload" className="upload-label">
                  {preview ? (
                    <div className="image-preview">
                      <img src={preview} alt="Preview" />
                      <div className="preview-overlay">
                        <span className="change-text">Change Image</span>
                      </div>
                    </div>
                  ) : (
                    <div className="upload-placeholder">
                      <div className="upload-icon">📁</div>
                      <p>Click to upload leaf image</p>
                      <span>or drag and drop</span>
                    </div>
                  )}
                </label>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button 
                  onClick={() => handleSubmit("/detect")}
                  disabled={loading || !image}
                  className={`detect-btn primary ${loading ? 'loading' : ''}`}
                >
                  {loading ? (
                    <>
                      <div className="spinner"></div>
                      Analyzing...
                    </>
                  ) : (
                    "🔍 Detect Diseases"
                  )}
                </button>
                
                {/* Note: High confidence endpoint might not exist on deployed backend */}
                <button 
                  onClick={() => handleSubmit("/detect")} // Using same endpoint for now
                  disabled={loading || !image}
                  className="detect-btn secondary"
                >
                  🎯 High Confidence Scan
                </button>
              </div>
            </div>
          </div>

          

          {/* Results Section */}
          {result && (
            <div className="results-section">
              <div className="results-header">
                <h2>Detection Results</h2>
                <div className="results-summary">
                  <span className="detection-count">
                    {result.total_detections || 0} diseases detected
                  </span>
                </div>
              </div>

              {result.detections && result.detections.length > 0 ? (
                <div className="detections-grid">
                  {result.detections.map((detection, index) => {
                    const confidencePercent = detection.confidence_percentage || (detection.confidence * 100);
                    const severityColor = getSeverityColor(confidencePercent);
                    const severityLevel = getSeverityLevel(confidencePercent);
                    
                    return (
                      <div key={index} className="detection-card">
                        <div className="detection-header">
                          <h3 className="disease-name">{detection.class_name || detection.class}</h3>
                          <div 
                            className="severity-badge"
                            style={{ backgroundColor: severityColor }}
                          >
                            {severityLevel}
                          </div>
                        </div>
                        
                        <div className="confidence-meter">
                          <div className="confidence-info">
                            <span>Confidence Level</span>
                            <span className="confidence-value">
                              {confidencePercent.toFixed(1)}%
                            </span>
                          </div>
                          <div className="confidence-bar">
                            <div 
                              className="confidence-fill"
                              style={{ 
                                width: `${confidencePercent}%`,
                                backgroundColor: severityColor
                              }}
                            ></div>
                          </div>
                        </div>

                        <div className="detection-details">
                          <div className="detail-item">
                            <span className="detail-label">Class ID:</span>
                            <span className="detail-value">{detection.class_id}</span>
                          </div>
                          {detection.bbox && (
                            <div className="detail-item">
                              <span className="detail-label">Detection Area:</span>
                              <span className="detail-value">
                                {detection.bbox.map(coord => Math.round(coord)).join(', ')}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="no-detections">
                  <div className="no-detections-icon">✅</div>
                  <h3>No Diseases Detected</h3>
                  <p>Your plant appears to be healthy. No significant disease patterns were identified.</p>
                </div>
              )}
            </div>
          )}
          {/* Legal Notice Box */}
          <div className="legal-notice">
            <div className="legal-header">
              <h3>📜 Copyright & Legal Notice</h3>
            </div>
            <div className="legal-content">
              <p><strong>Copyright Notice</strong></p>
              <p>Leaf Disease Detector is a literary work owned by 
                Symbiosis International Deemed University 
                and officially registered under the Copyright Office, Government of India.</p>
              
              <p><strong>Demo Compilation & Legal Disclaimer</strong></p> 
              <p>This expanded demo compilation has been freshly created 
                solely to showcase the scope and impact of the solution potential.</p>
              
              <p><strong>IMPORTANT:</strong> The underlying disease detector model is provided for
                demonstration and illustrative purposes only. The University and 
                Authors make no warranty as to its accuracy or reliability. 
                Users must NOT rely on the output for any diagnostic, commercial,
                or real-world application.</p>
            </div>
          </div>

          {/* Error Display */}
          {error && (
            <div className="error-alert">
              <div className="error-icon">⚠️</div>
              <div className="error-content">
                <h4>Detection Error</h4>
                <p>{error}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default YoloUpload;