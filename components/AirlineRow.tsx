import React, { useState, useEffect, useRef } from 'react';
import type { Airline } from '../types';
import HubBadge from './HubBadge';
import FunFactGenerator from './FunFactGenerator';

interface AirlineRowProps {
  airline: Airline;
  isHighlighted: boolean;
  onShowTripSuggestion: (airline: Airline) => void;
}

const AirlineRow: React.FC<AirlineRowProps> = ({ airline, isHighlighted, onShowTripSuggestion }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHighlighted && rowRef.current) {
      setIsExpanded(true);
      // Delay scrolling to allow the parent AllianceCard to finish its expansion animation.
      const scrollTimer = setTimeout(() => {
        rowRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }, 550); // A bit longer than the 500ms transition

      return () => clearTimeout(scrollTimer); // Cleanup the timer
    }
  }, [isHighlighted]);


  const handleToggle = () => {
    setIsExpanded(prevState => !prevState);
  };

  const airlineId = airline.name.replace(/\s+/g, '-');
  
  const highlightClasses = 'bg-blue-50 dark:bg-blue-900/20 ring-2 ring-blue-500 ring-inset';

  const parseRouteToUrl = (route: string) => {
    const matches = route.match(/\((.*?)\)/g);
    if (matches && matches.length >= 2) {
        const origin = matches[0].replace('(', '').replace(')', '');
        const destination = matches[1].replace('(', '').replace(')', '');
        return `https://www.google.com/flights?q=Flights%20from%20${origin}%20to%20${destination}`;
    }
    return '#';
  };

  return (
    <div ref={rowRef} className={`transition-all duration-300 ${isHighlighted ? highlightClasses : ''}`}>
      <div
        className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-start hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-200 cursor-pointer group"
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleToggle(); }}
        aria-expanded={isExpanded}
        aria-controls={`details-${airlineId}`}
      >
        
        {/* Airline Name & Loyalty */}
        <div className="md:col-span-1">
          <div className="flex items-center gap-4">
             <img src={airline.logoUrl} alt={`${airline.name} logo`} className="h-8 w-8 object-contain flex-shrink-0"/>
            <div className='flex items-center gap-3'>
              <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-300">
                <a href={airline.website} target="_blank" rel="noopener noreferrer" className="hover:underline" onClick={(e) => e.stopPropagation()}>
                  {airline.name}
                </a>
              </h3>
            </div>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 pl-12">
            <span className="font-medium">Programma Fedeltà:</span>{' '}
            <a href={airline.loyaltyProgram.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                {airline.loyaltyProgram.name}
            </a>
             <span className="ml-1 text-xs text-gray-400 dark:text-gray-500">({airline.loyaltyProgram.currencyName})</span>
          </p>
        </div>

        {/* Hubs */}
        <div className="md:col-span-2">
          <div>
            <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Hub Principali</h4>
            {airline.hubs.main.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {airline.hubs.main.map(hub => <HubBadge key={hub.code} hub={hub} isMain={true} />)}
              </div>
            ) : (
               <p className="text-sm text-gray-500 dark:text-gray-400 italic">Nessun hub principale specificato.</p>
            )}
          </div>
          {airline.hubs.secondary.length > 0 && (
            <div className="mt-4">
              <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Hub Secondari</h4>
              <div className="flex flex-wrap gap-2">
                {airline.hubs.secondary.map(hub => <HubBadge key={hub.code} hub={hub} isMain={false} />)}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Expandable content */}
      <div 
        id={`details-${airlineId}`}
        className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1200px]' : 'max-h-0'}`}
      >
        <div className="px-6 pb-6 pt-2 border-t border-gray-200 dark:border-gray-700">
            <div className="py-4 md:grid md:grid-cols-2 md:gap-6">
                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 mb-4 md:mb-0">
                  <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm italic">{airline.description}</p>
                  <div>
                      <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Rotte Principali</h5>
                      <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1 text-sm">
                          {airline.mainRoutes.slice(0, 10).map(route => (
                            <li key={route}>
                                <a href={parseRouteToUrl(route)} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                                    {route}
                                </a>
                            </li>
                          ))}
                      </ul>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700">
                    <div className="space-y-6">
                        <div>
                            <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Consigli di Viaggio con Gemini</h5>
                            <button
                                onClick={(e) => { e.stopPropagation(); onShowTripSuggestion(airline); }}
                                className="w-full px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 flex items-center justify-center gap-2"
                            >
                                ✨ Apri Suggerimenti di Viaggio
                            </button>
                        </div>
                         <div>
                            <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Curiosità sulla Compagnia</h5>
                            <FunFactGenerator airlineName={airline.name} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AirlineRow;
