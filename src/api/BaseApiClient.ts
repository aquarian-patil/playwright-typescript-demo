import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { Logger } from '../config/Logger';
import { IApiResponse, IApiError } from '../interfaces/IApiResponse';

/**
 * BaseApiClient - Base class for all API clients
 */
export abstract class BaseApiClient {
  protected client: AxiosInstance;
  protected logger: Logger;
  protected baseURL: string;

  constructor(baseURL: string, timeout: number = 30000) {
    this.logger = Logger.getInstance();
    this.baseURL = baseURL;
    this.client = this.createClient(timeout);
    this.setupInterceptors();
  }

  private createClient(timeout: number): AxiosInstance {
    return axios.create({
      baseURL: this.baseURL,
      timeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  private setupInterceptors(): void {
    this.client.interceptors.request.use(
      (config) => {
        this.logger.http(`[REQUEST] ${config.method?.toUpperCase()} ${config.url}`);
        if (config.data) {
          this.logger.debug(`[REQUEST BODY] ${JSON.stringify(config.data)}`);
        }
        return config;
      },
      (error) => {
        this.logger.error('[REQUEST ERROR]', error);
        return Promise.reject(error);
      },
    );

    this.client.interceptors.response.use(
      (response) => {
        this.logger.http(
          `[RESPONSE] ${response.config.method?.toUpperCase()} ${response.config.url} - Status: ${response.status}`,
        );
        return response;
      },
      (error) => {
        if (error.response) {
          this.logger.error(
            `[RESPONSE ERROR] ${error.response.status} - ${error.response.statusText}`,
          );
        } else {
          this.logger.error('[NETWORK ERROR]', error);
        }
        return Promise.reject(error);
      },
    );
  }

  protected async get<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<IApiResponse<T>> {
    const startTime = Date.now();
    try {
      const response: AxiosResponse<T> = await this.client.get(url, config);
      return this.formatResponse(response, Date.now() - startTime);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<IApiResponse<T>> {
    const startTime = Date.now();
    try {
      const response: AxiosResponse<T> = await this.client.post(url, data, config);
      return this.formatResponse(response, Date.now() - startTime);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<IApiResponse<T>> {
    const startTime = Date.now();
    try {
      const response: AxiosResponse<T> = await this.client.put(url, data, config);
      return this.formatResponse(response, Date.now() - startTime);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async patch<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<IApiResponse<T>> {
    const startTime = Date.now();
    try {
      const response: AxiosResponse<T> = await this.client.patch(url, data, config);
      return this.formatResponse(response, Date.now() - startTime);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  protected async delete<T>(
    url: string,
    config?: AxiosRequestConfig,
  ): Promise<IApiResponse<T>> {
    const startTime = Date.now();
    try {
      const response: AxiosResponse<T> = await this.client.delete(url, config);
      return this.formatResponse(response, Date.now() - startTime);
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private formatResponse<T>(response: AxiosResponse<T>, duration: number): IApiResponse<T> {
    return {
      status: response.status,
      statusText: response.statusText,
      headers: response.headers as Record<string, string>,
      data: response.data,
      duration,
    };
  }

  private handleError(error: any): IApiError {
    if (axios.isAxiosError(error) && error.response) {
      return {
        status: error.response.status,
        message: error.response.statusText,
        error: error.response.data,
      };
    }
    return {
      status: 0,
      message: error.message || 'Unknown error',
      error,
    };
  }

  protected setAuthToken(token: string): void {
    this.client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }

  protected removeAuthToken(): void {
    delete this.client.defaults.headers.common['Authorization'];
  }
}
