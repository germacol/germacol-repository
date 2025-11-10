import React from 'react';
import type { Alliance, Airline } from '../types';
import AirlineRow from './AirlineRow';

interface AllianceCardProps {
  alliance: Alliance;
  isExpanded: boolean;
  onToggle: () => void;
  highlightedAirline: string | null;
  onShowTripSuggestion: (airline: Airline) => void;
}

const AllianceCard: React.FC<AllianceCardProps> = ({ alliance, isExpanded, onToggle, highlightedAirline, onShowTripSuggestion }) => {
  const allianceId = alliance.name.replace(/\s+/g, '-');
  const isLink = alliance.website !== '#';

  return (
    <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
      <header
        className="p-6 bg-gray-50 dark:bg-gray-700/50 flex items-center justify-between cursor-pointer"
        onClick={onToggle}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onToggle(); }}
        aria-expanded={isExpanded}
        aria-controls={`alliance-details-${allianceId}`}
      >
        <div className="flex items-center space-x-6">
          {isLink ? (
            <a 
              href={alliance.website} 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              aria-label={`${alliance.name} website`}
            >
              <img src={alliance.logoUrl} alt={`${alliance.name} logo`} className="h-14 w-14 object-contain flex-shrink-0 transition-transform duration-300 hover:scale-110" />
            </a>
          ) : (
            <img src={alliance.logoUrl} alt={`${alliance.name} logo`} className="h-14 w-14 object-contain flex-shrink-0" />
          )}
          
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
              {alliance.name}
            </h2>
            {!isExpanded && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 hidden sm:block">
                {alliance.members.length} compagnie aeree membre
              </p>
            )}
          </div>
        </div>
      </header>
      <div
        id={`alliance-details-${allianceId}`}
        className={`grid transition-all duration-500 ease-in-out ${isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 border-t border-gray-200 dark:border-gray-700">
            {alliance.members.map((airline) => (
              <AirlineRow 
                key={airline.name} 
                airline={airline} 
                isHighlighted={airline.name === highlightedAirline}
                onShowTripSuggestion={onShowTripSuggestion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllianceCard;