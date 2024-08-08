import { LaunchNewsV3 } from "../../model/v3/launchNews";
import { DEV_BASE_URL, PROD_BASE_URL, V3_GET_NETWORK_LAUNCHNEWS } from "../../utils/endpoints";
import { ISFetcher } from "../../utils/fetcher";

export const getLaunchNewsV3 = async (networkID: number, key?: number | null, useDevInstance=false): Promise<LaunchNewsV3> => {
  let endpoint = useDevInstance ? DEV_BASE_URL : PROD_BASE_URL + V3_GET_NETWORK_LAUNCHNEWS(networkID);

  if (key) {
    endpoint += "&key=" + key;
  }

  const response = await ISFetcher(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return data as LaunchNewsV3;
};
