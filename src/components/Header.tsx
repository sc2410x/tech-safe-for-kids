
import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Shield size={32} className="text-kid-blue" />
          <span className="text-xl font-bold text-kid-blue-dark">KidSafeWeb</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-kid-blue font-medium">Home</Link>
          <Link to="/wifi" className="text-gray-700 hover:text-kid-blue font-medium">Home WiFi</Link>
          <Link to="/devices" className="text-gray-700 hover:text-kid-blue font-medium">Phones & Tablets</Link>
          <Link to="/apps" className="text-gray-700 hover:text-kid-blue font-medium">Apps & Websites</Link>
          <Link to="/resources" className="text-gray-700 hover:text-kid-blue font-medium">Resources</Link>
        </nav>
        
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" className="text-gray-700">
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
