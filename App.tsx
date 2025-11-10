import React, { useState } from 'react';
import { ALLIANCE_DATA, INDEPENDENT_AIRLINES_DATA } from './constants';
import AllianceCard from './components/AllianceCard';
import type { Alliance, Airline } from './types';
import AirlineSearch from './components/AirlineSearch';
import LoyaltyProgramSearch from './components/LoyaltyProgramSearch';
import type { LoyaltySearchResult } from './components/LoyaltyProgramSearch';
import LocationSearch from './components/LocationSearch';
import type { LocationSearchResult } from './components/LocationSearch';
import LocationResultsPage from './components/LocationResultsPage';
import LoyaltyResultsPage from './components/LoyaltyResultsPage';
import BackToTopButton from './components/BackToTopButton';
import TripSuggestionPage from './components/TripSuggestionPage';

const App: React.FC = () => {
  const independentAlliance: Alliance = {
    name: 'Principali Compagnie Indipendenti',
    website: '#',
    logoUrl: `data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'%3E%3Cpath d='M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z'/%3E%3C/svg%3E`,
    members: INDEPENDENT_AIRLINES_DATA,
  };

  const allData = [...ALLIANCE_DATA, independentAlliance];
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [highlightedAirline, setHighlightedAirline] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // State for different views
  const [view, setView] = useState<'main' | 'locationResults' | 'loyaltyResults' | 'tripSuggestion'>('main');
  const [locationSearchTerm, setLocationSearchTerm] = useState('');
  const [locationSearchResults, setLocationSearchResults] = useState<LocationSearchResult[]>([]);
  const [loyaltySearchTerm, setLoyaltySearchTerm] = useState('');
  const [loyaltySearchResults, setLoyaltySearchResults] = useState<LoyaltySearchResult[]>([]);
  const [selectedAirlineForTrip, setSelectedAirlineForTrip] = useState<Airline | null>(null);


  const handleToggleCard = (cardName: string) => {
    const isClosing = expandedCard === cardName;
    const isSwitching = expandedCard !== null && expandedCard !== cardName;

    if (isClosing || isSwitching) {
        setHighlightedAirline(null);
        setShowBackToTop(false);
    }
    
    setExpandedCard(prev => (prev === cardName ? null : cardName));
  };
  
  const handleAirlineSelect = (airlineName: string, allianceName: string) => {
    setExpandedCard(allianceName);
    setHighlightedAirline(airlineName);
    setShowBackToTop(true);
  };

  const handleLocationSearch = (searchTerm: string, results: LocationSearchResult[]) => {
    setLocationSearchTerm(searchTerm);
    setLocationSearchResults(results);
    setView('locationResults');
  };

  const handleLoyaltySearch = (searchTerm: string, results: LoyaltySearchResult[]) => {
    setLoyaltySearchTerm(searchTerm);
    setLoyaltySearchResults(results);
    setView('loyaltyResults');
  };

  const performLoyaltySearch = (term: string): LoyaltySearchResult[] => {
    const lowerCaseSearchTerm = term.toLowerCase();
    const results: LoyaltySearchResult[] = [];
    const addedAirlines = new Set<string>();

    for (const alliance of allData) {
        for (const airline of alliance.members) {
            if (addedAirlines.has(airline.name)) {
                continue;
            }

            const programName = airline.loyaltyProgram.name.toLowerCase();
            const currencyName = airline.loyaltyProgram.currencyName.toLowerCase();
            const tiers = airline.loyaltyProgram.tiers.map(t => t.toLowerCase());

            if (programName.includes(lowerCaseSearchTerm) || 
                currencyName.includes(lowerCaseSearchTerm) || 
                tiers.some(t => t.includes(lowerCaseSearchTerm))) {
                results.push({
                    airline,
                    allianceName: alliance.name,
                });
                addedAirlines.add(airline.name);
            }
        }
    }
    return results;
  };

  const handleLoyaltySearchFromTerm = (term: string) => {
    const results = performLoyaltySearch(term);
    handleLoyaltySearch(term, results);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleShowTripSuggestionPage = (airline: Airline) => {
    setSelectedAirlineForTrip(airline);
    setView('tripSuggestion');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToMain = () => {
    setView('main');
    setLocationSearchTerm('');
    setLocationSearchResults([]);
    setLoyaltySearchTerm('');
    setLoyaltySearchResults([]);
    setSelectedAirlineForTrip(null);
  };
  
  const handleSelectFromSubpage = (airlineName: string, allianceName:string) => {
    handleBackToMain();
    // Use timeout to allow view to switch back before scrolling
    setTimeout(() => {
        handleAirlineSelect(airlineName, allianceName);
    }, 100);
  };

  const handleReset = () => {
    setExpandedCard(null);
    setHighlightedAirline(null);
    setShowBackToTop(false);
    handleBackToMain();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (view === 'tripSuggestion' && selectedAirlineForTrip) {
    return (
        <TripSuggestionPage
            airline={selectedAirlineForTrip}
            onBack={handleBackToMain}
        />
    );
  }

  if (view === 'locationResults') {
    return (
      <LocationResultsPage
        searchTerm={locationSearchTerm}
        results={locationSearchResults}
        onBack={handleBackToMain}
        onAirlineSelect={handleSelectFromSubpage}
      />
    );
  }
  
  if (view === 'loyaltyResults') {
      return (
          <LoyaltyResultsPage 
            searchTerm={loyaltySearchTerm}
            results={loyaltySearchResults}
            onBack={handleBackToMain}
            onAirlineSelect={handleSelectFromSubpage}
          />
      );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8 md:mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">Guida alle Alleanze Aeree</h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">Esplora le principali alleanze, le loro compagnie aeree, i programmi fedeltà e gli hub.</p>
        </header>

        <main className="space-y-8">
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <AirlineSearch allAlliances={allData} onAirlineSelect={handleAirlineSelect} />
                <LoyaltyProgramSearch allAlliances={allData} onSearch={handleLoyaltySearchFromTerm} />
            </div>
            <div className="mt-8">
                <LocationSearch allAlliances={allData} onSearch={handleLocationSearch} />
            </div>
            <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-6 flex items-center justify-center">
                 <button
                    onClick={handleReset}
                    className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 flex items-center gap-2"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Pulisci Ricerca e Chiudi Schede
                </button>
            </div>
          </section>

          {allData.map((data) => (
            <AllianceCard 
              key={data.name} 
              alliance={data} 
              isExpanded={expandedCard === data.name}
              onToggle={() => handleToggleCard(data.name)}
              highlightedAirline={highlightedAirline}
              onShowTripSuggestion={handleShowTripSuggestionPage}
            />
          ))}
        </main>
        
        <footer className="text-center mt-12 text-gray-500 dark:text-gray-400">
            <p>Le informazioni sulle alleanze e le compagnie aeree sono aggiornate a Ottobre 2024. Include funzionalità AI fornite da Gemini.</p>
        </footer>
      </div>
      <BackToTopButton isVisible={showBackToTop} onClick={() => setShowBackToTop(false)} />
    </div>
  );
};

export default App;