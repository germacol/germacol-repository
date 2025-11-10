import { Alliance, Airline } from './types';

export const ALLIANCE_DATA: Alliance[] = [
  {
    name: 'Star Alliance',
    website: 'https://www.staralliance.com',
    logoUrl: 'https://logo.clearbit.com/staralliance.com',
    members: [
      {
        name: 'Lufthansa',
        logoUrl: 'https://logo.clearbit.com/lufthansa.com',
        website: 'https://www.lufthansa.com',
        loyaltyProgram: { name: 'Miles & More', url: 'https://www.miles-and-more.com/', currencyName: 'Miglia', tiers: ['Frequent Traveller', 'Senator', 'HON Circle Member'] },
        hubs: {
          main: [
            { code: 'FRA', name: 'Frankfurt Airport', city: 'Francoforte' },
            { code: 'MUC', name: 'Munich Airport', city: 'Monaco' }
          ],
          secondary: [
            { code: 'DUS', name: 'Düsseldorf Airport', city: 'Düsseldorf' },
          ]
        },
        description: 'Compagnia di bandiera tedesca e una delle più grandi compagnie aeree d\'Europa, rinomata per la sua efficienza e la vasta rete di collegamenti.',
        mainRoutes: ['Francoforte (FRA) - New York (JFK)', 'Monaco (MUC) - Tokyo (HND)', 'Francoforte (FRA) - Shanghai (PVG)', 'Francoforte (FRA) - Chicago (ORD)', 'Monaco (MUC) - Los Angeles (LAX)', 'Francoforte (FRA) - Singapore (SIN)', 'Francoforte (FRA) - San Paolo (GRU)', 'Monaco (MUC) - Pechino (PEK)', 'Francoforte (FRA) - Johannesburg (JNB)', 'Francoforte (FRA) - Buenos Aires (EZE)']
      },
      {
        name: 'United Airlines',
        logoUrl: 'https://logo.clearbit.com/united.com',
        website: 'https://www.united.com',
        loyaltyProgram: { name: 'MileagePlus', url: 'https://www.united.com/mileageplus', currencyName: 'Miglia', tiers: ['Premier Silver', 'Premier Gold', 'Premier Platinum', 'Premier 1K'] },
        hubs: {
          main: [
            { code: 'ORD', name: 'O\'Hare International Airport', city: 'Chicago' },
            { code: 'DEN', name: 'Denver International Airport', city: 'Denver' },
            { code: 'EWR', name: 'Newark Liberty International Airport', city: 'Newark' },
            { code: 'IAH', name: 'George Bush Intercontinental Airport', city: 'Houston' },
            { code: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles' },
            { code: 'SFO', name: 'San Francisco International Airport', city: 'San Francisco' }
          ],
          secondary: [
            { code: 'IAD', name: 'Dulles International Airport', city: 'Washington D.C.' }
          ]
        },
        description: 'Una delle principali compagnie aeree statunitensi, con una rete globale che collega centinaia di destinazioni nazionali e internazionali.',
        mainRoutes: ['Newark (EWR) - Londra (LHR)', 'San Francisco (SFO) - Sydney (SYD)', 'Chicago (ORD) - Tokyo (NRT)', 'Houston (IAH) - Amsterdam (AMS)', 'Chicago (ORD) - Francoforte (FRA)', 'Washington (IAD) - Parigi (CDG)', 'Denver (DEN) - Monaco (MUC)', 'San Francisco (SFO) - Hong Kong (HKG)', 'Los Angeles (LAX) - Londra (LHR)']
      },
      {
        name: 'Singapore Airlines',
        logoUrl: 'https://logo.clearbit.com/singaporeair.com',
        website: 'https://www.singaporeair.com',
        loyaltyProgram: { name: 'KrisFlyer', url: 'https://www.singaporeair.com/en_UK/ppsclub-krisflyer/', currencyName: 'Miglia KrisFlyer', tiers: ['KrisFlyer Elite Silver', 'KrisFlyer Elite Gold', 'PPS Club'] },
        hubs: {
          main: [{ code: 'SIN', name: 'Singapore Changi Airport', city: 'Singapore' }],
          secondary: []
        },
        description: 'Riconosciuta a livello mondiale per l\'eccellenza del servizio, il lusso a bordo e l\'hub all\'avanguardia di Changi.',
        mainRoutes: ['Singapore (SIN) - Londra (LHR)', 'Singapore (SIN) - Los Angeles (LAX)', 'Singapore (SIN) - Sydney (SYD)']
      },
      {
        name: 'Air Canada',
        logoUrl: 'https://logo.clearbit.com/aircanada.com',
        website: 'https://www.aircanada.com',
        loyaltyProgram: { name: 'Aeroplan', url: 'https://www.aircanada.com/ca/en/aco/home/aeroplan.html', currencyName: 'Punti Aeroplan', tiers: ['25K', '35K', '50K', '75K', 'Super Elite'] },
        hubs: {
          main: [
            { code: 'YYZ', name: 'Toronto Pearson International Airport', city: 'Toronto' },
            { code: 'YVR', name: 'Vancouver International Airport', city: 'Vancouver' },
            { code: 'YUL', name: 'Montréal-Trudeau International Airport', city: 'Montreal' }
          ],
          secondary: [
            { code: 'YYC', name: 'Calgary International Airport', city: 'Calgary' }
          ]
        },
        description: 'La più grande compagnia aerea del Canada, offre servizi passeggeri e cargo verso più di 200 destinazioni in sei continenti.',
        mainRoutes: ['Toronto (YYZ) - Londra (LHR)', 'Vancouver (YVR) - Hong Kong (HKG)', 'Montreal (YUL) - Parigi (CDG)']
      },
      {
        name: 'Turkish Airlines',
        logoUrl: 'https://logo.clearbit.com/turkishairlines.com',
        website: 'https://www.turkishairlines.com',
        loyaltyProgram: { name: 'Miles&Smiles', url: 'https://www.turkishairlines.com/en-int/miles-and-smiles/', currencyName: 'Miglia', tiers: ['Classic', 'Classic Plus', 'Elite', 'Elite Plus'] },
        hubs: {
          main: [{ code: 'IST', name: 'Istanbul Airport', city: 'Istanbul' }],
          secondary: [
            { code: 'ESB', name: 'Esenboğa Airport', city: 'Ankara' },
            { code: 'SAW', name: 'Sabiha Gökçen International Airport', city: 'Istanbul' }
          ]
        },
        description: 'Vola verso più paesi di qualsiasi altra compagnia aerea, con un\'ampia rete che collega l\'Europa con l\'Asia, l\'Africa e le Americhe.',
        mainRoutes: ['Istanbul (IST) - New York (JFK)', 'Istanbul (IST) - Dubai (DXB)', 'Istanbul (IST) - Londra (LHR)', 'Istanbul (IST) - Los Angeles (LAX)', 'Istanbul (IST) - Tokyo (HND)', 'Istanbul (IST) - Hong Kong (HKG)', 'Istanbul (IST) - Singapore (SIN)', 'Istanbul (IST) - Seoul (ICN)', 'Istanbul (IST) - Toronto (YYZ)', 'Istanbul (IST) - Chicago (ORD)']
      },
      {
        name: 'SWISS',
        logoUrl: 'https://logo.clearbit.com/swiss.com',
        website: 'https://www.swiss.com',
        loyaltyProgram: { name: 'Miles & More', url: 'https://www.miles-and-more.com/', currencyName: 'Miglia', tiers: ['Frequent Traveller', 'Senator', 'HON Circle Member'] },
        hubs: {
            main: [{ code: 'ZRH', name: 'Zurich Airport', city: 'Zurigo' }],
            secondary: [{ code: 'GVA', name: 'Geneva Airport', city: 'Ginevra' }]
        },
        description: 'Compagnia di bandiera svizzera, nota per la qualità del servizio, l\'affidabilità e l\'ospitalità tipicamente elvetica.',
        mainRoutes: ['Zurigo (ZRH) - New York (JFK)', 'Zurigo (ZRH) - Dubai (DXB)', 'Ginevra (GVA) - Londra (LHR)']
      },
      {
        name: 'Austrian Airlines',
        logoUrl: 'https://logo.clearbit.com/austrian.com',
        website: 'https://www.austrian.com',
        loyaltyProgram: { name: 'Miles & More', url: 'https://www.miles-and-more.com/', currencyName: 'Miglia', tiers: ['Frequent Traveller', 'Senator', 'HON Circle Member'] },
        hubs: {
            main: [{ code: 'VIE', name: 'Vienna International Airport', city: 'Vienna' }],
            secondary: []
        },
        description: 'Compagnia di bandiera austriaca, specializzata nei collegamenti tra Europa occidentale e orientale grazie alla sua posizione strategica a Vienna.',
        mainRoutes: ['Vienna (VIE) - New York (JFK)', 'Vienna (VIE) - Bangkok (BKK)', 'Vienna (VIE) - Francoforte (FRA)']
      },
      {
        name: 'ANA (All Nippon Airways)',
        logoUrl: 'https://logo.clearbit.com/ana.co.jp',
        website: 'https://www.ana.co.jp',
        loyaltyProgram: { name: 'ANA Mileage Club', url: 'https://www.ana.co.jp/en/jp/amc/', currencyName: 'Miglia', tiers: ['Bronze', 'Platinum', 'Diamond'] },
        hubs: {
            main: [
                { code: 'HND', name: 'Haneda Airport', city: 'Tokyo' },
                { code: 'NRT', name: 'Narita International Airport', city: 'Tokyo' }
            ],
            secondary: [
                { code: 'ITM', name: 'Osaka International Airport', city: 'Osaka' },
                { code: 'KIX', name: 'Kansai International Airport', city: 'Osaka' }
            ]
        },
        description: 'La più grande compagnia aerea del Giappone, rinomata per l\'eccezionale servizio a bordo e l\'attenzione ai dettagli.',
        mainRoutes: ['Tokyo (HND) - New York (JFK)', 'Tokyo (NRT) - Francoforte (FRA)', 'Tokyo (HND) - Londra (LHR)']
      },
      {
        name: 'Asiana Airlines',
        logoUrl: 'https://logo.clearbit.com/flyasiana.com',
        website: 'https://flyasiana.com',
        loyaltyProgram: { name: 'Asiana Club', url: 'https://flyasiana.com/C/US/EN/contents/asianaclub-introduction', currencyName: 'Miglia Asiana Club', tiers: ['Gold', 'Diamond', 'Diamond Plus', 'Platinum'] },
        hubs: {
            main: [{ code: 'ICN', name: 'Incheon International Airport', city: 'Seoul' }],
            secondary: [{ code: 'GMP', name: 'Gimpo International Airport', city: 'Seoul' }]
        },
        description: 'Una delle due principali compagnie aeree della Corea del Sud, offre un servizio a 5 stelle e collega l\'Asia con il resto del mondo.',
        mainRoutes: ['Seoul (ICN) - Los Angeles (LAX)', 'Seoul (ICN) - Francoforte (FRA)', 'Seoul (ICN) - Sydney (SYD)']
      },
      {
        name: 'EVA Air',
        logoUrl: 'https://logo.clearbit.com/evaair.com',
        website: 'https://www.evaair.com',
        loyaltyProgram: { name: 'Infinity MileageLands', url: 'https://www.evaair.com/en-us/infinity-mileagelands/', currencyName: 'Miglia', tiers: ['Green', 'Silver', 'Gold', 'Diamond'] },
        hubs: {
            main: [{ code: 'TPE', name: 'Taoyuan International Airport', city: 'Taipei' }],
            secondary: []
        },
        description: 'Compagnia aerea taiwanese a 5 stelle, nota per la sicurezza, il servizio e per essere stata la prima a introdurre la classe Premium Economy.',
        mainRoutes: ['Taipei (TPE) - Los Angeles (LAX)', 'Taipei (TPE) - Parigi (CDG)', 'Taipei (TPE) - Vancouver (YVR)']
      },
      {
        name: 'TAP Air Portugal',
        logoUrl: 'https://logo.clearbit.com/flytap.com',
        website: 'https://www.flytap.com',
        loyaltyProgram: { name: 'Miles&Go', url: 'https://www.flytap.com/en-us/miles-and-go', currencyName: 'Miglia', tiers: ['Silver', 'Gold'] },
        hubs: {
            main: [{ code: 'LIS', name: 'Lisbon Airport', city: 'Lisbona' }],
            secondary: [{ code: 'OPO', name: 'Porto Airport', city: 'Porto' }]
        },
        description: 'Compagnia di bandiera portoghese, leader nei collegamenti tra l\'Europa, il Brasile e l\'Africa.',
        mainRoutes: ['Lisbona (LIS) - San Paolo (GRU)', 'Lisbona (LIS) - New York (JFK)', 'Lisbona (LIS) - Rio de Janeiro (GIG)']
      },
      {
        name: 'Aegean Airlines',
        logoUrl: 'https://logo.clearbit.com/aegeanair.com',
        website: 'https://en.aegeanair.com/',
        loyaltyProgram: { name: 'Miles+Bonus', url: 'https://en.aegeanair.com/milesandbonus/', currencyName: 'Miglia', tiers: ['Blue', 'Silver', 'Gold'] },
        hubs: {
            main: [
                { code: 'ATH', name: 'Athens International Airport', city: 'Atene' },
                { code: 'SKG', name: 'Thessaloniki Airport', city: 'Salonicco' }
            ],
            secondary: []
        },
        description: 'Compagnia di bandiera greca, la più grande del paese per numero di passeggeri, collega la Grecia con destinazioni europee e del Medio Oriente.',
        mainRoutes: ['Atene (ATH) - Francoforte (FRA)', 'Atene (ATH) - Londra (LHR)', 'Atene (ATH) - Larnaca (LCA)']
      },
      {
        name: 'Air China',
        logoUrl: 'https://logo.clearbit.com/airchina.com',
        website: 'https://www.airchina.com',
        loyaltyProgram: { name: 'PhoenixMiles', url: 'https://www.airchina.us/US/en/phoenixmiles/', currencyName: 'Chilometri', tiers: ['Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [
                { code: 'PEK', name: 'Beijing Capital International Airport', city: 'Pechino' },
                { code: 'CTU', name: 'Chengdu Tianfu International Airport', city: 'Chengdu' }
            ],
            secondary: []
        },
        description: 'Compagnia di bandiera della Repubblica Popolare Cinese, con una vasta rete domestica e internazionale che collega la Cina al mondo.',
        mainRoutes: ['Pechino (PEK) - New York (JFK)', 'Pechino (PEK) - Francoforte (FRA)', 'Pechino (PEK) - Los Angeles (LAX)']
      },
      {
        name: 'Air India',
        logoUrl: 'https://logo.clearbit.com/airindia.com',
        website: 'https://www.airindia.com',
        loyaltyProgram: { name: 'Flying Returns', url: 'https://www.airindia.com/flying-returns.htm', currencyName: 'Punti Flying Returns', tiers: ['Red', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [
                { code: 'DEL', name: 'Indira Gandhi International Airport', city: 'Delhi' },
                { code: 'BOM', name: 'Chhatrapati Shivaji Maharaj International Airport', city: 'Mumbai' }
            ],
            secondary: []
        },
        description: 'Compagnia di bandiera dell\'India, ora parte del gruppo Tata, in fase di grande rinnovamento per diventare una compagnia aerea premium globale.',
        mainRoutes: ['Delhi (DEL) - Londra (LHR)', 'Mumbai (BOM) - New York (JFK)', 'Delhi (DEL) - Dubai (DXB)']
      },
      {
        name: 'Air New Zealand',
        logoUrl: 'https://logo.clearbit.com/airnewzealand.co.nz',
        website: 'https://www.airnewzealand.co.nz',
        loyaltyProgram: { name: 'Airpoints', url: 'https://www.airnewzealand.co.nz/airpoints', currencyName: 'Airpoints Dollars', tiers: ['Silver', 'Gold', 'Elite'] },
        hubs: {
            main: [{ code: 'AKL', name: 'Auckland Airport', city: 'Auckland' }],
            secondary: []
        },
        description: 'Compagnia di bandiera della Nuova Zelanda, famosa per i suoi video sulla sicurezza creativi e i voli a lungo raggio che collegano la nazione insulare al Pacifico e al mondo.',
        mainRoutes: ['Auckland (AKL) - Los Angeles (LAX)', 'Auckland (AKL) - Sydney (SYD)', 'Auckland (AKL) - Singapore (SIN)']
      },
      {
        name: 'Avianca',
        logoUrl: 'https://logo.clearbit.com/avianca.com',
        website: 'https://www.avianca.com',
        loyaltyProgram: { name: 'LifeMiles', url: 'https://www.lifemiles.com/', currencyName: 'Miglia', tiers: ['Red', 'Silver', 'Gold', 'Diamond'] },
        hubs: {
            main: [{ code: 'BOG', name: 'El Dorado International Airport', city: 'Bogotá' }],
            secondary: []
        },
        description: 'Compagnia di bandiera della Colombia e una delle più antiche al mondo, con una forte rete in America Latina.',
        mainRoutes: ['Bogotá (BOG) - Madrid (MAD)', 'Bogotá (BOG) - Miami (MIA)', 'Bogotá (BOG) - New York (JFK)']
      },
      {
        name: 'Brussels Airlines',
        logoUrl: 'https://logo.clearbit.com/brusselsairlines.com',
        website: 'https://www.brusselsairlines.com',
        loyaltyProgram: { name: 'Miles & More', url: 'https://www.miles-and-more.com/', currencyName: 'Miglia', tiers: ['Frequent Traveller', 'Senator', 'HON Circle Member'] },
        hubs: {
            main: [{ code: 'BRU', name: 'Brussels Airport', city: 'Bruxelles' }],
            secondary: []
        },
        description: 'Compagnia di bandiera del Belgio, parte del gruppo Lufthansa, specializzata nei collegamenti verso l\'Africa sub-sahariana.',
        mainRoutes: ['Bruxelles (BRU) - New York (JFK)', 'Bruxelles (BRU) - Kinshasa (FIH)', 'Bruxelles (BRU) - Francoforte (FRA)']
      },
      {
        name: 'Copa Airlines',
        logoUrl: 'https://logo.clearbit.com/copaair.com',
        website: 'https://www.copaair.com',
        loyaltyProgram: { name: 'ConnectMiles', url: 'https://www.copaair.com/en/web/gs/connectmiles', currencyName: 'Miglia', tiers: ['Silver', 'Gold', 'Platinum', 'Presidential'] },
        hubs: {
            main: [{ code: 'PTY', name: 'Tocumen International Airport', city: 'Panama City' }],
            secondary: []
        },
        description: 'Compagnia di bandiera di Panama, utilizza il suo "Hub of the Americas" per collegare in modo efficiente Nord, Centro e Sud America.',
        mainRoutes: ['Panama City (PTY) - Miami (MIA)', 'Panama City (PTY) - San Paolo (GRU)', 'Panama City (PTY) - Città del Messico (MEX)']
      },
      {
        name: 'Croatia Airlines',
        logoUrl: 'https://logo.clearbit.com/croatiaairlines.com',
        website: 'https://www.croatiaairlines.com',
        loyaltyProgram: { name: 'Miles & More', url: 'https://www.miles-and-more.com/', currencyName: 'Miglia', tiers: ['Frequent Traveller', 'Senator', 'HON Circle Member'] },
        hubs: {
            main: [{ code: 'ZAG', name: 'Zagreb Airport', city: 'Zagabria' }],
            secondary: []
        },
        description: 'Compagnia di bandiera della Croazia, collega il paese con le principali città europee, supportando il turismo locale.',
        mainRoutes: ['Zagabria (ZAG) - Francoforte (FRA)', 'Zagabria (ZAG) - Amsterdam (AMS)', 'Zagabria (ZAG) - Monaco (MUC)']
      },
      {
        name: 'EGYPTAIR',
        logoUrl: 'https://logo.clearbit.com/egyptair.com',
        website: 'https://www.egyptair.com',
        loyaltyProgram: { name: 'EGYPTAIR Plus', url: 'https://www.egyptair.com/en/Frequent-Flyer/', currencyName: 'Miglia', tiers: ['Blue', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'CAI', name: 'Cairo International Airport', city: 'Cairo' }],
            secondary: []
        },
        description: 'Compagnia di bandiera dell\'Egitto, con una rete che collega Africa, Medio Oriente, Europa, Asia e Americhe.',
        mainRoutes: ['Cairo (CAI) - Londra (LHR)', 'Cairo (CAI) - New York (JFK)', 'Cairo (CAI) - Jeddah (JED)']
      },
      {
        name: 'Ethiopian Airlines',
        logoUrl: 'https://logo.clearbit.com/ethiopianairlines.com',
        website: 'https://www.ethiopianairlines.com',
        loyaltyProgram: { name: 'ShebaMiles', url: 'https://www.ethiopianairlines.com/aa/shebamiles', currencyName: 'Miglia', tiers: ['Blue', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'ADD', name: 'Bole International Airport', city: 'Addis Abeba' }],
            secondary: []
        },
        description: 'Compagnia di bandiera dell\'Etiopia, la più grande compagnia aerea dell\'Africa, con una flotta moderna e una rete globale in rapida crescita.',
        mainRoutes: ['Addis Abeba (ADD) - Washington (IAD)', 'Addis Abeba (ADD) - Pechino (PEK)', 'Addis Abeba (ADD) - Dubai (DXB)']
      },
      {
        name: 'LOT Polish Airlines',
        logoUrl: 'https://logo.clearbit.com/lot.com',
        website: 'https://www.lot.com',
        loyaltyProgram: { name: 'Miles & More', url: 'https://www.miles-and-more.com/', currencyName: 'Miglia', tiers: ['Frequent Traveller', 'Senator', 'HON Circle Member'] },
        hubs: {
            main: [{ code: 'WAW', name: 'Warsaw Chopin Airport', city: 'Varsavia' }],
            secondary: []
        },
        description: 'Compagnia di bandiera della Polonia, una delle più antiche compagnie aeree del mondo, con una rete che collega l\'Europa centrale a Nord America e Asia.',
        mainRoutes: ['Varsavia (WAW) - Chicago (ORD)', 'Varsavia (WAW) - Tokyo (NRT)', 'Varsavia (WAW) - New York (JFK)']
      },
      {
        name: 'SAS',
        logoUrl: 'https://logo.clearbit.com/flysas.com',
        website: 'https://www.flysas.com',
        loyaltyProgram: { name: 'EuroBonus', url: 'https://www.flysas.com/en/eurobonus/', currencyName: 'Punti', tiers: ['Member', 'Silver', 'Gold', 'Diamond', 'Pandion'] },
        hubs: {
            main: [
                { code: 'CPH', name: 'Copenhagen Airport', city: 'Copenaghen' },
                { code: 'ARN', name: 'Stockholm Arlanda Airport', city: 'Stoccolma' },
                { code: 'OSL', name: 'Oslo Airport', city: 'Oslo' }
            ],
            secondary: []
        },
        description: 'Compagnia di bandiera di Danimarca, Norvegia e Svezia. Nota: Attualmente in transizione da Star Alliance a SkyTeam.',
        mainRoutes: ['Copenhagen (CPH) - New York (EWR)', 'Stoccolma (ARN) - Chicago (ORD)', 'Oslo (OSL) - Newark (EWR)']
      },
      {
        name: 'Shenzhen Airlines',
        logoUrl: 'https://logo.clearbit.com/shenzhenair.com',
        website: 'https://global.shenzhenair.com',
        loyaltyProgram: { name: 'PhoenixMiles', url: 'https://www.airchina.us/US/en/phoenixmiles/', currencyName: 'Chilometri', tiers: ['Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'SZX', name: 'Shenzhen Bao\'an International Airport', city: 'Shenzhen' }],
            secondary: []
        },
        description: 'Compagnia aerea cinese con base a Shenzhen, focalizzata principalmente sul mercato domestico ma con rotte internazionali in Asia.',
        mainRoutes: ['Shenzhen (SZX) - Pechino (PEK)', 'Shenzhen (SZX) - Tokyo (NRT)', 'Shenzhen (SZX) - Singapore (SIN)']
      },
      {
        name: 'South African Airways',
        logoUrl: 'https://logo.clearbit.com/flysaa.com',
        website: 'https://www.flysaa.com',
        loyaltyProgram: { name: 'Voyager', url: 'https://www.flysaa.com/za/en/voyagerLogin.action', currencyName: 'Miglia', tiers: ['Blue', 'Silver', 'Gold', 'Platinum', 'Lifetime Platinum'] },
        hubs: {
            main: [{ code: 'JNB', name: 'O. R. Tambo International Airport', city: 'Johannesburg' }],
            secondary: []
        },
        description: 'Compagnia di bandiera del Sudafrica. Ha ridotto significativamente le operazioni ma sta lentamente ricostruendo la sua rete continentale e intercontinentale.',
        mainRoutes: ['Johannesburg (JNB) - Città del Capo (CPT)', 'Johannesburg (JNB) - Perth (PER)', 'Johannesburg (JNB) - San Paolo (GRU)']
      },
      {
        name: 'THAI',
        logoUrl: 'https://logo.clearbit.com/thaiairways.com',
        website: 'https://www.thaiairways.com',
        loyaltyProgram: { name: 'Royal Orchid Plus', url: 'https://www.thaiairways.com/en_US/rop/rop_overview.page', currencyName: 'Miglia', tiers: ['Member', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'BKK', name: 'Suvarnabhumi Airport', city: 'Bangkok' }],
            secondary: []
        },
        description: 'Compagnia di bandiera della Thailandia, famosa per l\'ospitalità e il servizio premium a bordo, collega il Sud-est asiatico con il mondo.',
        mainRoutes: ['Bangkok (BKK) - Londra (LHR)', 'Bangkok (BKK) - Tokyo (NRT)', 'Bangkok (BKK) - Francoforte (FRA)']
      },
    ],
  },
  {
    name: 'oneworld',
    website: 'https://www.oneworld.com',
    logoUrl: 'https://logo.clearbit.com/oneworld.com',
    members: [
      {
        name: 'American Airlines',
        logoUrl: 'https://logo.clearbit.com/aa.com',
        website: 'https://www.aa.com',
        loyaltyProgram: { name: 'AAdvantage', url: 'https://www.aa.com/i18n/aadvantage-program/aadvantage-program.jsp', currencyName: 'Miglia AAdvantage', tiers: ['Gold', 'Platinum', 'Platinum Pro', 'Executive Platinum'] },
        hubs: {
          main: [
            { code: 'DFW', name: 'Dallas/Fort Worth International Airport', city: 'Dallas/Fort Worth' },
            { code: 'CLT', name: 'Charlotte Douglas International Airport', city: 'Charlotte' },
            { code: 'ORD', name: 'O\'Hare International Airport', city: 'Chicago' },
            { code: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles' },
            { code: 'MIA', name: 'Miami International Airport', city: 'Miami' },
            { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York' },
            { code: 'PHL', name: 'Philadelphia International Airport', city: 'Philadelphia' }
          ],
          secondary: [
            { code: 'DCA', name: 'Ronald Reagan Washington National Airport', city: 'Arlington' }
          ]
        },
        description: 'La più grande compagnia aerea del mondo per numero di passeggeri trasportati e dimensione della flotta, con un\'enorme rete nazionale negli Stati Uniti.',
        mainRoutes: ['Dallas/Fort Worth (DFW) - Londra (LHR)', 'New York (JFK) - Los Angeles (LAX)', 'Miami (MIA) - San Paolo (GRU)', 'Dallas/Fort Worth (DFW) - Tokyo (HND)', 'New York (JFK) - Parigi (CDG)', 'Miami (MIA) - Madrid (MAD)', 'Chicago (ORD) - Roma (FCO)', 'Los Angeles (LAX) - Sydney (SYD)', 'Philadelphia (PHL) - Amsterdam (AMS)']
      },
      {
        name: 'British Airways',
        logoUrl: 'https://logo.clearbit.com/britishairways.com',
        website: 'https://www.britishairways.com',
        loyaltyProgram: { name: 'Executive Club', url: 'https://www.britishairways.com/executive-club', currencyName: 'Avios', tiers: ['Blue', 'Bronze', 'Silver', 'Gold'] },
        hubs: {
          main: [
            { code: 'LHR', name: 'Heathrow Airport', city: 'Londra' },
            { code: 'LGW', name: 'Gatwick Airport', city: 'Londra' }
          ],
          secondary: []
        },
        description: 'Compagnia di bandiera del Regno Unito, con sede principale a Londra Heathrow, uno degli hub più trafficati del mondo.',
        mainRoutes: ['Londra (LHR) - New York (JFK)', 'Londra (LHR) - Hong Kong (HKG)', 'Londra (LHR) - Dubai (DXB)', 'Londra (LHR) - Singapore (SIN)', 'Londra (LHR) - Los Angeles (LAX)', 'Londra (LHR) - Tokyo (HND)', 'Londra (LHR) - Johannesburg (JNB)', 'Londra (LHR) - Toronto (YYZ)', 'Londra (LHR) - Sydney (SYD)', 'Londra (LGW) - Orlando (MCO)']
      },
      {
        name: 'Cathay Pacific',
        logoUrl: 'https://logo.clearbit.com/cathaypacific.com',
        website: 'https://www.cathaypacific.com',
        loyaltyProgram: { name: 'Asia Miles', url: 'https://www.cathaypacific.com/cx/en_US/membership.html', currencyName: 'Asia Miles', tiers: ['Green', 'Silver', 'Gold', 'Diamond'] },
        hubs: {
          main: [{ code: 'HKG', name: 'Hong Kong International Airport', city: 'Hong Kong' }],
          secondary: []
        },
        description: 'Compagnia aerea premium con sede a Hong Kong, nota per la qualità del servizio e la moderna flotta di aerei a fusoliera larga.',
        mainRoutes: ['Hong Kong (HKG) - Londra (LHR)', 'Hong Kong (HKG) - New York (JFK)', 'Hong Kong (HKG) - Vancouver (YVR)']
      },
      {
        name: 'Qatar Airways',
        logoUrl: 'https://logo.clearbit.com/qatarairways.com',
        website: 'https://www.qatarairways.com',
        loyaltyProgram: { name: 'Privilege Club', url: 'https://www.qatarairways.com/en/Privilege-Club.html', currencyName: 'Avios', tiers: ['Burgundy', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
          main: [{ code: 'DOH', name: 'Hamad International Airport', city: 'Doha' }],
          secondary: []
        },
        description: 'Compagnia aerea a cinque stelle con sede a Doha, offre un servizio di lusso e una rete in rapida espansione in tutto il mondo.',
        mainRoutes: ['Doha (DOH) - Londra (LHR)', 'Doha (DOH) - Parigi (CDG)', 'Doha (DOH) - Bangkok (BKK)', 'Doha (DOH) - New York (JFK)', 'Doha (DOH) - Sydney (SYD)', 'Doha (DOH) - Tokyo (HND)', 'Doha (DOH) - Los Angeles (LAX)', 'Doha (DOH) - San Paolo (GRU)', 'Doha (DOH) - Città del Capo (CPT)', 'Doha (DOH) - Malé (MLE)']
      },
      {
        name: 'Iberia',
        logoUrl: 'https://logo.clearbit.com/iberia.com',
        website: 'https://www.iberia.com',
        loyaltyProgram: { name: 'Iberia Plus', url: 'https://www.iberia.com/us/iberiaplus/', currencyName: 'Avios', tiers: ['Clasica', 'Plata', 'Oro', 'Platino', 'Infinita'] },
        hubs: {
          main: [{ code: 'MAD', name: 'Adolfo Suárez Madrid–Barajas Airport', city: 'Madrid' }],
          secondary: []
        },
        description: 'Compagnia di bandiera spagnola, leader per i collegamenti tra l\'Europa e l\'America Latina.',
        mainRoutes: ['Madrid (MAD) - Buenos Aires (EZE)', 'Madrid (MAD) - Città del Messico (MEX)', 'Madrid (MAD) - New York (JFK)']
      },
      {
        name: 'Qantas',
        logoUrl: 'https://logo.clearbit.com/qantas.com',
        website: 'https://www.qantas.com',
        loyaltyProgram: { name: 'Qantas Frequent Flyer', url: 'https://www.qantas.com/us/en/frequent-flyer.html', currencyName: 'Punti Qantas', tiers: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Platinum One'] },
        hubs: {
            main: [
                { code: 'SYD', name: 'Sydney Airport', city: 'Sydney' },
                { code: 'MEL', name: 'Melbourne Airport', city: 'Melbourne' }
            ],
            secondary: [{ code: 'BNE', name: 'Brisbane Airport', city: 'Brisbane' }]
        },
        description: 'Compagnia di bandiera australiana e una delle più antiche al mondo. Famosa per la sicurezza e i voli a lungo raggio.',
        mainRoutes: ['Sydney (SYD) - Londra (LHR)', 'Sydney (SYD) - Los Angeles (LAX)', 'Melbourne (MEL) - Singapore (SIN)']
      },
      {
        name: 'Japan Airlines',
        logoUrl: 'https://logo.clearbit.com/jal.co.jp',
        website: 'https://www.jal.co.jp',
        loyaltyProgram: { name: 'JAL Mileage Bank', url: 'https://www.jal.co.jp/jp/en/jmb/', currencyName: 'Miglia', tiers: ['Crystal', 'Sapphire', 'Premier', 'Diamond'] },
        hubs: {
            main: [
                { code: 'HND', name: 'Haneda Airport', city: 'Tokyo' },
                { code: 'NRT', name: 'Narita International Airport', city: 'Tokyo' }
            ],
            secondary: []
        },
        description: 'Compagnia di bandiera del Giappone, celebre per il servizio impeccabile ("omotenashi") e la puntualità.',
        mainRoutes: ['Tokyo (HND) - New York (JFK)', 'Tokyo (NRT) - Londra (LHR)', 'Tokyo (HND) - Parigi (CDG)']
      },
      {
        name: 'Finnair',
        logoUrl: 'https://logo.clearbit.com/finnair.com',
        website: 'https://www.finnair.com',
        loyaltyProgram: { name: 'Finnair Plus', url: 'https://www.finnair.com/us-en/finnair-plus', currencyName: 'Avios', tiers: ['Basic', 'Silver', 'Gold', 'Platinum', 'Platinum Lumo'] },
        hubs: {
            main: [{ code: 'HEL', name: 'Helsinki-Vantaa Airport', city: 'Helsinki' }],
            secondary: []
        },
        description: 'Compagnia di bandiera finlandese, specializzata nelle rotte più brevi tra Europa e Asia grazie alla posizione geografica del suo hub.',
        mainRoutes: ['Helsinki (HEL) - Tokyo (NRT)', 'Helsinki (HEL) - New York (JFK)', 'Helsinki (HEL) - Shanghai (PVG)']
      },
      {
        name: 'Alaska Airlines',
        logoUrl: 'https://logo.clearbit.com/alaskaair.com',
        website: 'https://www.alaskaair.com',
        loyaltyProgram: { name: 'Mileage Plan', url: 'https://www.alaskaair.com/content/mileage-plan', currencyName: 'Miglia', tiers: ['MVP', 'MVP Gold', 'MVP Gold 75K', 'MVP Gold 100K'] },
        hubs: {
            main: [{ code: 'SEA', name: 'Seattle–Tacoma International Airport', city: 'Seattle' }],
            secondary: [
                { code: 'ANC', name: 'Ted Stevens Anchorage International Airport', city: 'Anchorage' },
                { code: 'PDX', name: 'Portland International Airport', city: 'Portland' },
                { code: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles' }
            ]
        },
        description: 'Compagnia aerea statunitense con una forte presenza sulla costa occidentale degli USA. Apprezzata per il servizio clienti.',
        mainRoutes: ['Seattle (SEA) - New York (JFK)', 'Los Angeles (LAX) - Honolulu (HNL)', 'Seattle (SEA) - Anchorage (ANC)']
      },
      {
        name: 'Fiji Airways',
        logoUrl: 'https://logo.clearbit.com/fijiairways.com',
        website: 'https://www.fijiairways.com',
        loyaltyProgram: { name: 'Tabua Club', url: 'https://www.fijiairways.com/tabua-club', currencyName: 'Punti di Status', tiers: ['Tabua Club', 'Tabua Club Plus'] },
        hubs: {
            main: [{ code: 'NAN', name: 'Nadi International Airport', city: 'Nadi' }],
            secondary: []
        },
        description: 'Compagnia di bandiera delle Figi, che collega le isole del Pacifico con destinazioni internazionali in Oceania, Asia e Nord America.',
        mainRoutes: ['Nadi (NAN) - Los Angeles (LAX)', 'Nadi (NAN) - Sydney (SYD)', 'Nadi (NAN) - Auckland (AKL)']
      },
      {
        name: 'Malaysia Airlines',
        logoUrl: 'https://logo.clearbit.com/malaysiaairlines.com',
        website: 'https://www.malaysiaairlines.com',
        loyaltyProgram: { name: 'Enrich', url: 'https://www.malaysiaairlines.com/my/en/enrich.html', currencyName: 'Miglia Enrich', tiers: ['Blue', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'KUL', name: 'Kuala Lumpur International Airport', city: 'Kuala Lumpur' }],
            secondary: []
        },
        description: 'Compagnia di bandiera della Malesia, rinomata per la sua ospitalità. Offre un\'ampia rete in tutto il Sud-est asiatico, l\'Asia e oltre.',
        mainRoutes: ['Kuala Lumpur (KUL) - Londra (LHR)', 'Kuala Lumpur (KUL) - Sydney (SYD)', 'Kuala Lumpur (KUL) - Tokyo (NRT)']
      },
      {
        name: 'Oman Air',
        logoUrl: 'https://logo.clearbit.com/omanair.com',
        website: 'https://www.omanair.com',
        loyaltyProgram: { name: 'Sindbad', url: 'https://sindbad.omanair.com/en/', currencyName: 'Miglia Sindbad', tiers: ['Blue', 'Silver', 'Gold'] },
        hubs: {
            main: [{ code: 'MCT', name: 'Muscat International Airport', city: 'Muscat' }],
            secondary: []
        },
        description: 'Compagnia di bandiera dell\'Oman, l\'ultimo membro ad entrare in oneworld. Nota per il suo servizio premium e la crescita strategica.',
        mainRoutes: ['Muscat (MCT) - Londra (LHR)', 'Muscat (MCT) - Bangkok (BKK)', 'Muscat (MCT) - Francoforte (FRA)']
      },
      {
        name: 'Royal Air Maroc',
        logoUrl: 'https://logo.clearbit.com/royalairmaroc.com',
        website: 'https://www.royalairmaroc.com',
        loyaltyProgram: { name: 'Safar Flyer', url: 'https://www.royalairmaroc.com/us-en/safar-flyer', currencyName: 'Miglia', tiers: ['Blue', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'CMN', name: 'Mohammed V International Airport', city: 'Casablanca' }],
            secondary: []
        },
        description: 'Compagnia di bandiera del Marocco e primo membro africano di oneworld, con un forte network tra Europa, Africa e Nord America.',
        mainRoutes: ['Casablanca (CMN) - Parigi (CDG)', 'Casablanca (CMN) - New York (JFK)', 'Casablanca (CMN) - Montreal (YUL)']
      },
      {
        name: 'Royal Jordanian',
        logoUrl: 'https://logo.clearbit.com/rj.com',
        website: 'https://www.rj.com',
        loyaltyProgram: { name: 'Royal Club', url: 'https://www.rj.com/en/royal-club', currencyName: 'Miglia', tiers: ['Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'AMM', name: 'Queen Alia International Airport', city: 'Amman' }],
            secondary: []
        },
        description: 'Compagnia di bandiera della Giordania, che offre un ponte strategico tra il Medio Oriente e il resto del mondo.',
        mainRoutes: ['Amman (AMM) - Londra (LHR)', 'Amman (AMM) - Chicago (ORD)', 'Amman (AMM) - Francoforte (FRA)']
      },
      {
        name: 'SriLankan Airlines',
        logoUrl: 'https://logo.clearbit.com/srilankan.com',
        website: 'https://www.srilankan.com',
        loyaltyProgram: { name: 'FlySmiLes', url: 'https://www.srilankan.com/flysmiles', currencyName: 'Miglia', tiers: ['Blue', 'Classic', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'CMB', name: 'Bandaranaike International Airport', city: 'Colombo' }],
            secondary: []
        },
        description: 'Compagnia di bandiera dello Sri Lanka, che offre collegamenti vitali verso l\'India, il Medio Oriente e oltre.',
        mainRoutes: ['Colombo (CMB) - Londra (LHR)', 'Colombo (CMB) - Melbourne (MEL)', 'Colombo (CMB) - Malé (MLE)']
      },
    ],
  },
  {
    name: 'SkyTeam',
    website: 'https://www.skyteam.com',
    logoUrl: 'https://logo.clearbit.com/skyteam.com',
    members: [
      {
        name: 'Delta Air Lines',
        logoUrl: 'https://logo.clearbit.com/delta.com',
        website: 'https://www.delta.com',
        loyaltyProgram: { name: 'SkyMiles', url: 'https://www.delta.com/us/en/skymiles/overview', currencyName: 'Miglia', tiers: ['Silver Medallion', 'Gold Medallion', 'Platinum Medallion', 'Diamond Medallion'] },
        hubs: {
          main: [
            { code: 'ATL', name: 'Hartsfield–Jackson Atlanta International Airport', city: 'Atlanta' },
            { code: 'DTW', name: 'Detroit Metropolitan Wayne County Airport', city: 'Detroit' },
            { code: 'LAX', name: 'Los Angeles International Airport', city: 'Los Angeles' },
            { code: 'MSP', name: 'Minneapolis–Saint Paul International Airport', city: 'Minneapolis' },
            { code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York' },
            { code: 'SLC', name: 'Salt Lake City International Airport', city: 'Salt Lake City' },
            { code: 'SEA', name: 'Seattle–Tacoma International Airport', city: 'Seattle' }
          ],
          secondary: [
            { code: 'BOS', name: 'Logan International Airport', city: 'Boston' }
          ]
        },
        description: 'Una delle più antiche e grandi compagnie aeree del mondo, offre una vasta rete di voli nazionali e internazionali.',
        mainRoutes: ['Atlanta (ATL) - Amsterdam (AMS)', 'New York (JFK) - Parigi (CDG)', 'Los Angeles (LAX) - Tokyo (HND)', 'Atlanta (ATL) - Londra (LHR)', 'Detroit (DTW) - Seoul (ICN)', 'Seattle (SEA) - Shanghai (PVG)', 'Minneapolis (MSP) - Tokyo (HND)', 'Salt Lake City (SLC) - Parigi (CDG)', 'Atlanta (ATL) - Johannesburg (JNB)', 'New York (JFK) - Roma (FCO)']
      },
      {
        name: 'Air France',
        logoUrl: 'https://logo.clearbit.com/airfrance.com',
        website: 'https://www.airfrance.com',
        loyaltyProgram: { name: 'Flying Blue', url: 'https://www.flyingblue.us/en/', currencyName: 'Miglia', tiers: ['Explorer', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
          main: [
            { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Parigi' },
            { code: 'ORY', name: 'Orly Airport', city: 'Parigi' }
          ],
          secondary: [
            { code: 'LYS', name: 'Lyon–Saint-Exupéry Airport', city: 'Lione' }
          ]
        },
        description: 'Compagnia di bandiera francese, simbolo di stile ed eleganza nel settore aereo, con un forte network europeo e intercontinentale.',
        mainRoutes: ['Parigi (CDG) - New York (JFK)', 'Parigi (CDG) - Tokyo (HND)', 'Parigi (CDG) - Dubai (DXB)', 'Parigi (CDG) - Los Angeles (LAX)', 'Parigi (CDG) - Singapore (SIN)', 'Parigi (CDG) - San Paolo (GRU)', 'Parigi (CDG) - Shanghai (PVG)', 'Parigi (CDG) - Johannesburg (JNB)', 'Parigi (CDG) - Hong Kong (HKG)', 'Lione (LYS) - Montreal (YUL)']
      },
      {
        name: 'KLM',
        logoUrl: 'https://logo.clearbit.com/klm.com',
        website: 'https://www.klm.com',
        loyaltyProgram: { name: 'Flying Blue', url: 'https://www.flyingblue.us/en/', currencyName: 'Miglia', tiers: ['Explorer', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
          main: [{ code: 'AMS', name: 'Amsterdam Airport Schiphol', city: 'Amsterdam' }],
          secondary: []
        },
        description: 'La più antica compagnia aerea del mondo ancora operativa con il suo nome originale. Con sede ad Amsterdam, è nota per la sua affidabilità.',
        mainRoutes: ['Amsterdam (AMS) - New York (JFK)', 'Amsterdam (AMS) - Singapore (SIN)', 'Amsterdam (AMS) - Città del Messico (MEX)']
      },
      {
        name: 'Korean Air',
        logoUrl: 'https://logo.clearbit.com/koreanair.com',
        website: 'https://www.koreanair.com',
        loyaltyProgram: { name: 'SKYPASS', url: 'https://www.koreanair.com/us/en/skypass', currencyName: 'Miglia', tiers: ['Morning Calm', 'Morning Calm Premium', 'Million Miler'] },
        hubs: {
          main: [{ code: 'ICN', name: 'Incheon International Airport', city: 'Seoul' }],
          secondary: [{ code: 'GMP', name: 'Gimpo International Airport', city: 'Seoul' }]
        },
        description: 'Compagnia di bandiera della Corea del Sud, con una forte presenza in Asia e una rete in crescita verso l\'America e l\'Europa.',
        mainRoutes: ['Seoul (ICN) - Los Angeles (LAX)', 'Seoul (ICN) - New York (JFK)', 'Seoul (ICN) - Parigi (CDG)']
      },
      {
        name: 'ITA Airways',
        logoUrl: 'https://logo.clearbit.com/ita-airways.com',
        website: 'https://www.ita-airways.com',
        loyaltyProgram: { name: 'Volare', url: 'https://www.ita-airways.com/en_us/volare.html', currencyName: 'Punti Volare', tiers: ['Smart', 'Plus', 'Premium', 'Executive'] },
        hubs: {
          main: [{ code: 'FCO', name: 'Leonardo da Vinci–Fiumicino Airport', city: 'Roma' }],
          secondary: [{ code: 'LIN', name: 'Linate Airport', city: 'Milano' }]
        },
        description: 'La nuova compagnia di bandiera italiana, nata nel 2021. Si concentra sui collegamenti dall\'Italia verso destinazioni europee e intercontinentali.',
        mainRoutes: ['Roma (FCO) - New York (JFK)', 'Roma (FCO) - Tokyo (HND)', 'Milano (LIN) - Londra (LCY)', 'Roma (FCO) - Los Angeles (LAX)', 'Roma (FCO) - Buenos Aires (EZE)', 'Roma (FCO) - San Paolo (GRU)', 'Milano (MXP) - New York (JFK)', 'Roma (FCO) - Miami (MIA)', 'Roma (FCO) - Boston (BOS)', 'Roma (FCO) - Delhi (DEL)']
      },
      {
        name: 'Aeromexico',
        logoUrl: 'https://logo.clearbit.com/aeromexico.com',
        website: 'https://www.aeromexico.com',
        loyaltyProgram: { name: 'Club Premier', url: 'https://clubpremier.com/', currencyName: 'Punti Premier', tiers: ['Clasico', 'Oro', 'Platino', 'Titanio'] },
        hubs: {
            main: [{ code: 'MEX', name: 'Mexico City International Airport', city: 'Città del Messico' }],
            secondary: [
                { code: 'GDL', name: 'Guadalajara International Airport', city: 'Guadalajara' },
                { code: 'MTY', name: 'Monterrey International Airport', city: 'Monterrey' }
            ]
        },
        description: 'Compagnia di bandiera del Messico, offre un\'ampia rete di collegamenti in America Latina, Nord America, Europa e Asia.',
        mainRoutes: ['Città del Messico (MEX) - Madrid (MAD)', 'Città del Messico (MEX) - Parigi (CDG)', 'Città del Messico (MEX) - New York (JFK)']
      },
      {
        name: 'Virgin Atlantic',
        logoUrl: 'https://logo.clearbit.com/virginatlantic.com',
        website: 'https://www.virginatlantic.com',
        loyaltyProgram: { name: 'Flying Club', url: 'https://flywith.virginatlantic.com/gb/en/flying-club.html', currencyName: 'Punti Virgin', tiers: ['Red', 'Silver', 'Gold'] },
        hubs: {
            main: [
                { code: 'LHR', name: 'Heathrow Airport', city: 'Londra' },
                { code: 'MAN', name: 'Manchester Airport', city: 'Manchester' }
            ],
            secondary: []
        },
        description: 'Compagnia aerea britannica nota per il suo stile innovativo e il servizio clienti. Specializzata in rotte transatlantiche.',
        mainRoutes: ['Londra (LHR) - New York (JFK)', 'Londra (LHR) - Los Angeles (LAX)', 'Manchester (MAN) - Orlando (MCO)']
      },
      {
        name: 'China Airlines',
        logoUrl: 'https://logo.clearbit.com/china-airlines.com',
        website: 'https://www.china-airlines.com',
        loyaltyProgram: { name: 'Dynasty Flyer', url: 'https://www.china-airlines.com/us/en/member/dynasty-flyer/index', currencyName: 'Miglia', tiers: ['Dynasty', 'Gold', 'Emerald', 'Paragon'] },
        hubs: {
            main: [{ code: 'TPE', name: 'Taoyuan International Airport', city: 'Taipei' }],
            secondary: []
        },
        description: 'Compagnia di bandiera di Taiwan (Repubblica di Cina), con una rete estesa in Asia, Europa, Nord America e Oceania.',
        mainRoutes: ['Taipei (TPE) - Los Angeles (LAX)', 'Taipei (TPE) - Amsterdam (AMS)', 'Taipei (TPE) - Francoforte (FRA)']
      },
      {
        name: 'Vietnam Airlines',
        logoUrl: 'https://logo.clearbit.com/vietnamairlines.com',
        website: 'https://www.vietnamairlines.com',
        loyaltyProgram: { name: 'Lotusmiles', url: 'https://www.vietnamairlines.com/us/en/lotusmile/program-overview', currencyName: 'Miglia', tiers: ['Silver', 'Titanium', 'Gold', 'Platinum', 'Million Miler'] },
        hubs: {
            main: [
                { code: 'HAN', name: 'Noi Bai International Airport', city: 'Hanoi' },
                { code: 'SGN', name: 'Tan Son Nhat International Airport', city: 'Ho Chi Minh City' }
            ],
            secondary: []
        },
        description: 'Compagnia di bandiera del Vietnam, in rapida crescita e con una moderna flotta che collega il Sud-est asiatico con il resto del mondo.',
        mainRoutes: ['Hanoi (HAN) - Parigi (CDG)', 'Ho Chi Minh (SGN) - Francoforte (FRA)', 'Hanoi (HAN) - Tokyo (NRT)']
      },
      {
        name: 'Aerolíneas Argentinas',
        logoUrl: 'https://logo.clearbit.com/aerolineas.com.ar',
        website: 'https://www.aerolineas.com.ar',
        loyaltyProgram: { name: 'Aerolíneas Plus', url: 'https://www.aerolineas.com.ar/en-us/aerolineas_plus', currencyName: 'Miglia', tiers: ['Clasica', 'Oro', 'Platino'] },
        hubs: {
            main: [
              { code: 'EZE', name: 'Ministro Pistarini International Airport', city: 'Buenos Aires' },
              { code: 'AEP', name: 'Aeroparque Jorge Newbery', city: 'Buenos Aires' }
            ],
            secondary: []
        },
        description: 'Compagnia di bandiera dell\'Argentina, offre una vasta rete di voli nazionali e internazionali che collegano il Sud America al mondo.',
        mainRoutes: ['Buenos Aires (EZE) - Madrid (MAD)', 'Buenos Aires (EZE) - Miami (MIA)', 'Buenos Aires (AEP) - San Paolo (GRU)']
      },
      {
        name: 'Air Europa',
        logoUrl: 'https://logo.clearbit.com/aireuropa.com',
        website: 'https://www.aireuropa.com',
        loyaltyProgram: { name: 'SUMA', url: 'https://www.aireuropa.com/us/en/aea/suma/get-to-know-us.html', currencyName: 'Miglia SUMA', tiers: ['Suma', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'MAD', name: 'Adolfo Suárez Madrid–Barajas Airport', city: 'Madrid' }],
            secondary: []
        },
        description: 'La terza compagnia aerea spagnola, con una forte rete che collega la Spagna con l\'America Latina, i Caraibi e altre destinazioni europee.',
        mainRoutes: ['Madrid (MAD) - Buenos Aires (EZE)', 'Madrid (MAD) - Miami (MIA)', 'Madrid (MAD) - L\'Avana (HAV)']
      },
      {
        name: 'China Eastern Airlines',
        logoUrl: 'https://logo.clearbit.com/ceair.com',
        website: 'https://us.ceair.com',
        loyaltyProgram: { name: 'Eastern Miles', url: 'https://us.ceair.com/en/eastern-miles.html', currencyName: 'Punti', tiers: ['Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [
              { code: 'PVG', name: 'Shanghai Pudong International Airport', city: 'Shanghai' },
              { code: 'SHA', name: 'Shanghai Hongqiao International Airport', city: 'Shanghai' }
            ],
            secondary: []
        },
        description: 'Una delle tre maggiori compagnie aeree cinesi, con un\'enorme rete domestica e internazionale centrata sul suo hub di Shanghai.',
        mainRoutes: ['Shanghai (PVG) - Los Angeles (LAX)', 'Shanghai (PVG) - Parigi (CDG)', 'Shanghai (PVG) - New York (JFK)']
      },
      {
        name: 'Czech Airlines',
        logoUrl: 'https://logo.clearbit.com/csa.cz',
        website: 'https://www.csa.cz',
        loyaltyProgram: { name: 'OK Plus', url: 'https://www.csa.cz/us-en/ok-plus-program/', currencyName: 'Miglia', tiers: ['Member', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'PRG', name: 'Václav Havel Airport Prague', city: 'Praga' }],
            secondary: []
        },
        description: 'Compagnia di bandiera della Repubblica Ceca e una delle più antiche del mondo. Attualmente opera su una scala ridotta concentrandosi su rotte europee chiave.',
        mainRoutes: ['Praga (PRG) - Parigi (CDG)', 'Praga (PRG) - Amsterdam (AMS)', 'Praga (PRG) - Madrid (MAD)']
      },
      {
        name: 'Garuda Indonesia',
        logoUrl: 'https://logo.clearbit.com/garuda-indonesia.com',
        website: 'https://www.garuda-indonesia.com',
        loyaltyProgram: { name: 'GarudaMiles', url: 'https://www.garuda-indonesia.com/id/en/garudamiles', currencyName: 'Miglia', tiers: ['Blue', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'CGK', name: 'Soekarno–Hatta International Airport', city: 'Jakarta' }],
            secondary: [{ code: 'DPS', name: 'Ngurah Rai International Airport', city: 'Denpasar' }]
        },
        description: 'Compagnia di bandiera dell\'Indonesia, nota per il suo servizio a 5 stelle e l\'ospitalità. Collega l\'arcipelago con destinazioni in Asia, Australia ed Europa.',
        mainRoutes: ['Jakarta (CGK) - Amsterdam (AMS)', 'Jakarta (CGK) - Sydney (SYD)', 'Denpasar (DPS) - Tokyo (NRT)']
      },
      {
        name: 'Kenya Airways',
        logoUrl: 'https://logo.clearbit.com/kenya-airways.com',
        website: 'https://www.kenya-airways.com',
        loyaltyProgram: { name: 'Asante Rewards', url: 'https://asantirewards.kenya-airways.com/en', currencyName: 'Punti', tiers: ['Ruby', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'NBO', name: 'Jomo Kenyatta International Airport', city: 'Nairobi' }],
            secondary: []
        },
        description: 'Compagnia di bandiera del Kenya, soprannominata "l\'Orgoglio dell\'Africa". Collega il continente con l\'Europa, l\'Asia e il Nord America.',
        mainRoutes: ['Nairobi (NBO) - New York (JFK)', 'Nairobi (NBO) - Londra (LHR)', 'Nairobi (NBO) - Amsterdam (AMS)']
      },
      {
        name: 'Middle East Airlines',
        logoUrl: 'https://logo.clearbit.com/mea.com.lb',
        website: 'https://www.mea.com.lb',
        loyaltyProgram: { name: 'Cedar Miles', url: 'https://www.mea.com.lb/english/cedar-miles', currencyName: 'Miglia', tiers: ['Blue', 'Silver', 'Gold', 'President\'s Club'] },
        hubs: {
            main: [{ code: 'BEY', name: 'Beirut–Rafic Hariri International Airport', city: 'Beirut' }],
            secondary: []
        },
        description: 'Compagnia di bandiera del Libano, con una forte rete che collega il Medio Oriente con l\'Europa e l\'Africa.',
        mainRoutes: ['Beirut (BEY) - Parigi (CDG)', 'Beirut (BEY) - Londra (LHR)', 'Beirut (BEY) - Dubai (DXB)']
      },
      {
        name: 'Saudia',
        logoUrl: 'https://logo.clearbit.com/saudia.com',
        website: 'https://www.saudia.com',
        loyaltyProgram: { name: 'Al Fursan', url: 'https://www.saudia.com/en-SA/alfursan', currencyName: 'Miglia Reward', tiers: ['Green', 'Silver', 'Gold'] },
        hubs: {
            main: [
              { code: 'JED', name: 'King Abdulaziz International Airport', city: 'Jeddah' },
              { code: 'RUH', name: 'King Khalid International Airport', city: 'Riyadh' }
            ],
            secondary: []
        },
        description: 'Compagnia di bandiera dell\'Arabia Saudita. Con una flotta moderna, opera una vasta rete di rotte nazionali e internazionali.',
        mainRoutes: ['Jeddah (JED) - Londra (LHR)', 'Riyadh (RUH) - New York (JFK)', 'Jeddah (JED) - Parigi (CDG)']
      },
      {
        name: 'TAROM',
        logoUrl: 'https://logo.clearbit.com/tarom.ro',
        website: 'https://www.tarom.ro',
        loyaltyProgram: { name: 'Flying Blue', url: 'https://www.flyingblue.us/en/', currencyName: 'Miglia', tiers: ['Explorer', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'OTP', name: 'Henri Coandă International Airport', city: 'Bucarest' }],
            secondary: []
        },
        description: 'Compagnia di bandiera della Romania, offre collegamenti dalle principali città rumene a destinazioni in Europa e nel Medio Oriente.',
        mainRoutes: ['Bucarest (OTP) - Amsterdam (AMS)', 'Bucarest (OTP) - Parigi (CDG)', 'Bucarest (OTP) - Madrid (MAD)']
      },
    ],
  },
];

export const INDEPENDENT_AIRLINES_DATA: Airline[] = [
    {
        name: 'Emirates',
        logoUrl: 'https://logo.clearbit.com/emirates.com',
        website: 'https://www.emirates.com',
        loyaltyProgram: { name: 'Skywards', url: 'https://www.emirates.com/us/english/skywards/', currencyName: 'Miglia Skywards', tiers: ['Blue', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'DXB', name: 'Dubai International Airport', city: 'Dubai' }],
            secondary: []
        },
        description: 'Una delle compagnie aeree più grandi e prestigiose al mondo, con sede a Dubai. Nota per la sua flotta moderna, il servizio di lusso e una rete globale che collega tutti i continenti.',
        mainRoutes: ['Dubai (DXB) - Londra (LHR)', 'Dubai (DXB) - New York (JFK)', 'Dubai (DXB) - Sydney (SYD)', 'Dubai (DXB) - Parigi (CDG)', 'Dubai (DXB) - Bangkok (BKK)', 'Dubai (DXB) - Singapore (SIN)', 'Dubai (DXB) - Los Angeles (LAX)', 'Dubai (DXB) - Tokyo (NRT)', 'Dubai (DXB) - Johannesburg (JNB)', 'Dubai (DXB) - San Paolo (GRU)']
    },
    {
        name: 'Etihad Airways',
        logoUrl: 'https://logo.clearbit.com/etihad.com',
        website: 'https://www.etihad.com',
        loyaltyProgram: { name: 'Etihad Guest', url: 'https://www.etihadguest.com/', currencyName: 'Miglia Etihad Guest', tiers: ['Bronze', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [{ code: 'AUH', name: 'Abu Dhabi International Airport', city: 'Abu Dhabi' }],
            secondary: []
        },
        description: 'Compagnia di bandiera degli Emirati Arabi Uniti, con sede ad Abu Dhabi. Offre un\'esperienza di viaggio premium con cabine innovative come "The Residence".',
        mainRoutes: ['Abu Dhabi (AUH) - Londra (LHR)', 'Abu Dhabi (AUH) - New York (JFK)', 'Abu Dhabi (AUH) - Parigi (CDG)']
    },
    {
        name: 'Ryanair',
        logoUrl: 'https://logo.clearbit.com/ryanair.com',
        website: 'https://www.ryanair.com',
        loyaltyProgram: { name: 'myRyanair', url: 'https://www.ryanair.com/', currencyName: 'Crediti di viaggio', tiers: [] },
        hubs: {
            main: [], // Ryanair opera con un modello point-to-point e ha numerose basi operative
            secondary: [
                { code: 'DUB', name: 'Dublin Airport', city: 'Dublino' },
                { code: 'STN', name: 'London Stansted Airport', city: 'Londra' },
                { code: 'BGY', name: 'Orio al Serio International Airport', city: 'Bergamo' }
            ]
        },
        description: 'La più grande compagnia aerea low-cost d\'Europa, nota per le sue tariffe estremamente competitive e una vastissima rete di rotte a corto e medio raggio.',
        mainRoutes: ['Londra (STN) - Dublino (DUB)', 'Bergamo (BGY) - Barcellona (BCN)', 'Dublino (DUB) - Roma (CIA)']
    },
    {
        name: 'Southwest Airlines',
        logoUrl: 'https://logo.clearbit.com/southwest.com',
        website: 'https://www.southwest.com',
        loyaltyProgram: { name: 'Rapid Rewards', url: 'https://www.southwest.com/rapidrewards/', currencyName: 'Punti Rapid Rewards', tiers: ['A-List', 'A-List Preferred', 'Companion Pass'] },
        hubs: {
            main: [], // Anche Southwest opera con un modello point-to-point e ha molte città focus
            secondary: [
                { code: 'DAL', name: 'Dallas Love Field', city: 'Dallas' },
                { code: 'DEN', name: 'Denver International Airport', city: 'Denver' },
                { code: 'MDW', name: 'Midway International Airport', city: 'Chicago' }
            ]
        },
        description: 'La più grande compagnia aerea low-cost del mondo, opera principalmente negli Stati Uniti. Famosa per la politica "Bags Fly Free" e l\'assenza di costi di cambio.',
        mainRoutes: ['Los Angeles (LAX) - Las Vegas (LAS)', 'Chicago (MDW) - New York (LGA)', 'Denver (DEN) - Phoenix (PHX)']
    },
    {
        name: 'LATAM Airlines',
        logoUrl: 'https://logo.clearbit.com/latam.com',
        website: 'https://www.latam.com',
        loyaltyProgram: { name: 'LATAM Pass', url: 'https://www.latam.com/en_us/latam-pass/', currencyName: 'Miglia LATAM Pass', tiers: ['Gold', 'Gold Plus', 'Platinum', 'Black', 'Black Signature'] },
        hubs: {
            main: [
                { code: 'SCL', name: 'Arturo Merino Benítez Airport', city: 'Santiago' },
                { code: 'GRU', name: 'São Paulo/Guarulhos Airport', city: 'San Paolo' },
                { code: 'LIM', name: 'Jorge Chávez International Airport', city: 'Lima' }
            ],
            secondary: [{ code: 'BOG', name: 'El Dorado International Airport', city: 'Bogotá' }]
        },
        description: 'Il più grande gruppo di compagnie aeree dell\'America Latina. Offre una vasta rete di collegamenti in tutto il continente e rotte intercontinentali verso Nord America, Europa e Oceania.',
        mainRoutes: ['Santiago (SCL) - Madrid (MAD)', 'San Paolo (GRU) - Miami (MIA)', 'Lima (LIM) - New York (JFK)']
    },
    {
        name: 'JetBlue Airways',
        logoUrl: 'https://logo.clearbit.com/jetblue.com',
        website: 'https://www.jetblue.com',
        loyaltyProgram: { name: 'TrueBlue', url: 'https://www.jetblue.com/trueblue', currencyName: 'Punti TrueBlue', tiers: ['Mosaic 1', 'Mosaic 2', 'Mosaic 3', 'Mosaic 4'] },
        hubs: {
            main: [{ code: 'JFK', name: 'John F. Kennedy International Airport', city: 'New York' }],
            secondary: [
                { code: 'BOS', name: 'Logan International Airport', city: 'Boston' },
                { code: 'FLL', name: 'Fort Lauderdale-Hollywood Airport', city: 'Fort Lauderdale' }
            ]
        },
        description: 'Compagnia aerea statunitense a basso costo di alta qualità, nota per il suo servizio clienti, l\'ampio spazio per le gambe e l\'intrattenimento a bordo gratuito (LiveTV).',
        mainRoutes: ['New York (JFK) - Los Angeles (LAX)', 'Boston (BOS) - Londra (LGW)', 'Fort Lauderdale (FLL) - San Juan (SJU)']
    },
    {
        name: 'EasyJet',
        logoUrl: 'https://logo.clearbit.com/easyjet.com',
        website: 'https://www.easyjet.com',
        loyaltyProgram: { name: 'Nessun programma tradizionale', url: 'https://www.easyjet.com/en/', currencyName: 'Nessuna valuta', tiers: [] },
        hubs: {
            main: [],
            secondary: [
                { code: 'LGW', name: 'London Gatwick Airport', city: 'Londra' },
                { code: 'MXP', name: 'Milan Malpensa Airport', city: 'Milano' },
                { code: 'GVA', name: 'Geneva Airport', city: 'Ginevra' }
            ]
        },
        description: 'Una delle principali compagnie aeree low-cost europee, con una forte presenza nel Regno Unito e in Europa continentale. Opera una vasta rete di rotte point-to-point a corto raggio.',
        mainRoutes: ['Londra (LGW) - Ginevra (GVA)', 'Milano (MXP) - Parigi (CDG)', 'Amsterdam (AMS) - Berlino (BER)']
    },
    {
        name: 'AirAsia',
        logoUrl: 'https://logo.clearbit.com/airasia.com',
        website: 'https://www.airasia.com',
        loyaltyProgram: { name: 'AirAsia Rewards', url: 'https://www.airasia.com/rewards/en/gb', currencyName: 'Punti AirAsia', tiers: ['Red', 'Gold', 'Platinum', 'Black'] },
        hubs: {
            main: [{ code: 'KUL', name: 'Kuala Lumpur International Airport', city: 'Kuala Lumpur' }],
            secondary: [
                { code: 'DMK', name: 'Don Mueang International Airport', city: 'Bangkok' },
                { code: 'CGK', name: 'Soekarno-Hatta International Airport', city: 'Jakarta' }
            ]
        },
        description: 'Il più grande gruppo di compagnie aeree low-cost in Asia, con sede in Malesia. Famoso per il suo slogan "Now Everyone Can Fly", ha rivoluzionato i viaggi aerei nel Sud-est asiatico.',
        mainRoutes: ['Kuala Lumpur (KUL) - Singapore (SIN)', 'Bangkok (DMK) - Chiang Mai (CNX)', 'Jakarta (CGK) - Denpasar (DPS)']
    },
    {
        name: 'Virgin Australia',
        logoUrl: 'https://logo.clearbit.com/virginaustralia.com',
        website: 'https://www.virginaustralia.com',
        loyaltyProgram: { name: 'Velocity Frequent Flyer', url: 'https://www.velocityfrequentflyer.com/', currencyName: 'Punti Velocity', tiers: ['Red', 'Silver', 'Gold', 'Platinum'] },
        hubs: {
            main: [
                { code: 'BNE', name: 'Brisbane Airport', city: 'Brisbane' },
                { code: 'MEL', name: 'Melbourne Airport', city: 'Melbourne' },
                { code: 'SYD', name: 'Sydney Airport', city: 'Sydney' }
            ],
            secondary: []
        },
        description: 'Una delle più grandi compagnie aeree australiane. Si concentra principalmente sul mercato domestico e su rotte internazionali a corto raggio, offrendo un\'alternativa di qualità a Qantas.',
        mainRoutes: ['Sydney (SYD) - Melbourne (MEL)', 'Brisbane (BNE) - Perth (PER)', 'Melbourne (MEL) - Queenstown (ZQN)']
    },
    {
        name: 'WestJet',
        logoUrl: 'https://logo.clearbit.com/westjet.com',
        website: 'https://www.westjet.com',
        loyaltyProgram: { name: 'WestJet Rewards', url: 'https://www.westjet.com/en-ca/rewards', currencyName: 'Dollari WestJet', tiers: ['Teal', 'Silver', 'Gold'] },
        hubs: {
            main: [{ code: 'YYC', name: 'Calgary International Airport', city: 'Calgary' }],
            secondary: [
                { code: 'YYZ', name: 'Toronto Pearson International Airport', city: 'Toronto' },
                { code: 'YVR', name: 'Vancouver International Airport', city: 'Vancouver' }
            ]
        },
        description: 'La seconda compagnia aerea più grande del Canada. Nata come vettore low-cost, si è evoluta per offrire una gamma completa di servizi, inclusi voli a lungo raggio verso Europa e Asia.',
        mainRoutes: ['Calgary (YYC) - Toronto (YYZ)', 'Vancouver (YVR) - Maui (OGG)', 'Toronto (YYZ) - Londra (LGW)']
    },
    {
        name: 'Wizz Air',
        logoUrl: 'https://logo.clearbit.com/wizzair.com',
        website: 'https://wizzair.com/',
        loyaltyProgram: { name: 'WIZZ Discount Club', url: 'https://wizzair.com/en-gb/information-and-services/wizz-services/wizz-discount-club', currencyName: 'Crediti WIZZ', tiers: [] },
        hubs: {
            main: [],
            secondary: [
                { code: 'BUD', name: 'Budapest Ferenc Liszt International Airport', city: 'Budapest' },
                { code: 'LTN', name: 'London Luton Airport', city: 'Londra' },
                { code: 'WAW', name: 'Warsaw Chopin Airport', city: 'Varsavia' }
            ]
        },
        description: 'Compagnia aerea ungherese a bassissimo costo con una forte presenza in Europa centrale e orientale. Nota per la sua rapida espansione e una vasta rete point-to-point.',
        mainRoutes: ['Budapest (BUD) - Londra (LTN)', 'Varsavia (WAW) - Roma (FCO)', 'Bucarest (OTP) - Milano (BGY)']
    }
];