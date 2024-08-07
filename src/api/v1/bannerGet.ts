import { BannerV1 } from "../../model/v1/banner";
import { V1_GET_BANNERS } from "../../utils/endpoints";
import { ISFetcher } from "../../utils/fetcher";

export const getBannerV1 = async (instance: string, networkID: number): Promise<BannerV1> => {
  const response = await ISFetcher(instance + V1_GET_BANNERS(networkID), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    }
  });

  const data = await response.json();

  return data as BannerV1;
};