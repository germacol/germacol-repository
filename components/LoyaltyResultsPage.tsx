import React from 'react';
import type { LoyaltySearchResult } from './LoyaltyProgramSearch';

interface LoyaltyResultsPageProps {
    searchTerm: string;
    results: LoyaltySearchResult[];
    onBack: () => void;
    onAirlineSelect: (airlineName: string, allianceName: string) => void;
}

const LoyaltyResultsPage: React.FC<LoyaltyResultsPageProps> = ({ searchTerm, results, onBack, onAirlineSelect }) => {
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
                                className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-md transition-shadow hover:shadow-lg"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="flex items-start gap-4 min-w-0">
                                        <img src={result.airline.logoUrl} alt={`${result.airline.name} logo`} className="h-10 w-10 object-contain flex-shrink-0 mt-1"/>
                                        <div className="min-w-0">
                                            <p className="font-semibold text-lg text-gray-900 dark:text-gray-100 truncate">{result.airline.name}</p>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                                                <a href={result.airline.loyaltyProgram.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                                                    {result.airline.loyaltyProgram.name}
                                                </a>
                                                <span className="ml-1">({result.airline.loyaltyProgram.currencyName})</span>
                                            </p>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => onAirlineSelect(result.airline.name, result.allianceName)} 
                                        className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 flex-shrink-0"
                                    >
                                        Vedi dettagli
                                    </button>
                                </div>
                                
                                {result.airline.loyaltyProgram.tiers && result.airline.loyaltyProgram.tiers.length > 0 && (
                                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Livelli del Programma</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {result.airline.loyaltyProgram.tiers.map(tier => (
                                                <a
                                                    key={tier}
                                                    href={result.airline.loyaltyProgram.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-2.5 py-1 text-xs font-medium bg-gray-200 text-gray-800 rounded-full dark:bg-gray-700 dark:text-gray-200 hover:bg-blue-200 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                                                    aria-label={`Vedi dettagli per il livello ${tier} sul sito esterno`}
                                                >
                                                    {tier}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="text-center py-12 px-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-gray-100">Nessun programma fedeltà trovato</h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Prova a cercare un altro programma o tipo di valuta.</p>
                    </div>
                )}
            </main>
        </div>
    </div>
  );
};

export default LoyaltyResultsPage;