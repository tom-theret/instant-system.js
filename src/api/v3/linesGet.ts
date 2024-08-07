import { LinesV3 } from "../../model/v3/lines";
import { V3_GET_LINES } from "../../utils/endpoints";
import { ISFetcher } from "../../utils/fetcher";

export const getLinesV3 = async (instance: string, networkID: number): Promise<LinesV3> => {
  const response = await ISFetcher(instance + V3_GET_LINES(networkID), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  
  const data = await response.json();

  return data as LinesV3;
};