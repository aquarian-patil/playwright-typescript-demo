import { BaseApiClient } from "../BaseApiClient";
import { EnvironmentManager } from "../../config/EnvironmentManager";
import { IApiResponse } from "../../interfaces/IApiResponse";

/**
 * PetstoreClient - API client for Swagger Petstore API
 */
export class PetstoreClient extends BaseApiClient {
  constructor() {
    const env = EnvironmentManager.getInstance();
    super(env.getPetstoreApiUrl());
  }

  // Pet operations
  async addPet(pet: any): Promise<IApiResponse<any>> {
    return await this.post("/pet", pet);
  }

  async getPetById(petId: number): Promise<IApiResponse<any>> {
    return await this.get(`/pet/${petId}`);
  }

  async updatePet(pet: any): Promise<IApiResponse<any>> {
    return await this.put("/pet", pet);
  }

  async deletePet(petId: number): Promise<IApiResponse<any>> {
    return await this.delete(`/pet/${petId}`);
  }

  async findPetsByStatus(status: string): Promise<IApiResponse<any>> {
    return await this.get(`/pet/findByStatus?status=${status}`);
  }

  // Store operations
  async getStoreInventory(): Promise<IApiResponse<any>> {
    return await this.get("/store/inventory");
  }

  async placeOrder(order: any): Promise<IApiResponse<any>> {
    return await this.post("/store/order", order);
  }

  async getOrderById(orderId: number): Promise<IApiResponse<any>> {
    return await this.get(`/store/order/${orderId}`);
  }

  async deleteOrder(orderId: number): Promise<IApiResponse<any>> {
    return await this.delete(`/store/order/${orderId}`);
  }

  // User operations
  async createUser(user: any): Promise<IApiResponse<any>> {
    return await this.post("/user", user);
  }

  async getUserByUsername(username: string): Promise<IApiResponse<any>> {
    return await this.get(`/user/${username}`);
  }

  async updateUser(username: string, user: any): Promise<IApiResponse<any>> {
    return await this.put(`/user/${username}`, user);
  }

  async deleteUser(username: string): Promise<IApiResponse<any>> {
    return await this.delete(`/user/${username}`);
  }

  async loginUser(
    username: string,
    password: string,
  ): Promise<IApiResponse<any>> {
    return await this.get(
      `/user/login?username=${username}&password=${password}`,
    );
  }

  async logoutUser(): Promise<IApiResponse<any>> {
    return await this.get("/user/logout");
  }

  async createUsersWithArray(users: any[]): Promise<IApiResponse<any>> {
    return await this.post("/user/createWithArray", users);
  }
}
