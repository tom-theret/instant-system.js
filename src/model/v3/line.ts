import { Mode } from "../mode";
import { DisruptionLevelV3 } from "./disruptionLevel";
import { FavoriteModesV3 } from "./favoriteModes";
import { ScheduleSearchModeV3 } from "./scheduleSearchMode";

export interface LineV3 {
  operatorId: string;
  id: string;
  sName: string;
  lName: string;
  mode: Mode;
  subNetwork: SubNetwork;
  color: string;
  textColor: string;
  mobilityFacilities?: MobilityFacilities;
  scheduleSearchMode?: ScheduleSearchModeV3;
  scheduleSearchModes?: ScheduleSearchModeV3[];
  favoriteModes?: FavoriteModesV3[];
  hasCurrentDisruptions?: boolean;
  disruptions?: Disruptions;
  codes?: Code[];
}

interface MobilityFacilities {
  wheelchairs: "AVAILABLE";
}

interface Code {
  type: string;
  value: string;
}

interface Disruptions {
  level: DisruptionLevelV3;
}

interface SubNetwork {
  id: string;
  name: string;
}
