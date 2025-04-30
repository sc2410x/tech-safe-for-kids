
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X, Heart, Baby, Wifi, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-br from-kid-blue to-kid-purple rounded-full p-2 shadow-md transform transition-all duration-300 group-hover:scale-110">
            <div className="flex items-center justify-center">
              <Shield size={24} className="text-white" />
              <Heart size={16} className="text-white absolute ml-1 mt-1" />
            </div>
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-kid-blue-dark to-kid-purple-dark bg-clip-text text-transparent font-display">KidSafeWeb</span>
            <span className="block text-xs text-gray-500 -mt-1">Protect what matters most</span>
          </div>
        </Link>
        
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="/" className="text-gray-700 hover:text-kid-blue font-medium px-4 py-2 rounded-md hover:bg-gray-50 transition-colors">
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
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-kid-blue/20 to-kid-teal-light/30 p-6 no-underline outline-none focus:shadow-md"
                          to="/wifi"
                        >
                          <Wifi className="h-6 w-6 text-kid-blue" />
                          <div className="mb-2 mt-4 text-lg font-medium text-kid-blue-dark">
                            Home WiFi Safety
                          </div>
                          <p className="text-sm leading-tight text-gray-600">
                            Secure your home network and set up parental controls on your router
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/devices"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                        >
                          <div className="text-sm font-medium leading-none text-kid-teal-dark">
                            <Smartphone className="h-4 w-4 inline-block mr-2" />
                            Phones & Tablets
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            Configure device-level controls for mobile devices
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/apps"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                        >
                          <div className="text-sm font-medium leading-none text-kid-purple-dark">
                            <Baby className="h-4 w-4 inline-block mr-2" />
                            Apps & Websites
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            Learn which apps are safe and how to manage accounts
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link
                          to="/resources"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-50 focus:bg-gray-50"
                        >
                          <div className="text-sm font-medium leading-none">
                            Resources
                          </div>
                          <p className="line-clamp-2 text-sm leading-snug text-gray-500">
                            Additional guides and tools for parents
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>
        
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
          <div className="px-4 pt-2 pb-4 space-y-3">
            <Link to="/" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            <Link to="/wifi" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Home WiFi
            </Link>
            <Link to="/devices" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Phones & Tablets
            </Link>
            <Link to="/apps" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Apps & Websites
            </Link>
            <Link to="/resources" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Resources
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
