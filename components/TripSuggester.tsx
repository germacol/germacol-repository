import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from '@google/genai';

interface TripSuggesterProps {
    airlineName: string;
}

const TripSuggester: React.FC<TripSuggesterProps> = ({ airlineName }) => {
    const [suggestion, setSuggestion] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getSuggestion = async () => {
        setIsLoading(true);
        setError(null);
        setSuggestion('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const prompt = `Suggerisci un breve e accattivante itinerario di viaggio di 3 giorni con la compagnia aerea ${airlineName}. Sii creativo e stimolante. Rispondi in italiano.`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });

            setSuggestion(response.text);

        } catch (err) {
            console.error(err);
            setError('Impossibile ottenere un suggerimento. Riprova più tardi.');
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        getSuggestion();
    }, []);


    const handleDownload = () => {
        if (!suggestion) return;

        const fileContent = `Suggerimento di Viaggio con ${airlineName}\n\n---\n\n${suggestion}`;
        const blob = new Blob([fileContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        // Sanitize airlineName for filename
        const safeAirlineName = airlineName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        link.download = `suggerimento-viaggio-${safeAirlineName}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };


    return (
        <div>
            {isLoading && (
                 <div className="flex flex-col items-center justify-center p-4 min-h-[150px]">
                    <svg className="animate-spin h-8 w-8 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">Sto pensando a un fantastico viaggio per te...</p>
                </div>
            )}
            {error && !isLoading && (
                <div className="mt-2 text-center p-4 min-h-[150px] flex flex-col justify-center items-center">
                    <p className="text-sm text-red-500 mb-4">{error}</p>
                    <button 
                        onClick={getSuggestion} 
                        className="px-4 py-2 text-sm font-medium text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                        Riprova
                    </button>
                </div>
            )}
            {suggestion && !isLoading && (
                <div className="mt-3 p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md">
                    <div className="text-sm whitespace-pre-wrap font-sans">
                      {suggestion}
                    </div>
                    <div className="flex justify-between items-center mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                        <button
                            onClick={getSuggestion}
                            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-blue-800 bg-blue-100 rounded-md hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-200 dark:hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            aria-label="Genera un altro suggerimento"
                        >
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.899 2.186l-1.415.707A5.002 5.002 0 005.999 7H8a1 1 0 110-2H4a1 1 0 01-1-1V2a1 1 0 011-1zm12 14a1 1 0 01-1-1v-2.101a7.002 7.002 0 01-11.899-2.186l1.415-.707A5.002 5.002 0 0014.001 13H12a1 1 0 110 2h4a1 1 0 011 1v4a1 1 0 01-1 1z" clipRule="evenodd" />
                            </svg>
                            Nuovo
                        </button>
                        <button
                            onClick={handleDownload}
                            className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-green-800 bg-green-100 rounded-md hover:bg-green-200 dark:bg-green-900/50 dark:text-green-200 dark:hover:bg-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                            aria-label="Scarica suggerimento"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Scarica
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TripSuggester;