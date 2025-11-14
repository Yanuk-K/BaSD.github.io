import React, { useState, useEffect } from 'react';
import { bannerBase64 } from '../assets';
import BlockchainIcon from './icons/BlockchainIcon';

const Hero: React.FC = () => {
  const [parallaxStyle, setParallaxStyle] = useState({ transform: 'scale(1.05)' });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth: width, innerHeight: height } = window;
      const { clientX: x, clientY: y } = e;

      // Calculate movement from -1 to 1
      const moveX = (x - width / 2) / (width / 2);
      const moveY = (y - height / 2) / (height / 2);
      
      const parallaxFactor = 15; // Max pixels to move at the edge of the screen
      
      const transform = `translate(${moveX * parallaxFactor}px, ${moveY * parallaxFactor}px) scale(1.05)`;
      setParallaxStyle({ transform });
    };

    // Only add the parallax effect on devices with a fine pointer (like a mouse)
    if (window.matchMedia('(pointer: fine)').matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (window.matchMedia('(pointer: fine)').matches) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${bannerBase64})`,
          transition: 'transform 0.3s ease-out',
          ...parallaxStyle,
        }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative z-10 p-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 drop-shadow-lg">
          Blockchain at <span className="gradient-text">UC San Diego</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
          Pioneering the future of decentralized technology through education, development, and community.
        </p>
        <a
          href="https://discord.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105"
        >
          <BlockchainIcon className="w-6 h-6 mr-3" />
          Join Our Community
        </a>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll down">
          <div className="w-8 h-14 border-2 border-gray-400 rounded-full flex justify-center items-start p-2">
            <div className="w-1 h-3 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
