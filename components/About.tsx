
import React from 'react';
import Section from './Section';

const About: React.FC = () => {
  return (
    <Section id="about" title="Who We Are">
      <div className="max-w-3xl mx-auto text-lg text-center text-gray-300 space-y-6 leading-relaxed">
        <p>
          Blockchain at UC San Diego is a student-run organization dedicated to fostering a vibrant blockchain community on campus. Our mission is to educate students about the fundamentals and applications of blockchain technology, from cryptocurrencies and DeFi to NFTs and decentralized applications.
        </p>
        <p>
          We host a variety of events, including technical workshops, guest speaker sessions with industry experts, and collaborative project-building nights. Whether you're a seasoned developer or just crypto-curious, our club offers a welcoming environment to learn, connect, and build the future of the decentralized web.
        </p>
      </div>
    </Section>
  );
};

export default About;
