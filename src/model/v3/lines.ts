import { DisruptionV3 } from "./disruption";
import { LineV3 } from "./line";

export interface LinesV3 {
  lines: LineV3[];
  disruptions: DisruptionV3[];
}
