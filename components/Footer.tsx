"use client"

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} Jack Anderson. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/JackAnderson04" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;