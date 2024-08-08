import { BannerV1 } from "../../model/v1/banner";
import { DEV_BASE_URL, PROD_BASE_URL, V1_GET_BANNERS } from "../../utils/endpoints";
import { ISFetcher } from "../../utils/fetcher";

export const getBannerV1 = async (networkID: number, useDevInstance=false): Promise<BannerV1> => {
  const response = await ISFetcher(useDevInstance ? DEV_BASE_URL : PROD_BASE_URL + V1_GET_BANNERS(networkID), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();

  return data as BannerV1;
};