/**
 * IApiResponse - Generic API response interface
 */
export interface IApiResponse<T = any> {
  status: number;
  statusText: string;
  headers: Record<string, string>;
  data: T;
  duration?: number;
}

/**
 * IApiError - API error interface
 */
export interface IApiError {
  status: number;
  message: string;
  error?: any;
}

/**
 * IApiRequestConfig - API request configuration
 */
export interface IApiRequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
  headers?: Record<string, string>;
  params?: Record<string, any>;
  data?: any;
  timeout?: number;
}
