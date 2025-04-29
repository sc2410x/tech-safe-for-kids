
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-100 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">KidSafeWeb Guide</h3>
            <p className="text-gray-600">
              Empowering parents with practical knowledge to keep kids safe online.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-kid-blue">Home</Link></li>
              <li><Link to="/wifi" className="text-gray-600 hover:text-kid-blue">Home WiFi</Link></li>
              <li><Link to="/devices" className="text-gray-600 hover:text-kid-blue">Phones & Tablets</Link></li>
              <li><Link to="/apps" className="text-gray-600 hover:text-kid-blue">Apps & Websites</Link></li>
              <li><Link to="/resources" className="text-gray-600 hover:text-kid-blue">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Disclaimer</h3>
            <p className="text-gray-600 text-sm">
              This website provides general information for educational purposes only and is not a substitute for professional advice.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-center text-gray-600 text-sm">
            © {currentYear} KidSafeWeb Guide. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
