import { DisruptionLevelV3 } from "./disruptionLevel";
import { LineV3 } from "./line";

export interface DisruptionV3 {
  operatorId: string;
  id: string;
  title: string;
  messages: Message[];
  level: DisruptionLevelV3;
  lines: LineV3[];
  issueDate: string;
  startValidity: string;
  endValidity: string;
  updateDate: string;
}



interface Message {
  text: string;
}