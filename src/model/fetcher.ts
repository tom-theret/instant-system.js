export interface FetcherOptions {
    method: "GET" | "POST";
    /** Headers that should be used in the request */
    headers?: Record<string, string>;
    /** Body that should be sent in the request */
    body?: string;
  }