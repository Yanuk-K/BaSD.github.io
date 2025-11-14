
import React from 'react';
import DiscordIcon from './icons/DiscordIcon';
import GithubIcon from './icons/GithubIcon';
import LinkedInIcon from './icons/LinkedInIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-400 text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Blockchain at UC San Diego. All Rights Reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><DiscordIcon className="w-6 h-6" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><GithubIcon className="w-6 h-6" /></a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon className="w-6 h-6" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
