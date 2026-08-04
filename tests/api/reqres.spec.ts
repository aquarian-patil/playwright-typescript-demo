import { test, expect } from "../../src/fixtures/apiFixtures";
import { EnvironmentManager } from "../../src/config/EnvironmentManager";
import { DataHelper } from "../../src/helpers/DataHelper";

test.describe("ReqRes API Tests", () => {
  const env = EnvironmentManager.getInstance();
  const apiKey = env.getReqResApiKey();
  let payloads: any;

  // Tests will run since API key is now configured

  test.beforeAll(() => {
    payloads = DataHelper.readJsonData<any>("apiPayloads.json");
  });

  test("[API] [ReqRes] should get list of users", async ({ reqResClient }) => {
    test.info().annotations.push({ type: 'epic', description: "API" });
    test.info().annotations.push({ type: 'feature', description: "ReqRes Users" });
    test.info().annotations.push({ type: 'severity', description: "critical" });
    test.info().annotations.push({ type: 'tag', description: "API" });
    test.info().annotations.push({ type: 'tag', description: "ReqRes" });
    test.info().annotations.push({ type: 'tag', description: "Smoke" });

    let response: any;
    await test.step("Fetch users list from page 1", async () => {
      response = await reqResClient.getUsers(1);
    });

    await test.step("Verify response status and data structure", async () => {
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("data");
      expect(Array.isArray(response.data.data)).toBe(true);
    });
  });

  test("[API] [ReqRes] should get single user by ID", async ({ reqResClient }) => {
    test.info().annotations.push({ type: 'epic', description: "API" });
    test.info().annotations.push({ type: 'feature', description: "ReqRes Users" });
    test.info().annotations.push({ type: 'severity', description: "normal" });

    let response: any;
    await test.step("Fetch user with ID 2", async () => {
      response = await reqResClient.getUserById(2);
    });

    await test.step("Verify user ID matches", async () => {
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("data");
      expect(response.data.data).toHaveProperty("id", 2);
    });
  });

  test("[API] [ReqRes] should create new user", async ({ reqResClient }) => {
    test.info().annotations.push({ type: 'epic', description: "API" });
    test.info().annotations.push({ type: 'feature', description: "ReqRes Users" });
    test.info().annotations.push({ type: 'severity', description: "critical" });

    const newUser = payloads.reqres.newUser;
    let response: any;

    await test.step("Send POST request to create user", async () => {
      response = await reqResClient.createUser(newUser);
    });

    await test.step("Verify user is created", async () => {
      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty("name", newUser.name);
      expect(response.data).toHaveProperty("job", newUser.job);
      expect(response.data).toHaveProperty("id");
    });
  });

  test("[API] [ReqRes] should update user", async ({ reqResClient }) => {
    test.info().annotations.push({ type: 'epic', description: "API" });
    test.info().annotations.push({ type: 'feature', description: "ReqRes Users" });
    test.info().annotations.push({ type: 'severity', description: "normal" });

    const updatedUser = payloads.reqres.updatedUser;
    let response: any;

    await test.step("Send PUT request to update user 2", async () => {
      response = await reqResClient.updateUser(2, updatedUser);
    });

    await test.step("Verify user is updated", async () => {
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("name", updatedUser.name);
      expect(response.data).toHaveProperty("job", updatedUser.job);
    });
  });

  test("[API] [ReqRes] should delete user", async ({ reqResClient }) => {
    test.info().annotations.push({ type: 'epic', description: "API" });
    test.info().annotations.push({ type: 'feature', description: "ReqRes Users" });
    test.info().annotations.push({ type: 'severity', description: "normal" });

    let response: any;
    await test.step("Send DELETE request for user 2", async () => {
      response = await reqResClient.deleteUser(2);
    });

    await test.step("Verify deletion status 204", async () => {
      expect(response.status).toBe(204);
    });
  });

  test("[API] [ReqRes] should login successfully", async ({ reqResClient }) => {
    test.info().annotations.push({ type: 'epic', description: "API Authentication" });
    test.info().annotations.push({ type: 'feature', description: "ReqRes Login" });
    test.info().annotations.push({ type: 'severity', description: "blocker" });
    test.info().annotations.push({ type: 'tag', description: "Security" });

    const credentials = {
      email: "eve.holt@reqres.in",
      password: "cityslicka",
    };

    let response: any;
    await test.step("Send login credentials", async () => {
      response = await reqResClient.login(credentials);
    });

    await test.step("Verify token is returned", async () => {
      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty("token");
    });
  });
});
