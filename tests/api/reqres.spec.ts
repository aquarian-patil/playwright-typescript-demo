import { test, expect } from '@playwright/test';
import { ReqResClient } from '../../src/api/clients/ReqResClient';
import { EnvironmentManager } from '../../src/config/EnvironmentManager';

test.describe('ReqRes API Tests', () => {
  let client: ReqResClient;
  const env = EnvironmentManager.getInstance();
  const apiKey = env.getReqResApiKey();

  // Skip all tests if API key is not configured
  test.skip(!apiKey, '⚠️ REQRES_API_KEY not configured - skipping API tests');

  test.beforeAll(() => {
    client = new ReqResClient();
  });

  test('should get list of users', async () => {
    const response = await client.getUsers(1);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('data');
    expect(Array.isArray(response.data.data)).toBe(true);
  });

  test('should get single user by ID', async () => {
    const response = await client.getUserById(2);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('data');
    expect(response.data.data).toHaveProperty('id', 2);
  });

  test('should create new user', async () => {
    const newUser = {
      name: 'John Doe',
      job: 'QA Engineer',
    };

    const response = await client.createUser(newUser);

    expect(response.status).toBe(201);
    expect(response.data).toHaveProperty('name', newUser.name);
    expect(response.data).toHaveProperty('job', newUser.job);
    expect(response.data).toHaveProperty('id');
  });

  test('should update user', async () => {
    const updatedUser = {
      name: 'Jane Doe',
      job: 'Senior QA Engineer',
    };

    const response = await client.updateUser(2, updatedUser);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('name', updatedUser.name);
    expect(response.data).toHaveProperty('job', updatedUser.job);
  });

  test('should delete user', async () => {
    const response = await client.deleteUser(2);

    expect(response.status).toBe(204);
  });

  test('should login successfully', async () => {
    const credentials = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };

    const response = await client.login(credentials);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty('token');
  });
});
