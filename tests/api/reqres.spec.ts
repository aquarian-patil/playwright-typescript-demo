import { test, expect } from "../../src/fixtures/apiFixtures";
import { EnvironmentManager } from "../../src/config/EnvironmentManager";
import { DataHelper } from "../../src/helpers/DataHelper";
import { allure } from "allure-playwright";

test.describe("ReqRes API Tests", () => {
  const env = EnvironmentManager.getInstance();
  const apiKey = env.getReqResApiKey();
  let payloads: any;

  // Tests will run since API key is now configured

  test.beforeAll(() => {
    payloads = DataHelper.readJsonData<any>("apiPayloads.json");
  });

  test("should get list of users", async ({ reqResClient }) => {
    allure.epic("API");
    allure.feature("ReqRes Users");
    allure.severity("critical");
    allure.tags("API", "ReqRes", "Smoke");

    let response: any;
    await allure.step("Fetch users list from page 1", async () => {
      response = await reqResClient.getUsers(1);
    });

    await allure.step("Verify response status and data structure", async () => {
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("data");
      expect(Array.isArray(response.data.data)).toBe(true);
    });
  });

  test("should get single user by ID", async ({ reqResClient }) => {
    allure.epic("API");
    allure.feature("ReqRes Users");
    allure.severity("normal");

    let response: any;
    await allure.step("Fetch user with ID 2", async () => {
      response = await reqResClient.getUserById(2);
    });

    await allure.step("Verify user ID matches", async () => {
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("data");
      expect(response.data.data).toHaveProperty("id", 2);
    });
  });

  test("should create new user", async ({ reqResClient }) => {
    allure.epic("API");
    allure.feature("ReqRes Users");
    allure.severity("critical");

    const newUser = payloads.reqres.newUser;
    let response: any;

    await allure.step("Send POST request to create user", async () => {
      response = await reqResClient.createUser(newUser);
    });

    await allure.step("Verify user is created", async () => {
      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty("name", newUser.name);
      expect(response.data).toHaveProperty("job", newUser.job);
      expect(response.data).toHaveProperty("id");
    });
  });

  test("should update user", async ({ reqResClient }) => {
    allure.epic("API");
    allure.feature("ReqRes Users");
    allure.severity("normal");

    const updatedUser = payloads.reqres.updatedUser;
    let response: any;

    await allure.step("Send PUT request to update user 2", async () => {
      response = await reqResClient.updateUser(2, updatedUser);
    });

    await allure.step("Verify user is updated", async () => {
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("name", updatedUser.name);
      expect(response.data).toHaveProperty("job", updatedUser.job);
    });
  });

  test("should delete user", async ({ reqResClient }) => {
    allure.epic("API");
    allure.feature("ReqRes Users");
    allure.severity("normal");

    let response: any;
    await allure.step("Send DELETE request for user 2", async () => {
      response = await reqResClient.deleteUser(2);
    });

    await allure.step("Verify deletion status 204", async () => {
      expect(response.status).toBe(204);
    });
  });

  test("should login successfully", async ({ reqResClient }) => {
    allure.epic("API Authentication");
    allure.feature("ReqRes Login");
    allure.severity("blocker");
    allure.tags("Security");

    const credentials = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    let response: any;
    await allure.step("Send login credentials", async () => {
      response = await reqResClient.login(credentials);
    });

    await allure.step("Verify token is returned", async () => {
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("token");
    });
  });
});
