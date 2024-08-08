import { NetworkV1 } from "../../model/v1/network";
import { DEV_BASE_URL, PROD_BASE_URL, V1_GET_NETWORK } from "../../utils/endpoints";
import { ISFetcher } from "../../utils/fetcher";

export const getNetworkV1 = async (networkID: number, useDevInstance=false): Promise<NetworkV1> => {
  const response = await ISFetcher(useDevInstance ? DEV_BASE_URL : PROD_BASE_URL + V1_GET_NETWORK(networkID), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();

  return data as NetworkV1;
};