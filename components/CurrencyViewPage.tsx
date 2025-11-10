import React from 'react';
import type { Airline } from '../types';
// FIX: Changed import path for GroupedCurrencyData to the shared types file.
import type { GroupedCurrencyData } from '../types';

interface CurrencyViewPageProps {
    data: GroupedCurrencyData;
    onBack: () => void;
    onAirlineSelect: (airlineName: string, allianceName: string) => void;
}

const CurrencyViewPage: React.FC<CurrencyViewPageProps> = ({ data, onBack, onAirlineSelect }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
        <div className="max-w-5xl mx-auto">
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
                    Compagnie per Valuta Programma Fedeltà
                </h1>
                <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
                    Esplora quali compagnie aeree usano lo stesso tipo di miglia o punti.
                </p>
            </header>

            <main className="space-y-6">
                {Object.entries(data).sort(([a], [b]) => a.localeCompare(b)).map(([currencyName, programs]) => (
                    <div key={currencyName} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                        <h2 className="p-4 text-2xl font-bold bg-gray-50 dark:bg-gray-700/50 text-blue-700 dark:text-blue-300 border-b border-gray-200 dark:border-gray-700">
                            {currencyName}
                        </h2>
                        <div className="divide-y divide-gray-200 dark:divide-gray-700">
                            {Object.entries(programs).map(([programName, airlines]) => (
                                <div key={programName} className="p-4">
                                    <h3 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-3">{programName}</h3>
                                    <ul className="space-y-3">
                                        {airlines.map(({ airline, allianceName }) => (
                                           <li 
                                                key={airline.name} 
                                                className="p-3 bg-gray-50 dark:bg-gray-900/40 rounded-lg flex items-center justify-between gap-4"
                                            >
                                                <div className="flex items-center gap-4 min-w-0">
                                                    <img src={airline.logoUrl} alt={`${airline.name} logo`} className="h-8 w-8 object-contain flex-shrink-0"/>
                                                    <div className="min-w-0">
                                                        <p className="font-medium text-gray-900 dark:text-gray-100 truncate">{airline.name}</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{allianceName}</p>
                                                    </div>
                                                </div>
                                                <button 
                                                    onClick={() => onAirlineSelect(airline.name, allianceName)} 
                                                    className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-800 flex-shrink-0"
                                                >
                                                    Vedi dettagli
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </main>
        </div>
    </div>
  );
};

export default CurrencyViewPage;