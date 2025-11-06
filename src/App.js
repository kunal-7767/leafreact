// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YoloUpload from './YoloUpload';
import Diseases from './Diseases';
import Solutions from './Solutions';
import './LeafDiseaseDetector.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<YoloUpload />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/diseases" element={<Diseases />} />
          {/* Removed: Causes, Prevention, Care routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;