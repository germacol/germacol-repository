import React, { useState, useMemo, useRef, useEffect } from 'react';
import type { Alliance } from '../types';

export interface LoyaltySearchResult {
    airline: import('../types').Airline;
    allianceName: string;
}

interface LoyaltyProgramSearchProps {
    allAlliances: Alliance[];
    onSearch: (searchTerm: string) => void;
}

const LoyaltyProgramSearch: React.FC<LoyaltyProgramSearchProps> = ({ allAlliances, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    const suggestions = useMemo(() => {
        if (searchTerm.length < 2) return [];
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        const programsSet = new Set<string>();
        
        allAlliances.forEach(alliance => {
            alliance.members.forEach(airline => {
                const programName = airline.loyaltyProgram.name;
                const currencyName = airline.loyaltyProgram.currencyName;
                if (programName && programName !== 'Nessun programma tradizionale') {
                    programsSet.add(programName);
                }
                if (currencyName && currencyName !== 'Nessuna valuta') {
                    programsSet.add(currencyName);
                }
                airline.loyaltyProgram.tiers.forEach(tier => {
                    programsSet.add(tier);
                });
            });
        });

        return Array.from(programsSet)
            .filter(p => p.toLowerCase().includes(lowerCaseSearchTerm))
            .sort()
            .slice(0, 10);
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
            onSearch(searchTerm);
            setShowSuggestions(false);
        }
    };

    return (
        <div ref={searchRef}>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Cerca per Programma Fedeltà</h2>
             <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-3">
                <div className="relative flex-grow">
                     <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                    <input
                        id="loyalty-search"
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onFocus={() => setShowSuggestions(true)}
                        placeholder="Cerca per programma, valuta o livello"
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

export default LoyaltyProgramSearch;
