import { NetworkV3 } from "../../model/v3/network";
import { V3_GET_NETWORK } from "../../utils/endpoints";
import { ISFetcher } from "../../utils/fetcher";

export const getNetworkV3 = async (instance: string, networkID: number): Promise<NetworkV3> => {
  const response = await ISFetcher(instance + V3_GET_NETWORK(networkID), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();

  return data as NetworkV3;
};