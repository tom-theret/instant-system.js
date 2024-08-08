import { LinesV3 } from "../../model/v3/lines";
import { DEV_BASE_URL, PROD_BASE_URL, V3_GET_LINE } from "../../utils/endpoints";
import { ISFetcher } from "../../utils/fetcher";

export const getLineV3 = async (networkID: number, lineID:string, useDevInstance=false): Promise<LinesV3> => {
  const response = await ISFetcher(useDevInstance ? DEV_BASE_URL : PROD_BASE_URL + V3_GET_LINE(networkID, lineID), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });
  
  const data = await response.json();

  return data as LinesV3;
};