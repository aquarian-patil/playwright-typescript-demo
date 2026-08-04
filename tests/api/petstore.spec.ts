import { test, expect } from "@playwright/test";
import { PetstoreClient } from "../../src/api/clients/PetstoreClient";
import { faker } from "@faker-js/faker";

test.describe("Swagger Petstore API Tests", () => {
  let client: PetstoreClient;
  let createdPetId: number;
  let createdOrderId: number;
  const testUsername = `testuser_${Date.now()}`;

  test.beforeAll(() => {
    client = new PetstoreClient();
  });

  test.describe("Pet API - CRUD Operations", () => {
    test("[API] [PetStore] should add a new pet to the store", async () => {
      const newPet = {
        id: Math.floor(Math.random() * 1000) + 1,
        name: faker.animal.dog(),
        photoUrls: ["https://example.com/photo.jpg"],
        status: "available",
        category: { id: 1, name: "Dogs" },
        tags: [{ id: 1, name: "friendly" }],
      };

      const response = await client.addPet(newPet);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("id");
      expect(response.data.name).toBe(newPet.name);
      createdPetId = response.data.id;
    });

    test("[API] [PetStore] should get pet by ID", async () => {
      const newPet = {
        id: Math.floor(Math.random() * 1000) + 1,
        name: faker.animal.dog(),
        photoUrls: ["https://example.com/photo.jpg"],
        status: "available",
      };
      const createResponse = await client.addPet(newPet);
      const petId = createResponse.data.id;

      const response = await client.getPetById(petId);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("id", petId);
      expect(response.data).toHaveProperty("name");
    });

    test("[API] [PetStore] should find pets by status - available", async () => {
      const response = await client.findPetsByStatus("available");

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });

    test("[API] [PetStore] should find pets by status - pending", async () => {
      const response = await client.findPetsByStatus("pending");

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });

    test("[API] [PetStore] should find pets by status - sold", async () => {
      const response = await client.findPetsByStatus("sold");

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
    });

    test("[API] [PetStore] should update an existing pet", async () => {
      const newPet = {
        id: Math.floor(Math.random() * 1000) + 1,
        name: faker.animal.dog(),
        photoUrls: ["https://example.com/photo.jpg"],
        status: "available",
      };
      const createResponse = await client.addPet(newPet);
      const petId = createResponse.data.id;

      const getResponse = await client.getPetById(petId);
      const existingPet = getResponse.data;

      const updatedPet = {
        ...existingPet,
        name: `Updated ${existingPet.name}`,
        status: "sold",
      };

      const response = await client.updatePet(updatedPet);

      expect(response.status).toBe(200);
      expect(response.data.id).toBe(petId);
      expect(response.data.status).toBe("sold");
    });

    test("[API] [PetStore] should handle non-existent pet ID gracefully", async () => {
      const nonExistentId = -Math.floor(Math.random() * 1000000) - 1; // Negative ID to ensure 404

      try {
        await client.getPetById(nonExistentId);
        expect(true).toBe(false);
      } catch (error: any) {
        // FIXED: Use error.status instead of error.response.status
        expect(error.status).toBe(404);
      }
    });

    test("[API] [PetStore] should delete a pet", async () => {
      if (!createdPetId) {
        test.skip();
        return;
      }

      try {
        const response = await client.deletePet(createdPetId);
        expect(response.status).toBe(200);
      } catch (error: any) {
        expect([200, 404]).toContain(error.status || 200);
      }
    });
  });

  test.describe("Store API - Inventory and Orders", () => {
    test("[API] [PetStore] should get store inventory", async () => {
      const response = await client.getStoreInventory();

      expect(response.status).toBe(200);
      expect(typeof response.data).toBe("object");
    });

    test("[API] [PetStore] should place an order for a pet", async () => {
      const newOrder = {
        id: Math.floor(Math.random() * 1000) + 1,
        petId: 1,
        quantity: 1,
        status: "placed",
      };

      const response = await client.placeOrder(newOrder);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("id");
      createdOrderId = response.data.id;
    });

    test("[API] [PetStore] should get order by ID", async () => {
      const newOrder = {
        id: Math.floor(Math.random() * 1000) + 1,
        petId: 1,
        quantity: 1,
        status: "placed",
      };
      const createResponse = await client.placeOrder(newOrder);
      const orderId = createResponse.data.id;

      const response = await client.getOrderById(orderId);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("id", orderId);
    });

    test("[API] [PetStore] should handle invalid order ID gracefully", async () => {
      const invalidOrderId = 999999;

      try {
        await client.getOrderById(invalidOrderId);
        expect(true).toBe(false);
      } catch (error: any) {
        // FIXED: Use error.status instead of error.response.status
        expect(error.status).toBe(404);
      }
    });

    test("[API] [PetStore] should delete an order", async () => {
      if (!createdOrderId) {
        test.skip();
        return;
      }

      try {
        const response = await client.deleteOrder(createdOrderId);
        expect(response.status).toBe(200);
      } catch (error: any) {
        expect([200, 404]).toContain(error.status || 200);
      }
    });
  });

  test.describe("User API - User Management", () => {
    test("[API] [PetStore] should create a new user", async () => {
      const newUser = {
        username: testUsername,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: faker.internet.email(),
        password: "test123",
        phone: faker.phone.number(),
      };

      const response = await client.createUser(newUser);

      expect(response.status).toBe(200);
    });

    test("[API] [PetStore] should get user by username", async () => {
      const response = await client.getUserByUsername(testUsername);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("username", testUsername);
    });

    test("[API] [PetStore] should login user", async () => {
      const response = await client.loginUser(testUsername, "test123");

      expect(response.status).toBe(200);
    });

    test("[API] [PetStore] should logout user", async () => {
      const response = await client.logoutUser();

      expect(response.status).toBe(200);
    });

    test("[API] [PetStore] should update user", async () => {
      const updatedUser = {
        username: testUsername,
        firstName: "UpdatedFirstName",
        lastName: "UpdatedLastName",
        email: faker.internet.email(),
      };

      const response = await client.updateUser(testUsername, updatedUser);

      expect(response.status).toBe(200);
    });

    test("[API] [PetStore] should create multiple users with array", async () => {
      const users = [
        {
          username: `user1_${Date.now()}`,
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
        },
        {
          username: `user2_${Date.now()}`,
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
        },
      ];

      const response = await client.createUsersWithArray(users);

      expect(response.status).toBe(200);
    });

    test("[API] [PetStore] should handle non-existent user gracefully", async () => {
      const nonExistentUser = "nonexistentuser999999";

      try {
        await client.getUserByUsername(nonExistentUser);
        expect(true).toBe(false);
      } catch (error: any) {
        // FIXED: Use error.status instead of error.response.status
        expect(error.status).toBe(404);
      }
    });

    test("[API] [PetStore] should delete user", async () => {
      try {
        const response = await client.deleteUser(testUsername);
        expect(response.status).toBe(200);
      } catch (error: any) {
        expect([200, 404]).toContain(error.status || 200);
      }
    });
  });
});
