/** @module fetcher */
import { FetcherOptions } from "../model/fetcher";

export const ISFetcher = async (url: string, options: FetcherOptions) => {
  const response = await fetch(url, {
    method: options.method,
    headers: {
      ...options.headers,
      "User-Agent": "@user/Agent"
    },
    body: options.method === "GET" ? undefined : options.body
  });
  
  return {
    headers: response.headers,
    text: () => response.text(),
    json: <T>() => response.json() as Promise<T>
  };
};