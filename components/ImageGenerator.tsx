import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

interface ImageGeneratorProps {
    airlineName: string;
}

const ImageGenerator: React.FC<ImageGeneratorProps> = ({ airlineName }) => {
    const [prompt, setPrompt] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!prompt) return;

        setIsLoading(true);
        setError(null);
        setGeneratedImage(null);

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const response = await ai.models.generateImages({
                model: 'imagen-4.0-generate-001',
                prompt: prompt,
                 config: {
                    numberOfImages: 1,
                    outputMimeType: 'image/jpeg',
                    aspectRatio: '16:9',
                },
            });

            const base64ImageBytes = response.generatedImages[0].image.imageBytes;
            const imageUrl = `data:image/jpeg;base64,${base64ImageBytes}`;
            setGeneratedImage(imageUrl);

        } catch (err) {
            console.error(err);
            setError('Impossibile generare l\'immagine. Riprova più tardi.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div>
            <h5 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Visualizza una Destinazione</h5>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={`Es: Un panorama mozzafiato di Tokyo con ${airlineName}`}
                    className="w-full px-3 py-2 text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    disabled={isLoading || !prompt}
                >
                    {isLoading ? (
                        <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generazione in corso...
                        </>
                    ) : (
                       "Genera Immagine"
                    )}
                </button>
            </form>
            {error && <p className="mt-2 text-sm text-red-500">{error}</p>}
            {generatedImage && (
                <div className="mt-4">
                    <img src={generatedImage} alt="Generated visual of the prompt" className="w-full h-auto rounded-lg shadow-md" />
                </div>
            )}
        </div>
    );
};

export default ImageGenerator;