
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        {/* Logo with semantic markup for accessibility */}
        <Link to="/" className="flex items-center gap-2 group" aria-label="TechSafeForKids Home">
          <div className="bg-gradient-to-br from-kid-purple via-kid-blue to-kid-yellow rounded-blob p-2 shadow-md transform transition-all duration-300 group-hover:scale-110">
            <div className="flex items-center justify-center">
              <Shield size={24} className="text-white" />
              <Heart size={16} className="text-white absolute ml-1 mt-1" />
            </div>
          </div>
          <div className="flex flex-col items-start">
            <span className="text-xl font-bold bg-gradient-to-r from-kid-purple-dark to-kid-blue-dark bg-clip-text text-transparent font-display">TechSafeForKids</span>
            <span className="block text-xs text-gray-500 -mt-1">Protect what matters most</span>
          </div>
        </Link>
        
        {/* Desktop Navigation with semantic nav element and proper aria labels */}
        <nav className="hidden md:flex items-center space-x-2" aria-label="Main Navigation">
          <Link to="/" className="text-gray-700 hover:text-kid-purple font-medium px-4 py-2 rounded-full hover:bg-kid-purple-light transition-colors">
            Home
          </Link>
          <Link to="/wifi" className="text-gray-700 hover:text-kid-blue font-medium px-4 py-2 rounded-full hover:bg-kid-blue-light transition-colors">
            WiFi Safety
          </Link>
          <Link to="/devices" className="text-gray-700 hover:text-kid-green font-medium px-4 py-2 rounded-full hover:bg-kid-green-light transition-colors">
            Device Safety
          </Link>
          <Link to="/apps" className="text-gray-700 hover:text-kid-yellow font-medium px-4 py-2 rounded-full hover:bg-kid-yellow-light transition-colors">
            App Safety
          </Link>
          <Link to="/helper" className="text-white bg-gradient-to-r from-kid-purple to-kid-blue font-medium px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5">
            Parent Helper
          </Link>
          <Link to="/resources" className="text-gray-700 hover:text-kid-orange font-medium px-4 py-2 rounded-full hover:bg-kid-orange-light transition-colors">
            Resources
          </Link>
        </nav>
        
        {/* Mobile Menu Button with improved accessibility */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-700" 
            onClick={toggleMobileMenu} 
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu with improved accessibility */}
      {mobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white shadow-lg border-t border-gray-100 animate-fade-in" role="menu">
          <nav className="px-4 pt-2 pb-4 space-y-1" aria-label="Mobile Navigation">
            <Link to="/" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-purple hover:bg-kid-purple-light rounded-full" onClick={() => setMobileMenuOpen(false)} role="menuitem">
              Home
            </Link>
            
            <Link to="/wifi" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-blue hover:bg-kid-blue-light rounded-full" onClick={() => setMobileMenuOpen(false)} role="menuitem">
              WiFi Safety
            </Link>
            
            <Link to="/devices" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-green hover:bg-kid-green-light rounded-full" onClick={() => setMobileMenuOpen(false)} role="menuitem">
              Device Safety
            </Link>
            
            <Link to="/apps" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-yellow hover:bg-kid-yellow-light rounded-full" onClick={() => setMobileMenuOpen(false)} role="menuitem">
              App Safety
            </Link>
            
            <Link to="/helper" className="block px-4 py-2 text-base font-medium text-white bg-gradient-to-r from-kid-purple to-kid-blue rounded-full" onClick={() => setMobileMenuOpen(false)} role="menuitem">
              Parent Helper
            </Link>
            
            <Link to="/resources" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-orange hover:bg-kid-orange-light rounded-full" onClick={() => setMobileMenuOpen(false)} role="menuitem">
              Resources
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
