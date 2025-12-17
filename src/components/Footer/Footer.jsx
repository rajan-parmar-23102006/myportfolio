import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-darkGray border-t border-primary/20 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-mediumGray flex items-center justify-center gap-2">
            Made with <FaHeart className="text-primary animate-pulse" /> by{' '}
            <span className="text-primary font-semibold">Hetvi Parmar</span>
          </p>
          <p className="text-mediumGray text-sm mt-2">
            © {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
