
import React from 'react';
import Section from './Section';
import { Project } from '../types';
import GithubIcon from './icons/GithubIcon';
import GlobeIcon from './icons/GlobeIcon';

const projects: Project[] = [
  {
    title: 'Decentralized Voting System',
    description: 'A secure and transparent voting application built on the Ethereum blockchain, ensuring tamper-proof election results.',
    imageUrl: 'https://picsum.photos/seed/project1/600/400',
    githubUrl: 'https://github.com',
    projectUrl: '#',
  },
  {
    title: 'NFT Ticketing Platform',
    description: 'An innovative platform for event ticketing using Non-Fungible Tokens (NFTs) to prevent fraud and allow for a secondary market.',
    imageUrl: 'https://picsum.photos/seed/project2/600/400',
    githubUrl: 'https://github.com',
  },
  {
    title: 'Supply Chain Tracker',
    description: 'A proof-of-concept for tracking goods on a supply chain using Hyperledger Fabric for enhanced transparency and efficiency.',
    imageUrl: 'https://picsum.photos/seed/project3/600/400',
    projectUrl: '#',
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 transform hover:-translate-y-2 group">
    <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4 h-24 overflow-hidden">{project.description}</p>
      <div className="flex space-x-4">
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <GithubIcon className="w-6 h-6" />
          </a>
        )}
        {project.projectUrl && (
          <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
            <GlobeIcon className="w-6 h-6" />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Our Projects" subtitle="Innovations we're proud to have built.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
