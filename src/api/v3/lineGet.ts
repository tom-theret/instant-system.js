import { LinesV3 } from "../../model/v3/lines";
import { V3_GET_LINE } from "../../utils/endpoints";
import { ISFetcher } from "../../utils/fetcher";

export const getLineV3 = async (instance: string, networkID: number, lineID:string): Promise<LinesV3> => {
  const response = await ISFetcher(instance + V3_GET_LINE(networkID, lineID), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  
  const data = await response.json();

  return data as LinesV3;
};