
import React from 'react';
import Section from './Section';
import { Event } from '../types';

const events: Event[] = [
  {
    title: 'Intro to Smart Contracts Workshop',
    date: 'October 26, 2024',
    description: 'Learn the basics of Solidity and write your first smart contract on the Ethereum blockchain. No prior experience needed!',
    location: 'Geisel Library, Seuss Room',
    imageUrl: 'https://picsum.photos/seed/event1/600/400',
  },
  {
    title: 'DeFi Panel with Industry Experts',
    date: 'November 15, 2024',
    description: 'Join us for a discussion on the future of Decentralized Finance with leaders from top crypto companies.',
    location: 'Price Center Theater',
    imageUrl: 'https://picsum.photos/seed/event2/600/400',
  },
  {
    title: 'Blockchain Career Fair',
    date: 'December 5, 2024',
    description: 'Connect with recruiters from leading blockchain startups and tech giants looking to hire interns and full-time employees.',
    location: 'RIMAC Arena',
    imageUrl: 'https://picsum.photos/seed/event3/600/400',
  },
];

const EventCard: React.FC<{ event: Event }> = ({ event }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-pink-500/50 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col sm:flex-row">
    <img src={event.imageUrl} alt={event.title} className="w-full sm:w-1/3 h-48 sm:h-auto object-cover" />
    <div className="p-6 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-baseline">
            <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
            <span className="text-sm font-semibold text-indigo-400 mb-2 whitespace-nowrap">{event.date}</span>
        </div>
        <p className="text-gray-400 mb-4">{event.description}</p>
      </div>
      <p className="text-gray-500 font-medium text-sm">
        <span className="font-semibold text-gray-400">Location:</span> {event.location}
      </p>
    </div>
  </div>
);

const Events: React.FC = () => {
  return (
    <Section id="events" title="Upcoming Events" subtitle="Learn, network, and build with us.">
      <div className="space-y-8">
        {events.map((event, index) => (
          <EventCard key={index} event={event} />
        ))}
      </div>
    </Section>
  );
};

export default Events;
