
import React, { useRef, useState, useEffect } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-20 px-4 sm:px-6 lg:px-8 transition-opacity duration-1000 ease-in ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-5'}`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">{subtitle}</p>
          )}
           <div className="mt-4 h-1 w-24 bg-indigo-500 mx-auto rounded"></div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
