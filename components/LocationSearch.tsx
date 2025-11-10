import React, { useState, useMemo, useRef, useEffect } from 'react';
import type { Alliance, Airline } from '../types';

export interface LocationSearchResult {
    airline: Airline;
    allianceName: string;
}

interface LocationSearchProps {
    allAlliances: Alliance[];
    onSearch: (searchTerm: string, results: LocationSearchResult[]) => void;
}

const LocationSearch: React.FC<LocationSearchProps> = ({ allAlliances, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    const suggestions = useMemo(() => {
        if (searchTerm.length < 2) return [];
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const locationsSet = new Set<string>();

        allAlliances.forEach(alliance => {
            alliance.members.forEach(airline => {
                 [...airline.hubs.main, ...airline.hubs.secondary].forEach(hub => {
                    locationsSet.add(`${hub.city} (${hub.code.toUpperCase()})`);
                });
                 airline.mainRoutes.forEach(route => {
                    const parts = route.match(/([\w\s'-]+)\s+\(([\w]{3})\)/g);
                    if (parts) {
                        parts.forEach(part => {
                            const match = part.match(/([\w\s'-]+)\s+\(([\w]{3})\)/);
                            if (match) {
                                locationsSet.add(`${match[1].trim()} (${match[2].toUpperCase()})`);
                            }
                        });
                    }
                });
            });
        });

        return Array.from(locationsSet)
            .filter(location => location.toLowerCase().includes(lowerCaseSearchTerm))
            .sort()
            .slice(0, 10);
    }, [searchTerm, allAlliances]);

    const searchResults = useMemo<LocationSearchResult[]>(() => {
        if (searchTerm.length < 2) {
            return [];
        }

        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const parsedTerm = lowerCaseSearchTerm.match(/(.*) \(([^)]+)\)/);
        const citySearch = parsedTerm ? parsedTerm[1].trim() : lowerCaseSearchTerm;
        const codeSearch = parsedTerm ? parsedTerm[2].trim() : lowerCaseSearchTerm;

        const results: LocationSearchResult[] = [];
        const addedAirlines = new Set<string>();

        for (const alliance of allAlliances) {
            for (const airline of alliance.members) {
                if (addedAirlines.has(airline.name)) {
                    continue;
                }

                const airlineLocations = new Set<string>();
                [...airline.hubs.main, ...airline.hubs.secondary].forEach(hub => {
                    airlineLocations.add(`${hub.city.toLowerCase()} (${hub.code.toLowerCase()})`);
                });
                airline.mainRoutes.forEach(route => {
                   const parts = route.match(/([\w\s'-]+)\s+\(([\w]{3})\)/g);
                    if (parts) {
                        parts.forEach(part => {
                            const match = part.match(/([\w\s'-]+)\s+\(([\w]{3})\)/);
                            if (match) {
                                airlineLocations.add(`${match[1].trim().toLowerCase()} (${match[2].toLowerCase()})`);
                            }
                        });
                    }
                });

                let isMatch = false;
                for (const loc of airlineLocations) {
                    if (loc.includes(citySearch) || loc.includes(codeSearch)) {
                        isMatch = true;
                        break;
                    }
                }

                if (isMatch) {
                    results.push({
                        airline,
                        allianceName: alliance.name,
                    });
                    addedAirlines.add(airline.name);
                }
            }
        }

        return results;
    }, [searchTerm, allAlliances]);

    const handleSuggestionClick = (suggestion: string) => {
        setSearchTerm(suggestion);
        setShowSuggestions(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setShowSuggestions(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.length >= 2) {
            onSearch(searchTerm, searchResults);
            setShowSuggestions(false);
        }
    };

    return (
        <div ref={searchRef}>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Trova Compagnie per Destinazione</h2>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
                <div className="relative flex-grow">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                    </div>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        placeholder="Inserisci aeroporto (es. FCO) o città (es. Roma)"
                        className="w-full pl-10 pr-4 py-3 text-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        autoComplete="off"
                    />
                    {showSuggestions && suggestions.length > 0 && (
                        <ul className="absolute z-10 w-full mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg overflow-hidden">
                            {suggestions.map(suggestion => (
                                <li
                                    key={suggestion}
                                    onClick={() => handleSuggestionClick(suggestion)}
                                    onKeyDown={(e) => { if (e.key === 'Enter') handleSuggestionClick(suggestion)}}
                                    className="px-4 py-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                                    tabIndex={0}
                                >
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <button
                    type="submit"
                    className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 dark:focus:ring-offset-gray-900 disabled:cursor-not-allowed flex-shrink-0"
                    disabled={searchTerm.length < 2}
                >
                    Cerca
                </button>
            </form>
        </div>
    );
};

export default LocationSearch;