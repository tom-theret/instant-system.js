import { Mode } from "../mode";
import { LayoutTypeV1 } from "./layoutType";
import { OperatorV1 } from "./operator";

export interface NetworkV1 {
  timestamp: string;
  networks: GeneralNetwork[];
}

interface GeneralNetwork {
  id: number;
  name: string;
  networkloaded: number;
  networkloaddate: string;
  networkLoadDateIso8601: string;
  networkloadtimestamp: number;
  tripplannerloaded: number;
  tripplannerloaddate: string;
  tripPlannerLoadDateIso8601: string;
  lat: number;
  lon: number;
  gmapzoom: number;
  gmapzoompoi: number;
  defaultTypesPoi: unknown[];
  passwordStrengths: number;
  passwordDescription: string;
  bounds: Bounds;
  colour1: string;
  colour2: string;
  contact: string;
  contacts: Contact[];
  demo: number;
  followfacebook: string;
  followtwitter: string;
  timezone: string;
  modes: Mode[];
  operators: OperatorV1[];
  maps: Maps[];
  options: Option[];
  layouts: Layouts;
  itineraryResultLayout: ItineraryResultLayout;
  externalGuidanceModes: unknown[];
  enableFirebaseAlerting: boolean;
}

interface Bounds {
  northwestlat: number;
  northwestlon: number;
  southeastlat: number;
  southeastlon: number;
}

interface Contact {
  labelKey: string;
  name: string;
  value: string;
  type: string;
  order: number;
}

interface Maps {
  id: number;
  name: string;
  url: string;
  displayIndex: number;
}

interface Option {
  id: string;
  datatype: number;
  valueint1: number;
  valuechar1: string;
}

interface Layouts {
  schedule: string[];
  homePanel: string[];
  itinerary_options: string[];
  moving: string[];
  disruption: string[];
  proximities: Proximity[];
  itineraryResultLayout: string[];
  itineraryResultLayoutTabModes: ItineraryResultLayoutTabMode[];
  displayTab: boolean;
  useSectionsInPlacesSearch: boolean;
  useLatencyInPlacesSearch: boolean;
  isochroneLayout: string[];
}

interface Proximity {
  category: string;
  types: string[];
  modes: string[];
}

interface ItineraryResultLayoutTabMode {
  tabName: string;
  modes: Mode[];
}

interface ItineraryResultLayout {
  standard: LayoutTypeV1[];
}
