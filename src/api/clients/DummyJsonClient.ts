import { BaseApiClient } from "../BaseApiClient";
import { EnvironmentManager } from "../../config/EnvironmentManager";
import { IApiResponse } from "../../interfaces/IApiResponse";

/**
 * DummyJsonClient - API client for DummyJSON API
 */
export class DummyJsonClient extends BaseApiClient {
  constructor() {
    const env = EnvironmentManager.getInstance();
    super(env.getDummyJsonApiUrl());
  }

  /**
   * Login user
   */
  async login(credentials: {
    username: string;
    password: string;
  }): Promise<IApiResponse<any>> {
    return await this.post("/auth/login", credentials);
  }

  /**
   * Get all products
   */
  async getProducts(limit: number = 30): Promise<IApiResponse<any>> {
    return await this.get(`/products?limit=${limit}`);
  }

  /**
   * Get product by ID
   */
  async getProductById(id: number): Promise<IApiResponse<any>> {
    return await this.get(`/products/${id}`);
  }

  /**
   * Search products
   */
  async searchProducts(query: string): Promise<IApiResponse<any>> {
    return await this.get(`/products/search?q=${query}`);
  }

  /**
   * Get all users
   */
  async getUsers(limit: number = 30): Promise<IApiResponse<any>> {
    return await this.get(`/users?limit=${limit}`);
  }

  /**
   * Get user by ID
   */
  async getUserById(id: number): Promise<IApiResponse<any>> {
    return await this.get(`/users/${id}`);
  }
}
