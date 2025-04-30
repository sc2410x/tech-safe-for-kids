
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/3">
            <Link to="/" className="inline-flex items-center gap-2 group mb-4">
              <div className="bg-gradient-to-br from-kid-blue to-kid-purple rounded-full p-1.5 shadow-md">
                <Shield size={20} className="text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-kid-blue-dark to-kid-purple-dark bg-clip-text text-transparent font-display">KidSafeWeb</span>
            </Link>
            <p className="text-gray-600 mb-6">
              Empowering parents with practical knowledge to keep kids safe online. Our resources are designed to be accessible and easy to implement.
            </p>
            <div className="flex items-center">
              <Heart size={18} className="text-kid-purple mr-2" />
              <p className="text-sm text-gray-500">Created with care for families</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 font-display">Quick Links</h3>
            <ul className="space-y-3">
              <li className="hover-lift"><Link to="/" className="text-gray-600 hover:text-kid-blue flex items-center gap-1">Home</Link></li>
              <li className="hover-lift"><Link to="/wifi" className="text-gray-600 hover:text-kid-blue flex items-center gap-1">Home WiFi</Link></li>
              <li className="hover-lift"><Link to="/devices" className="text-gray-600 hover:text-kid-blue flex items-center gap-1">Phones & Tablets</Link></li>
              <li className="hover-lift"><Link to="/apps" className="text-gray-600 hover:text-kid-blue flex items-center gap-1">Apps & Websites</Link></li>
              <li className="hover-lift"><Link to="/resources" className="text-gray-600 hover:text-kid-blue flex items-center gap-1">Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 font-display">Child Accounts</h3>
            <ul className="space-y-3">
              <li className="hover-lift">
                <Link to="/instructions/ios-child-account" className="text-gray-600 hover:text-kid-blue flex items-center gap-1">
                  iOS Child Accounts <ExternalLink size={14} />
                </Link>
              </li>
              <li className="hover-lift">
                <Link to="/instructions/android-child-account" className="text-gray-600 hover:text-kid-blue flex items-center gap-1">
                  Android Child Accounts <ExternalLink size={14} />
                </Link>
              </li>
              <li className="hover-lift">
                <Link to="/instructions/content-filtering" className="text-gray-600 hover:text-kid-blue flex items-center gap-1">
                  Content Filtering <ExternalLink size={14} />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 font-display">Disclaimer</h3>
            <p className="text-gray-600 text-sm max-w-xs">
              This website provides general information for educational purposes only and is not a substitute for professional advice tailored to your specific circumstances.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-gray-600 text-sm">
              © {currentYear} KidSafeWeb Guide. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-kid-blue">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-kid-blue">Terms of Use</Link>
              <Link to="/contact" className="text-sm text-gray-500 hover:text-kid-blue">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
