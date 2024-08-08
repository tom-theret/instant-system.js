import { Mode } from "../mode";

export interface NetworkV3 {
  id: number;
  name: string;
  networkLoaded: boolean;
  tripplannerLoaded: boolean;
  lat: number;
  lon: number;
  modes?: Mode[];
}
