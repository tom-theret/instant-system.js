import { CurrentDisruptionV3 } from "../../model/v3/disruption";
import { DEV_BASE_URL, PROD_BASE_URL, V3_GET_LINES_DISRUPTIONS } from "../../utils/endpoints";
import { ISFetcher } from "../../utils/fetcher";

export const getDisruptionsV3 = async (networkID: number, subNetworks?: string | null, key?: number | null, userlatlon?: string | null, useDevInstance = false): Promise<CurrentDisruptionV3> => {
  let endpoint = useDevInstance ? DEV_BASE_URL : PROD_BASE_URL + V3_GET_LINES_DISRUPTIONS(networkID);

  if (subNetworks) {
    endpoint += "&subNetworks=" + subNetworks;
  }
  if (key) {
    endpoint += "&key=" + key;
  }
  if (userlatlon) {
    endpoint += "&userlatlon=" + userlatlon;
  }

  const response = await ISFetcher(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data as CurrentDisruptionV3;
};
