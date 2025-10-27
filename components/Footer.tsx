import React from "react";
import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "./Icons";

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-uw-footer-bg text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Column 1: Logo & Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold text-uw-orange">
              United Works{" "}
              <span className="text-sm font-normal text-white">Pte. Ltd.</span>
            </h2>
            <p className="mt-4 text-gray-400 text-sm">
              © {new Date().getFullYear()} United Works Pte. Ltd. Company <br />
              All rights reserved
            </p>
          </div>

          {/* Column 2: Message */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-gray-300 text-sm leading-relaxed">
              Thank you for visiting United Works. We're proud to be part of
              Singapore's growth and development—one project at a time. Let's
              build a better future together.
            </p>
          </div>

          {/* Column 3: Links */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-uw-orange text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  onClick={onContactClick}
                  className="text-gray-300 hover:text-uw-orange text-sm transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Social & Legal */}
          <div className="sm:col-span-1 lg:col-span-1">
            <div className="flex space-x-4 mb-4 sm:mb-6">
              <a
                href="#"
                className="text-gray-400 hover:text-uw-orange transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-uw-orange transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-uw-orange transition-colors"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
            </div>
            <div className="flex flex-col space-y-1 sm:flex-row sm:space-y-0 sm:space-x-2 lg:space-x-4 text-xs text-gray-400">
              <a href="#" className="hover:text-white">
                Fraud Alert
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
              <span className="hidden sm:inline">|</span>
              <a href="#" className="hover:text-white">
                Cookie Setting
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
