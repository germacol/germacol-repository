import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

interface FunFactGeneratorProps {
    airlineName: string;
}

const FunFactGenerator: React.FC<FunFactGeneratorProps> = ({ airlineName }) => {
    const [fact, setFact] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getFact = async () => {
        setIsLoading(true);
        setError(null);
        setFact('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const prompt = `Raccontami un fatto sorprendente e poco conosciuto sulla compagnia aerea ${airlineName}. Sii breve, coinvolgente e rispondi in italiano. Inizia la frase con "Lo sapevi che...?"`;
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: prompt,
            });

            setFact(response.text);

        } catch (err) {
            console.error(err);
            setError('Impossibile recuperare la curiosità. Riprova più tardi.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <button
                onClick={getFact}
                disabled={isLoading}
                className="w-full px-4 py-2 text-sm font-medium text-white bg-teal-600 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isLoading ? (
                    <>
                         <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Cercando...
                    </>
                ) : (
                   "Genera Curiosità"
                )}
            </button>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            {fact && (
                <div className="mt-3 p-3 text-sm bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-md">
                    <p className="italic text-gray-600 dark:text-gray-300">{fact}</p>
                </div>
            )}
        </div>
    );
};

export default FunFactGenerator;
