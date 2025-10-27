import React, { useState } from "react";
import { Link, NavLink as RouterNavLink } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import { ChevronDownIcon, GlobeAltIcon, Bars3Icon, XMarkIcon } from "./Icons";

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full">
      <div className="px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        {/* Left: Logo */}
        <div>
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold text-uw-dark whitespace-nowrap"
          >
            United Works Pte. Ltd.
          </Link>
        </div>

        {/* Center: Nav Links - Desktop */}
        <div className="hidden lg:flex items-center bg-uw-orange rounded-full p-1 space-x-1">
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
                  isActive
                    ? "bg-uw-dark text-white"
                    : "text-white hover:bg-black/10"
                }`
              }
            >
              {link.name}
            </RouterNavLink>
          ))}
        </div>

        {/* Right: Action Buttons - Desktop */}
        <div className="hidden lg:flex items-center space-x-2">
          <button className="flex items-center space-x-1.5 text-sm font-medium px-4 py-2 rounded-full bg-white border border-uw-grey-3 text-uw-dark hover:bg-gray-100 transition-colors">
            <GlobeAltIcon className="w-5 h-5" />
            <span>English</span>
            <ChevronDownIcon className="w-4 h-4" />
          </button>
          <button
            onClick={onContactClick}
            className="block px-5 py-2 rounded-full text-sm font-medium bg-white border border-uw-grey-3 text-uw-dark hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            contact
          </button>
        </div>

        {/* Mobile Contact Button */}
        <div className="lg:hidden flex items-center space-x-2">
          <button
            onClick={onContactClick}
            className="px-3 py-2 rounded-full text-sm font-medium bg-uw-orange text-white hover:bg-orange-600 transition-colors"
          >
            contact
          </button>
          <button
            onClick={toggleMobileMenu}
            className="p-2 rounded-lg text-uw-dark hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 bg-uw-grey-2 border-t border-uw-grey-3">
          <div className="flex flex-col space-y-3">
            {/* Language Selector */}
            <button className="flex items-center justify-between w-full px-4 py-3 rounded-lg bg-white border border-uw-grey-3 text-uw-dark hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-2">
                <GlobeAltIcon className="w-5 h-5" />
                <span className="text-sm font-medium">English</span>
              </div>
              <ChevronDownIcon className="w-4 h-4" />
            </button>

            {/* Navigation Links */}
            <div className="bg-uw-orange rounded-lg p-2 space-y-1">
              {NAV_LINKS.map((link) => (
                <RouterNavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "bg-uw-dark text-white"
                        : "text-white hover:bg-black/10"
                    }`
                  }
                >
                  {link.name}
                </RouterNavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
