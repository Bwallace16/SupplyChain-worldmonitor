// Supply chain variant - supplychain.worldmonitor.app
// NOTE: This file is a structured canonical description for reference. The runtime
// wiring lives in src/config/panels.ts (SUPPLYCHAIN_PANELS, SUPPLYCHAIN_MAP_LAYERS,
// SUPPLYCHAIN_MOBILE_MAP_LAYERS). Modify both if the variant shape changes.
// News-category panel IDs match the `supplychain` edition in shared/news-catalog.json.
import type { PanelConfig, MapLayers } from '@/types';
import type { VariantConfig } from './base';

// Re-export base config
export * from './base';

// Logistics and transportation panels: freight desks, corridors, trade rules, cost side.
export const DEFAULT_PANELS: Record<string, PanelConfig> = {
  map: { name: 'Global Logistics Map', enabled: true, priority: 1 },
  'supply-chain': { name: 'Chokepoints, Shipping & Routes', enabled: true, priority: 1 },
  'chokepoint-strip': { name: 'Chokepoint Status', enabled: true, priority: 1 },
  insights: { name: 'AI Supply Chain Insights', enabled: true, priority: 1 },
  'live-news': { name: 'Live Business TV', enabled: true, priority: 1 },
  // Freight desks (news categories from the supplychain edition)
  'ocean-shipping': { name: 'Ocean Freight & Containers', enabled: true, priority: 1 },
  'ports-terminals': { name: 'Ports & Terminals', enabled: true, priority: 1 },
  'air-cargo': { name: 'Air Cargo', enabled: true, priority: 1 },
  'trucking-parcel': { name: 'Trucking & Parcel', enabled: true, priority: 1 },
  'rail-intermodal': { name: 'Rail & Intermodal', enabled: true, priority: 1 },
  'warehousing-3pl': { name: 'Warehousing & 3PL', enabled: true, priority: 2 },
  'trade-customs': { name: 'Tariffs, Customs & Trade Rules', enabled: true, priority: 1 },
  'logistics-tech': { name: 'Logistics Tech & TMS', enabled: true, priority: 2 },
  // Corridors and trade flow context
  'china-corridors': { name: 'China Logistics Corridors', enabled: true, priority: 1 },
  'china-activity-nowcast': { name: 'China Activity Nowcast', enabled: true, priority: 2 },
  'hormuz-tracker': { name: 'Hormuz Trade Tracker', enabled: true, priority: 2 },
  'airline-intel': { name: 'Airline & Air Cargo Intelligence', enabled: true, priority: 2 },
  'trade-policy': { name: 'Trade Policy', enabled: true, priority: 1, premium: 'locked' as const },
  'global-procurement': { name: 'Global Procurement', enabled: true, priority: 1, premium: 'locked' as const },
  'sanctions-pressure': { name: 'Sanctions Pressure', enabled: true, priority: 2 },
  // Cost side: fuel, commodities, macro
  'fuel-prices': { name: 'Retail Fuel Prices', enabled: true, priority: 1 },
  'fuel-shortages': { name: 'Fuel Shortage Registry', enabled: true, priority: 2 },
  commodities: { name: 'Freight-Linked Commodities', enabled: true, priority: 2 },
  economic: { name: 'Macro Stress', enabled: true, priority: 2 },
  'consumer-prices': { name: 'Consumer Prices', enabled: true, priority: 2 },
  'economic-calendar': { name: 'Economic Calendar', enabled: true, priority: 2 },
  // Disruption drivers
  climate: { name: 'Weather & Climate Disruptions', enabled: true, priority: 2 },
  // Tracking
  monitors: { name: 'My Monitors', enabled: true, priority: 3 },
  'world-clock': { name: 'World Clock', enabled: true, priority: 3 },
  'latest-brief': { name: 'Latest Brief', enabled: true, priority: 1, premium: 'locked' as const },
};

// Logistics network plus the disruption drivers that close ports and lanes.
export const DEFAULT_MAP_LAYERS: MapLayers = {
  gpsJamming: false,
  satellites: false,
  conflicts: false,
  bases: false,
  cables: true,  // Undersea cables behind trade data and EDI
  pipelines: false,
  hotspots: false,
  ais: true,  // Live vessel positions on strategic waterways
  nuclear: false,
  irradiators: false,
  sanctions: true,  // Sanctions that reroute cargo
  weather: true,  // Severe weather that closes ports and lanes
  canadaRoads: true,  // Cross-border trucking road events
  canadaAlerts: false,
  economic: true,  // Economic centers and trade hubs
  waterways: true,  // Suez, Panama, Hormuz, Malacca, Bab el-Mandeb
  outages: true,  // Power and grid outages at hubs
  cyberThreats: false,
  datacenters: false,
  protests: true,  // Labor strikes and port protests
  flights: true,  // Air cargo and airport activity
  military: false,
  natural: true,  // Earthquakes near ports and corridors
  spaceports: false,
  minerals: false,
  fires: true,  // Wildfires near highways and rail
  ucdpEvents: false,
  displacement: false,
  climate: true,  // Climate anomalies driving disruption
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: true,  // Freight-linked commodity exchanges
  gulfInvestments: false,
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  tradeRoutes: true,  // Major ocean trade lanes
  iranAttacks: false,
  ciiChoropleth: false,
  resilienceScore: false,
  dayNight: false,
  miningSites: false,
  processingPlants: false,
  commodityPorts: true,  // Container, bulk and energy ports
  webcams: false,
  diseaseOutbreaks: false,
  storageFacilities: false,
  fuelShortages: true,  // Diesel and jet fuel shortages
  liveTankers: true,  // Tanker positions inside chokepoints
};

// Mobile keeps the network view light: waterways, ports, vessels, weather, quakes.
export const MOBILE_DEFAULT_MAP_LAYERS: MapLayers = {
  gpsJamming: false,
  satellites: false,
  conflicts: false,
  bases: false,
  cables: false,
  pipelines: false,
  hotspots: false,
  ais: true,
  nuclear: false,
  irradiators: false,
  sanctions: false,
  weather: true,
  canadaRoads: false,
  canadaAlerts: false,
  economic: false,
  waterways: true,
  outages: false,
  cyberThreats: false,
  datacenters: false,
  protests: false,
  flights: false,
  military: false,
  natural: true,
  spaceports: false,
  minerals: false,
  fires: false,
  ucdpEvents: false,
  displacement: false,
  climate: false,
  startupHubs: false,
  cloudRegions: false,
  accelerators: false,
  techHQs: false,
  techEvents: false,
  stockExchanges: false,
  financialCenters: false,
  centralBanks: false,
  commodityHubs: false,
  gulfInvestments: false,
  positiveEvents: false,
  kindness: false,
  happiness: false,
  speciesRecovery: false,
  renewableInstallations: false,
  tradeRoutes: false,
  iranAttacks: false,
  ciiChoropleth: false,
  resilienceScore: false,
  dayNight: false,
  miningSites: false,
  processingPlants: false,
  commodityPorts: true,
  webcams: false,
  diseaseOutbreaks: false,
  storageFacilities: false,
  fuelShortages: false,
  liveTankers: false,
};

export const VARIANT_CONFIG: VariantConfig = {
  name: 'supplychain',
  description: 'Global logistics and transportation intelligence: ocean, ports, chokepoints, air cargo, trucking, rail, trade policy',
  panels: DEFAULT_PANELS,
  mapLayers: DEFAULT_MAP_LAYERS,
  mobileMapLayers: MOBILE_DEFAULT_MAP_LAYERS,
};
