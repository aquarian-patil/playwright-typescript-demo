import { BaseApiClient } from "../BaseApiClient";
import { EnvironmentManager } from "../../config/EnvironmentManager";
import { IApiResponse } from "../../interfaces/IApiResponse";

/**
 * ReqResClient - API client for ReqRes API
 */
export class ReqResClient extends BaseApiClient {
  constructor() {
    const env = EnvironmentManager.getInstance();
    super(env.getReqResApiUrl());

    // Add API key via interceptor
    const apiKey = env.getReqResApiKey();
    if (apiKey) {
      this.client.interceptors.request.use((config) => {
        config.headers["x-api-key"] = apiKey;
        return config;
      });
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
  async createUser(user: {
    name: string;
    job: string;
  }): Promise<IApiResponse<any>> {
    return await this.post("/users", user);
  }

  /**
   * Update user
   */
  async updateUser(
    id: number,
    user: { name: string; job: string },
  ): Promise<IApiResponse<any>> {
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
  async login(credentials: {
    email: string;
    password: string;
  }): Promise<IApiResponse<any>> {
    return await this.post("/login", credentials);
  }
}
