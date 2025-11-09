import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UseCase from './UseCase';
import Solutions from './Solutions';
import YoloUpload from './YoloUpload'; // Your demo component
import Diseases from './Diseases';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect root to UseCase */}
          <Route path="/" element={<Navigate to="/usecase" replace />} />
          <Route path="/usecase" element={<UseCase />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/demo" element={<YoloUpload />} />
          <Route path="/diseases" element={<Diseases />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;