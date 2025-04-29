
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <Shield size={32} className="text-kid-blue" />
          <span className="text-xl font-bold text-kid-blue-dark">KidSafeWeb</span>
        </Link>
        
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-gray-700 hover:text-kid-blue font-medium px-3 py-2 rounded-md transition-colors">
                  Home
                </Link>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-kid-blue font-medium">
                  Safety Guides
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          to="/wifi"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-kid-blue/20 to-kid-blue/40 p-6 no-underline outline-none focus:shadow-md"
                        >
                          <div className="mb-2 mt-4 text-lg font-medium text-kid-blue-dark">
                            WiFi Safety
                          </div>
                          <p className="text-sm leading-tight text-gray-700">
                            Secure your home network and set up parental controls to keep your family safe online.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/devices"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-kid-teal-light hover:text-kid-teal-dark focus:bg-kid-teal-light focus:text-kid-teal-dark"
                        >
                          <div className="text-sm font-medium leading-none">Devices</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-700">
                            Configure device-level protections for phones and tablets
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/apps"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-kid-purple-light hover:text-kid-purple-dark focus:bg-kid-purple-light focus:text-kid-purple-dark"
                        >
                          <div className="text-sm font-medium leading-none">Apps & Websites</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-700">
                            Learn which apps are safe and how to manage online accounts
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/resources"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-kid-blue-light hover:text-kid-blue-dark focus:bg-kid-blue-light focus:text-kid-blue-dark"
                        >
                          <div className="text-sm font-medium leading-none">Resources</div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-700">
                            Additional resources for parents and educators
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <Link to="/resources" className="text-gray-700 hover:text-kid-blue font-medium px-3 py-2 rounded-md transition-colors">
                  Resources
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-gray-700" onClick={toggleMobileMenu}>
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      
      {/* Mobile navigation menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-2 px-4">
          <nav className="flex flex-col space-y-3">
            <Link 
              to="/" 
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-kid-blue-light hover:text-kid-blue-dark"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/wifi" 
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-kid-blue-light hover:text-kid-blue-dark"
              onClick={toggleMobileMenu}
            >
              Home WiFi
            </Link>
            <Link 
              to="/devices" 
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-kid-teal-light hover:text-kid-teal-dark"
              onClick={toggleMobileMenu}
            >
              Phones & Tablets
            </Link>
            <Link 
              to="/apps" 
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-kid-purple-light hover:text-kid-purple-dark"
              onClick={toggleMobileMenu}
            >
              Apps & Websites
            </Link>
            <Link 
              to="/resources" 
              className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-kid-blue-light hover:text-kid-blue-dark"
              onClick={toggleMobileMenu}
            >
              Resources
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
