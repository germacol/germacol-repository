import React, { useState, useMemo, useRef, useEffect } from 'react';
import type { Alliance, Airline } from '../types';

interface SearchResult {
    airline: Airline;
    allianceName: string;
}

interface AirlineSearchProps {
    allAlliances: Alliance[];
    onAirlineSelect: (airlineName: string, allianceName: string) => void;
}

const AirlineSearch: React.FC<AirlineSearchProps> = ({ allAlliances, onAirlineSelect }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    const searchResults = useMemo<SearchResult[]>(() => {
        if (searchTerm.length < 2) {
            return [];
        }

        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const results: SearchResult[] = [];
        const addedAirlines = new Set<string>();

        for (const alliance of allAlliances) {
            for (const airline of alliance.members) {
                if (addedAirlines.has(airline.name)) {
                    continue;
                }

                if (airline.name.toLowerCase().includes(lowerCaseSearchTerm)) {
                    results.push({
                        airline,
                        allianceName: alliance.name,
                    });
                    addedAirlines.add(airline.name);
                }
            }
        }

        return results.slice(0, 10);
    }, [searchTerm, allAlliances]);

    const handleSelect = (result: SearchResult) => {
        onAirlineSelect(result.airline.name, result.allianceName);
        setSearchTerm('');
        setShowResults(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowResults(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={searchRef}>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Cerca Compagnia Aerea</h2>
            <label htmlFor="airline-search" className="sr-only">
              Cerca una compagnia aerea per nome
            </label>
            <div className="relative">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                </div>
                <input
                    id="airline-search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setShowResults(true)}
                    placeholder="Cerca per nome compagnia aerea..."
                    className="w-full pl-10 pr-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoComplete="off"
                />
            </div>

            {showResults && searchResults.length > 0 && (
                <ul className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
                    {searchResults.map(result => (
                        <li
                            key={result.airline.name}
                            onClick={() => handleSelect(result)}
                            onKeyDown={(e) => { if (e.key === 'Enter') handleSelect(result)}}
                            className="px-4 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                            tabIndex={0}
                        >
                           <div>
                                <span className="font-semibold">{result.airline.name}</span>
                                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">({result.allianceName})</span>
                           </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AirlineSearch;