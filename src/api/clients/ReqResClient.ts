import { BaseApiClient } from '../BaseApiClient';
import { EnvironmentManager } from '../../config/EnvironmentManager';
import { IApiResponse } from '../../interfaces/IApiResponse';

/**
 * ReqResClient - API client for ReqRes API
 */
export class ReqResClient extends BaseApiClient {
  protected baseURL: string;

  constructor() {
    super();
    const env = EnvironmentManager.getInstance();
    this.baseURL = env.getReqResApiUrl();
    
    // Add API key if available
    const apiKey = env.getReqResApiKey();
    if (apiKey) {
      this.client.defaults.headers.common['x-api-key'] = apiKey;
    }
  }

  /**
   * Get list of users
   */
  async getUsers(page: number = 1): Promise<IApiResponse<any>> {
    return await this.get(`/users?page=${page}`);
  }

  /**
   * Get single user
   */
  async getUserById(id: number): Promise<IApiResponse<any>> {
    return await this.get(`/users/${id}`);
  }

  /**
   * Create new user
   */
  async createUser(user: { name: string; job: string }): Promise<IApiResponse<any>> {
    return await this.post('/users', user);
  }

  /**
   * Update user
   */
  async updateUser(id: number, user: { name: string; job: string }): Promise<IApiResponse<any>> {
    return await this.put(`/users/${id}`, user);
  }

  /**
   * Delete user
   */
  async deleteUser(id: number): Promise<IApiResponse<any>> {
    return await this.delete(`/users/${id}`);
  }

  /**
   * Login
   */
  async login(credentials: { email: string; password: string }): Promise<IApiResponse<any>> {
    return await this.post('/login', credentials);
  }
}
