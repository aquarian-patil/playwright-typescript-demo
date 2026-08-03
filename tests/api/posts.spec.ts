import { test, expect } from '@playwright/test';

test.describe('JSONPlaceholder - API Integration Tests', () => {
  const API_BASE = 'https://jsonplaceholder.typicode.com';

  test('GET /posts/1 returns valid post data', async ({ request }) => {
    const response = await request.get(`${API_BASE}/posts/1`);
    
    expect(response.status()).toBe(200);
    const body = await response.json();
    
    expect(body).toHaveProperty('id', 1);
    expect(body).toHaveProperty('userId');
    expect(typeof body.title).toBe('string');
  });

  test('POST /posts creates a new resource', async ({ request }) => {
    const payload = {
      title: 'Automated Test Post',
      body: 'Created using Playwright API Request fixture',
      userId: 1,
    };

    const response = await request.post(`${API_BASE}/posts`, {
      data: payload,
    });

    expect(response.status()).toBe(201);
    const body = await response.json();
    expect(body.title).toBe(payload.title);
    expect(body.id).toBeTruthy();
  });
});