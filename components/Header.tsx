import React, { useState, useEffect } from 'react';
import { logoBase64 } from '../assets';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#events', label: 'Events' },
    { href: '#team', label: 'Team' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (!href || href === '#') return;

    const targetId = href.substring(1);
    const element = document.getElementById(targetId);

    if (element) {
      const headerHeight = 80; // Corresponds to h-20 in TailwindCSS
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      
      // Update URL hash without a full page reload for better UX
      if (history.pushState) {
        history.pushState(null, '', href);
      } else {
        window.location.hash = href;
      }
    }

    setIsMenuOpen(false);
  };
  
  const linkClasses = "block py-2 px-3 text-gray-300 rounded hover:bg-gray-700 hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-pink-400 md:p-0 transition-colors duration-300";

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/80 backdrop-blur-lg border-b border-gray-700' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-20">
          <a href="#home" onClick={handleLinkClick} className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={"https://github.com/Yanuk-K/BaSD/blob/main/components/icons/logo_nobg.png?raw=true"} className="h-10" alt="Blockchain at UCSD Logo" />
            <span className="self-center text-lg sm:text-xl font-semibold whitespace-nowrap text-white">Blockchain at UCSD</span>
          </a>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
            </button>
          </div>

          <div className="hidden md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-700 rounded-lg bg-gray-800 md:bg-transparent md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
              {navLinks.map(link => (
                <li key={link.href}>
                  <a href={link.href} className={linkClasses} onClick={handleLinkClick}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
      {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-gray-900/95 backdrop-blur-lg border-t border-gray-700">
              <ul className="font-medium flex flex-col p-4">
                  {navLinks.map(link => (
                      <li key={link.href}>
                          <a href={link.href} className={linkClasses + " text-center"} onClick={handleLinkClick}>
                              {link.label}
                          </a>
                      </li>
                  ))}
              </ul>
          </div>
      )}
    </header>
  );
};

export default Header;
