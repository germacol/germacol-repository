import React from 'react';
import type { LocationSearchResult } from './LocationSearch';

interface LocationResultsPageProps {
    searchTerm: string;
    results: LocationSearchResult[];
    onBack: () => void;
    onAirlineSelect: (airlineName: string, allianceName: string) => void;
}

const LocationResultsPage: React.FC<LocationResultsPageProps> = ({ searchTerm, results, onBack, onAirlineSelect }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
            <header className="mb-8">
                <button 
                    onClick={onBack} 
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                    aria-label="Torna alla guida principale"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Torna alla guida
                </button>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
                    Risultati per: <span className="text-blue-600 dark:text-blue-400">{searchTerm}</span>
                </h1>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                    {results.length} {results.length === 1 ? 'compagnia aerea trovata' : 'compagnie aeree trovate'}.
                </p>
            </header>

            <main>
                {results.length > 0 ? (
                    <ul className="space-y-4">
                        {results.map(result => (
                            <li 
                                key={result.airline.name} 
                                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md flex items-center justify-between gap-4 transition-shadow hover:shadow-lg"
                            >
                                <div className="flex items-center gap-4 min-w-0">
                                    <img src={result.airline.logoUrl} alt={`${result.airline.name} logo`} className="h-10 w-10 object-contain flex-shrink-0"/>
                                    <div className="min-w-0">
                                        <p className="font-semibold text-lg text-gray-900 dark:text-gray-100 truncate">{result.airline.name}</p>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">{result.allianceName}</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={() => onAirlineSelect(result.airline.name, result.allianceName)} 
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 flex-shrink-0"
                                >
                                    Vedi dettagli
                                </button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="text-center py-12 px-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2zm-2-9h2.25m-.25-2v2m18 0V5.25m0 15.5V18.5m-2.25 2H18.5m-13 0H6.25m0-15.5H5.5m13 0h.75m-15.5 0h.75" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-100">Nessuna compagnia aerea trovata</h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Prova a cercare un'altra città o codice aeroportuale.</p>
                    </div>
                )}
            </main>
        </div>
    </div>
  );
};

export default LocationResultsPage;
