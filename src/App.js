// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import YoloUpload from './YoloUpload';
import Diseases from './Diseases';
import Causes from './Causes';
import Prevention from './Prevention';
import './LeafDiseaseDetector.css';
// In App.js, add the import and route:
import Care from './Care';


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<YoloUpload />} />
          <Route path="/diseases" element={<Diseases />} />
          <Route path="/causes" element={<Causes />} />
          <Route path="/prevention" element={<Prevention />} />
          <Route path="/care" element={<Care />} />
          <Route path="/care" element={<div>Care Page Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;