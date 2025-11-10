import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, Chat, GenerateContentResponse } from '@google/genai';
import type { Airline } from '../types';

interface TripSuggestionPageProps {
    airline: Airline;
    onBack: () => void;
}

interface ChatMessage {
    author: 'user' | 'model';
    text: string;
}

const TripSuggestionPage: React.FC<TripSuggestionPageProps> = ({ airline, onBack }) => {
    const [conversation, setConversation] = useState<ChatMessage[]>([]);
    const [userInput, setUserInput] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const chatRef = useRef<Chat | null>(null);
    const conversationEndRef = useRef<HTMLDivElement>(null);

    const startConversation = async () => {
        setIsLoading(true);
        setError(null);
        setConversation([]);
        setUserInput('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            chatRef.current = ai.chats.create({
                model: 'gemini-2.5-flash',
                config: {
                    systemInstruction: `Sei un agente di viaggio amichevole e creativo. Un utente è interessato a un viaggio con ${airline.name}. Il tuo primo compito è suggerire un breve e accattivante itinerario di viaggio di 3 giorni. Menziona possibili destinazioni servite dalla compagnia aerea. Rispondi in italiano. Formatta la risposta in modo chiaro e leggibile, usando markdown per titoli e liste.`
                }
            });

            const initialPrompt = `Suggeriscimi un itinerario di 3 giorni con ${airline.name}.`;
            const response: GenerateContentResponse = await chatRef.current.sendMessage({ message: initialPrompt });
            
            setConversation([{ author: 'model', text: response.text }]);

        } catch (err) {
            console.error(err);
            setError('Impossibile ottenere un suggerimento. Riprova più tardi.');
        } finally {
            setIsLoading(false);
        }
    };
    
    useEffect(() => {
        startConversation();
    }, [airline.name]);

     useEffect(() => {
        conversationEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [conversation, isLoading]);

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!userInput.trim() || isLoading || !chatRef.current) return;

        const userMessage: ChatMessage = { author: 'user', text: userInput };
        setConversation(prev => [...prev, userMessage]);
        const currentInput = userInput;
        setUserInput('');
        setIsLoading(true);
        setError(null);

        try {
            const response: GenerateContentResponse = await chatRef.current.sendMessage({ message: currentInput });
            const modelMessage: ChatMessage = { author: 'model', text: response.text };
            setConversation(prev => [...prev, modelMessage]);
        } catch (err) {
            console.error(err);
            setError('Impossibile ottenere una risposta. Riprova più tardi.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDownload = () => {
        if (conversation.length === 0) return;

        const fileContent = conversation.map(msg => `${msg.author === 'user' ? 'Tu' : airline.name}:\n${msg.text}`).join('\n\n---\n\n');
        const fullContent = `Conversazione di Viaggio con ${airline.name}\n\n---\n\n${fileContent}`;

        const blob = new Blob([fullContent], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        const safeAirlineName = airline.name.replace(/[^a-z0-9]/gi, '_').toLowerCase();
        link.download = `conversazione-viaggio-${safeAirlineName}.txt`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto flex flex-col h-[calc(100vh-4rem)]">
                <header className="mb-4">
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
                    <div className="flex items-center gap-4">
                        <img src={airline.logoUrl} alt={`${airline.name} logo`} className="h-16 w-16 object-contain"/>
                        <div>
                            <p className="text-lg text-gray-500 dark:text-gray-400">Conversazione di Viaggio con Gemini</p>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">{airline.name}</h1>
                        </div>
                    </div>
                </header>

                <main className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex-grow flex flex-col min-h-0">
                    <div className="flex-grow space-y-4 overflow-y-auto pr-2 mb-4">
                        {isLoading && conversation.length === 0 ? (
                             <div className="flex flex-col items-center justify-center p-4 h-full">
                                <svg className="animate-spin h-10 w-10 text-purple-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">Sto pensando a un fantastico viaggio per te...</p>
                            </div>
                        ) : (
                            conversation.map((message, index) => (
                                <div key={index} className={`flex items-end gap-2 ${message.author === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[80%] p-3 rounded-2xl ${message.author === 'user' ? 'bg-blue-600 text-white rounded-br-none' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-bl-none'}`}>
                                        <div className="whitespace-pre-wrap font-sans text-base leading-relaxed">{message.text}</div>
                                    </div>
                                </div>
                            ))
                        )}
                        {isLoading && conversation.length > 0 && (
                             <div className="flex items-end gap-2 justify-start">
                                 <div className="max-w-xl p-3 rounded-2xl bg-gray-200 dark:bg-gray-700 rounded-bl-none">
                                     <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                                        <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                                        <span className="h-2 w-2 bg-gray-500 rounded-full animate-bounce"></span>
                                    </div>
                                 </div>
                             </div>
                         )}
                         <div ref={conversationEndRef} />
                    </div>

                    {error && (
                        <div className="text-center p-2">
                            <p className="text-sm text-red-500">{error}</p>
                        </div>
                    )}
                    
                    <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                        <form onSubmit={handleSendMessage} className="flex items-center gap-3">
                            <input
                                type="text"
                                value={userInput}
                                onChange={(e) => setUserInput(e.target.value)}
                                placeholder="Fai una domanda..."
                                disabled={isLoading}
                                className="w-full px-4 py-2.5 text-base bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                aria-label="Inserisci la tua domanda"
                            />
                            <button type="submit" disabled={isLoading || !userInput.trim()} className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex-shrink-0 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" aria-label="Invia messaggio">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" transform="rotate(90 12 12)" />
                                </svg>
                            </button>
                        </form>
                         <div className="flex justify-between items-center mt-4">
                            <button
                                onClick={startConversation}
                                disabled={isLoading}
                                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-blue-800 bg-blue-100 rounded-lg hover:bg-blue-200 dark:bg-blue-900/50 dark:text-blue-200 dark:hover:bg-blue-900 disabled:opacity-50"
                                aria-label="Inizia una nuova conversazione"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.899 2.186l-1.415.707A5.002 5.002 0 005.999 7H8a1 1 0 110-2H4a1 1 0 01-1-1V2a1 1 0 011-1zm12 14a1 1 0 01-1-1v-2.101a7.002 7.002 0 01-11.899-2.186l1.415-.707A5.002 5.002 0 0014.001 13H12a1 1 0 110 2h4a1 1 0 011 1v4a1 1 0 01-1 1z" clipRule="evenodd" /></svg>
                                Ricomincia
                            </button>
                            <button
                                onClick={handleDownload}
                                disabled={conversation.length === 0}
                                className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-green-800 bg-green-100 rounded-lg hover:bg-green-200 dark:bg-green-900/50 dark:text-green-200 dark:hover:bg-green-900 disabled:opacity-50"
                                aria-label="Scarica conversazione"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                                Scarica
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default TripSuggestionPage;
