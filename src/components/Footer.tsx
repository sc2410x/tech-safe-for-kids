
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Heart, ExternalLink, Star } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-br from-gray-50 to-gray-100 pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-10 bottom-40 w-20 h-20 rounded-blob bg-kid-yellow-light opacity-40"></div>
      <div className="absolute right-10 top-20 w-32 h-32 rounded-blob bg-kid-purple-light opacity-30"></div>
      <div className="absolute left-1/2 bottom-10 w-16 h-16 rounded-blob bg-kid-blue-light opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-1/3">
            <Link to="/" className="inline-flex items-center gap-2 group mb-4">
              <div className="bg-gradient-to-br from-kid-purple to-kid-blue rounded-blob p-1.5 shadow-md">
                <Shield size={20} className="text-white" />
              </div>
              <span className="text-lg font-bold bg-gradient-to-r from-kid-purple-dark to-kid-blue-dark bg-clip-text text-transparent font-display">TechSafeForKids</span>
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
              <li className="hover-lift"><Link to="/" className="text-gray-600 hover:text-kid-purple flex items-center gap-1"><Star size={14} className="text-kid-yellow" /> Home</Link></li>
              <li className="hover-lift"><Link to="/wifi" className="text-gray-600 hover:text-kid-purple flex items-center gap-1"><Star size={14} className="text-kid-blue" /> Home WiFi</Link></li>
              <li className="hover-lift"><Link to="/devices" className="text-gray-600 hover:text-kid-purple flex items-center gap-1"><Star size={14} className="text-kid-green" /> Phones & Tablets</Link></li>
              <li className="hover-lift"><Link to="/apps" className="text-gray-600 hover:text-kid-purple flex items-center gap-1"><Star size={14} className="text-kid-orange" /> Apps & Websites</Link></li>
              <li className="hover-lift"><Link to="/resources" className="text-gray-600 hover:text-kid-purple flex items-center gap-1"><Star size={14} className="text-kid-purple" /> Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-800 font-display">Child Accounts</h3>
            <ul className="space-y-3">
              <li className="hover-lift">
                <Link to="/instructions/ios-child-account" className="text-gray-600 hover:text-kid-blue flex items-center gap-1">
                  <ExternalLink size={14} className="text-kid-blue" /> iOS Child Accounts
                </Link>
              </li>
              <li className="hover-lift">
                <Link to="/instructions/android-child-account" className="text-gray-600 hover:text-kid-green flex items-center gap-1">
                  <ExternalLink size={14} className="text-kid-green" /> Android Child Accounts
                </Link>
              </li>
              <li className="hover-lift">
                <Link to="/instructions/content-filtering" className="text-gray-600 hover:text-kid-yellow flex items-center gap-1">
                  <ExternalLink size={14} className="text-kid-yellow" /> Content Filtering
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-dashed border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-center text-gray-600 text-sm">
              © {currentYear} TechSafeForKids Guide. All rights reserved.
            </p>
            <div className="flex gap-4">
              <Link to="/privacy" className="text-sm text-gray-500 hover:text-kid-purple">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-gray-500 hover:text-kid-purple">Terms of Use</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
