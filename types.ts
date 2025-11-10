export interface HubDetail {
  code: string;
  name: string;
  city: string;
}

export interface Hub {
  main: HubDetail[];
  secondary: HubDetail[];
}

export interface Airline {
  name: string;
  logoUrl: string;
  website: string;
  loyaltyProgram: {
    name: string;
    url: string;
    currencyName: string;
    tiers: string[];
  };
  hubs: Hub;
  description: string;
  mainRoutes: string[];
}

export interface Alliance {
  name: string;
  website: string;
  logoUrl: string;
  members: Airline[];
}

// FIX: Added missing GroupedCurrencyData type definition.
export interface GroupedCurrencyData {
  [currencyName: string]: {
    [programName: string]: {
      airline: Airline;
      allianceName: string;
    }[];
  };
}
