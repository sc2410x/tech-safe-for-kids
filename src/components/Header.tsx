
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X, Heart, UserCircle2, Search } from 'lucide-react';
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
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
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
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
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
          <Link to="/resources" className="text-gray-700 hover:text-kid-orange font-medium px-4 py-2 rounded-full hover:bg-kid-orange-light transition-colors">
            Resources
          </Link>
        </nav>

        {/* Search Icon (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-gray-600 hover:text-kid-purple transition-colors">
            <Search size={20} />
          </button>
          <button className="text-gray-600 hover:text-kid-purple transition-colors">
            <UserCircle2 size={20} />
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-gray-700" onClick={toggleMobileMenu}>
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 animate-fade-in">
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-purple hover:bg-kid-purple-light rounded-full" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            
            <Link to="/wifi" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-blue hover:bg-kid-blue-light rounded-full" onClick={() => setMobileMenuOpen(false)}>
              WiFi Safety
            </Link>
            
            <Link to="/devices" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-green hover:bg-kid-green-light rounded-full" onClick={() => setMobileMenuOpen(false)}>
              Device Safety
            </Link>
            
            <Link to="/apps" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-yellow hover:bg-kid-yellow-light rounded-full" onClick={() => setMobileMenuOpen(false)}>
              App Safety
            </Link>
            
            <Link to="/resources" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-orange hover:bg-kid-orange-light rounded-full" onClick={() => setMobileMenuOpen(false)}>
              Resources
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
