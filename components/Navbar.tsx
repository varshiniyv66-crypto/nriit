import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, GraduationCap } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  return (
    <nav className="bg-royal-blue text-white fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="bg-white p-1 rounded-full">
                <GraduationCap className="h-8 w-8 text-royal-blue" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl tracking-tight">NRIIT</span>
              <span className="text-xs text-gray-200 tracking-wider">GUNTUR</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label} className="relative group">
                  {item.children ? (
                    <button 
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-royal-dark flex items-center"
                      onMouseEnter={() => setDropdownOpen(item.label)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className="px-3 py-2 rounded-md text-sm font-medium hover:bg-royal-dark transition-colors"
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {item.children && dropdownOpen === item.label && (
                    <div 
                      className="absolute left-0 mt-0 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                      onMouseEnter={() => setDropdownOpen(item.label)}
                      onMouseLeave={() => setDropdownOpen(null)}
                    >
                      <div className="py-1" role="menu">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={child.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-royal-blue"
                            role="menuitem"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-royal-dark focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-royal-dark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <div className="px-3 py-2 text-base font-medium text-gray-300">{item.label}</div>
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-royal-blue"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-royal-blue"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;