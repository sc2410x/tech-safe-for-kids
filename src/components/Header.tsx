
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Menu, X, Heart, ChevronDown } from 'lucide-react';
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
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-gradient-to-br from-kid-blue to-kid-purple rounded-full p-2 shadow-md transform transition-all duration-300 group-hover:scale-110">
            <div className="flex items-center justify-center">
              <Shield size={24} className="text-white" />
              <Heart size={16} className="text-white absolute ml-1 mt-1" />
            </div>
          </div>
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-kid-blue-dark to-kid-purple-dark bg-clip-text text-transparent font-display">TechSafeForKids</span>
            <span className="block text-xs text-gray-500 -mt-1">Protect what matters most</span>
          </div>
        </Link>
        
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className="text-gray-700 hover:text-kid-blue font-medium px-4 py-2 rounded-md hover:bg-gray-50 transition-colors inline-block">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              
              {/* WiFi Safety Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-kid-blue font-medium">
                  WiFi Safety
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4 w-[220px] grid gap-3">
                    <li>
                      <Link 
                        to="/wifi"
                        className="block rounded-md p-2 hover:bg-gray-50 text-sm font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        WiFi Safety Overview
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/instructions/change-router-password"
                        className="block rounded-md p-2 hover:bg-gray-50 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Change Router Password
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/instructions/content-filtering"
                        className="block rounded-md p-2 hover:bg-gray-50 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Content Filtering
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* Device Safety Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-kid-blue font-medium">
                  Device Safety
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4 w-[220px] grid gap-3">
                    <li>
                      <Link 
                        to="/devices"
                        className="block rounded-md p-2 hover:bg-gray-50 text-sm font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Device Safety Overview
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/instructions/ios-child-account"
                        className="block rounded-md p-2 hover:bg-gray-50 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        iOS Child Account
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/instructions/ios-screen-time"
                        className="block rounded-md p-2 hover:bg-gray-50 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        iOS Screen Time
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/instructions/ios-content-restrictions"
                        className="block rounded-md p-2 hover:bg-gray-50 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        iOS Content Restrictions
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/instructions/android-child-account"
                        className="block rounded-md p-2 hover:bg-gray-50 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Android Child Account
                      </Link>
                    </li>
                    <li>
                      <Link 
                        to="/instructions/android-family-link"
                        className="block rounded-md p-2 hover:bg-gray-50 text-sm"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        Android Family Link
                      </Link>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              {/* App Safety Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-gray-700 hover:text-kid-blue font-medium">
                  App Safety
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="p-4 w-[220px] grid gap-3">
                    <li>
                      <Link 
                        to="/apps"
                        className="block rounded-md p-2 hover:bg-gray-50 text-sm font-medium"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        App Safety Overview
                      </Link>
                    </li>
                    {/* Add app safety specific links when available */}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/resources" className="text-gray-700 hover:text-kid-blue font-medium px-4 py-2 rounded-md hover:bg-gray-50 transition-colors inline-block">
                    Resources
                  </Link>
                </NavigationMenuLink>
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
          <div className="px-4 pt-2 pb-4 space-y-1">
            <Link to="/" className="block px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            
            {/* WiFi Safety mobile dropdown */}
            <Collapsible className="w-full">
              <CollapsibleTrigger className="flex justify-between items-center w-full px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md">
                <span>WiFi Safety</span>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4">
                <Link to="/wifi" className="block px-4 py-2 text-sm text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  WiFi Safety Overview
                </Link>
                <Link to="/instructions/change-router-password" className="block px-4 py-2 text-sm text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  Change Router Password
                </Link>
                <Link to="/instructions/content-filtering" className="block px-4 py-2 text-sm text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  Content Filtering
                </Link>
              </CollapsibleContent>
            </Collapsible>
            
            {/* Device Safety mobile dropdown */}
            <Collapsible className="w-full">
              <CollapsibleTrigger className="flex justify-between items-center w-full px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md">
                <span>Device Safety</span>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4">
                <Link to="/devices" className="block px-4 py-2 text-sm text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  Device Safety Overview
                </Link>
                <Link to="/instructions/ios-child-account" className="block px-4 py-2 text-sm text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  iOS Child Account
                </Link>
                <Link to="/instructions/ios-screen-time" className="block px-4 py-2 text-sm text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  iOS Screen Time
                </Link>
                <Link to="/instructions/ios-content-restrictions" className="block px-4 py-2 text-sm text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  iOS Content Restrictions
                </Link>
                <Link to="/instructions/android-child-account" className="block px-4 py-2 text-sm text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  Android Child Account
                </Link>
                <Link to="/instructions/android-family-link" className="block px-4 py-2 text-sm text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  Android Family Link
                </Link>
              </CollapsibleContent>
            </Collapsible>
            
            {/* App Safety mobile dropdown */}
            <Collapsible className="w-full">
              <CollapsibleTrigger className="flex justify-between items-center w-full px-4 py-2 text-base font-medium text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md">
                <span>App Safety</span>
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="pl-4">
                <Link to="/apps" className="block px-4 py-2 text-sm text-gray-700 hover:text-kid-blue hover:bg-gray-50 rounded-md" onClick={() => setMobileMenuOpen(false)}>
                  App Safety Overview
                </Link>
                {/* Add app safety specific links when available */}
              </CollapsibleContent>
            </Collapsible>
            
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
