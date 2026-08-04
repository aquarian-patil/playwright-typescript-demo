import { test, expect } from "@playwright/test";
import { DummyJsonClient } from "../../src/api/clients/DummyJsonClient";

test.describe("DummyJSON API Tests", () => {
  let client: DummyJsonClient;

  test.beforeAll(() => {
    client = new DummyJsonClient();
  });

  test.describe("Authentication", () => {
    test("should login with valid credentials", async () => {
      const response = await client.login({
        username: "emilys",
        password: "emilyspass",
      });

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("accessToken");
      expect(response.data).toHaveProperty("email");
      expect(response.data).toHaveProperty("firstName");
    });

    test("should fail login with invalid credentials", async () => {
      try {
        await client.login({
          username: "invalid_user",
          password: "wrong_password",
        });
        expect(true).toBe(false);
      } catch (error: any) {
        // FIXED: Use error.status instead of error.response.status
        expect(error.status).toBe(400);
        expect(error.error).toHaveProperty("message");
      }
    });
  });

  test.describe("Products API", () => {
    test("should get list of products", async () => {
      const response = await client.getProducts();

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("products");
      expect(Array.isArray(response.data.products)).toBe(true);
      expect(response.data.products.length).toBeGreaterThan(0);
    });

    test("should get product by ID", async () => {
      const response = await client.getProductById(1);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("id", 1);
      expect(response.data).toHaveProperty("title");
      expect(response.data).toHaveProperty("price");
    });

    test("should handle non-existent product ID gracefully", async () => {
      const nonExistentId = 999999;

      try {
        await client.getProductById(nonExistentId);
        expect(true).toBe(false);
      } catch (error: any) {
        // FIXED: Use error.status instead of error.response.status
        expect(error.status).toBe(404);
        expect(error.error).toHaveProperty("message");
      }
    });

    test("should search products by query", async () => {
      const response = await client.searchProducts("phone");

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("products");
      expect(Array.isArray(response.data.products)).toBe(true);
    });

    test("should return empty array for non-matching search query", async () => {
      const response = await client.searchProducts("nonexistentproduct12345");

      expect(response.status).toBe(200);
      expect(response.data.products).toEqual([]);
    });
  });

  test.describe("Users API", () => {
    test("should get list of users", async () => {
      const response = await client.getUsers();

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("users");
      expect(Array.isArray(response.data.users)).toBe(true);
      expect(response.data.users.length).toBeGreaterThan(0);
    });

    test("should get user by ID", async () => {
      const response = await client.getUserById(1);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("id", 1);
      expect(response.data).toHaveProperty("firstName");
      expect(response.data).toHaveProperty("email");
    });

    test("should handle non-existent user ID gracefully", async () => {
      const nonExistentId = 999999;

      try {
        await client.getUserById(nonExistentId);
        expect(true).toBe(false);
      } catch (error: any) {
        // FIXED: Use error.status instead of error.response.status
        expect(error.status).toBe(404);
        expect(error.error).toHaveProperty("message");
      }
    });
  });
});
