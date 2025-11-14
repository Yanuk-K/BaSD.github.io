import React from 'react';
import Section from './Section';
import BlockchainIcon from './icons/BlockchainIcon';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-800">
      <Section id="contact" title="Get Involved" subtitle="Ready to dive into the world of blockchain? Join our community!">
        <div className="text-center">
          <a
            href="https://discord.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-5 text-xl font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500 transition-all duration-300 transform hover:scale-105"
          >
            <BlockchainIcon className="w-8 h-8 mr-4" />
            Join Our Discord Server
          </a>
          <p className="mt-8 text-gray-400">
            It's the best place to chat with members, get help, and stay updated on all our events.
          </p>
        </div>
      </Section>
    </div>
  );
};

export default Contact;
