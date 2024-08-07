export interface LaunchNewsV3 {
  timestamp: string;
  launchNews: LaunchNews[];
}

interface LaunchNews {
  id: string;
  title: string;
  startDate: string;
  endDate: string;
  moreInfoLink: MoreInfoLink;
  picture: string;
  displayTime: number;
}

interface MoreInfoLink {
  url: string;
}
