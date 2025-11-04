// Navigation.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Leaf } from 'lucide-react';

export const Navigation = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/diseases', label: 'Diseases' },
    { path: '/causes', label: 'Causes' },
    { path: '/prevention', label: 'Prevention' },
    { path: '/care', label: 'Care' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="nav-header">
      <Link to="/" className="flex items-center gap-2" style={{ textDecoration: 'none' }}>
        <div className="flex items-center justify-center w-8 h-8 rounded-full" style={{ background: 'var(--accent-primary)' }}>
          <Leaf size={20} color="white" />
        </div>
        <span className="font-semibold" style={{ color: 'var(--text-primary)', fontSize: '1.125rem' }}>LeafCare</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="nav-link"
            style={{
              color: isActive(link.path) ? 'var(--text-primary)' : 'var(--text-muted)',
              background: isActive(link.path) ? 'rgba(0, 0, 0, 0.05)' : 'transparent'
            }}
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link to="/detection" className="btn-primary" style={{ textDecoration: 'none', padding: '10px 20px' }}>
        Detect Disease
      </Link>
    </nav>
  );
};