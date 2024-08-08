// General
export const PROD_BASE_URL = "https://prod.instant-system.com/InstantCore";
export const DEV_BASE_URL = "https://dev.instant-system.com/InstantCore";

//V1
export const V1_GET_NETWORK = (networkID: number) => `/v1/GetNetwork?key=${networkID}`;
export const V1_GET_BANNERS = (networkID: number) => `/v1/networks/${networkID}/banners`;
export const V1_POST_CHECK_PLACES = `/v1/CheckPlaces`;

//V3
export const V3_GET_NETWORK = (networkID: number) => `/v3/networks/${networkID}`;
export const V3_GET_NETWORK_LAUNCHNEWS = (networkID: number) => `/v3/networks/${networkID}/launchNews`;
export const V3_GET_NETWORK_PROXIMITY = (networkID: number) => `/v3/networks/${networkID}/proximity`;
export const V3_GET_LINES_DISRUPTIONS = (networkID: number) => `/v3/networks/${networkID}/lines/disruptions`;
export const V3_GET_LINE_STOP_AREA = (networkID: number, lineID: string) => `/v3/networks/${networkID}/lines/${lineID}/stopAreas`;
export const V3_GET_LINE_STOP_AREA_SCHEDULES = (networkID: number, lineID: number,  stopAreaID: string) => `/v3/networks/${networkID}/lines/${lineID}/stopAreas/${stopAreaID}/schedules`;
export const V3_GET_LINES = (networkID: number) => `/v3/networks/${networkID}/lines`;
export const V3_GET_LINE = (networkID: number, lineID: string) => `/v3/networks/${networkID}/lines/${lineID}`;