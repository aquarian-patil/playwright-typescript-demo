import { test, expect } from '@playwright/test';
import { JsonPlaceholderClient } from '../../src/api/clients/JsonPlaceholderClient';

test.describe('JSONPlaceholder API Tests', () => {
  let client: JsonPlaceholderClient;

  test.beforeAll(() => {
    client = new JsonPlaceholderClient();
  });

  test.describe('Posts API - CRUD Operations', () => {
    test('should get all posts', async () => {
      const response = await client.getPosts();

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
    });

    test('should get post by ID', async () => {
      const response = await client.getPostById(1);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id', 1);
      expect(response.data).toHaveProperty('title');
      expect(response.data).toHaveProperty('body');
      expect(response.data).toHaveProperty('userId');
    });

    test('should create a new post', async () => {
      const newPost = {
        title: 'Test Post',
        body: 'This is a test post',
        userId: 1,
      };

      const response = await client.createPost(newPost);

      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('id');
      expect(response.data.title).toBe(newPost.title);
      expect(response.data.body).toBe(newPost.body);
    });

    test('should update a post (PUT)', async () => {
      const updatedPost = {
        id: 1,
        title: 'Updated Title',
        body: 'Updated body',
        userId: 1,
      };

      const response = await client.updatePost(1, updatedPost);

      expect(response.status).toBe(200);
      expect(response.data.title).toBe(updatedPost.title);
    });

    test('should partially update a post (PATCH)', async () => {
      const partialUpdate = {
        title: 'Partially Updated Title',
      };

      const response = await client.patchPost(1, partialUpdate);

      expect(response.status).toBe(200);
      expect(response.data.title).toBe(partialUpdate.title);
    });

    test('should delete a post', async () => {
      const response = await client.deletePost(1);

      expect(response.status).toBe(200);
    });
  });

  test.describe('Comments API', () => {
    test('should get all comments', async () => {
      const response = await client.getComments();

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
    });

    test('should get comments for a specific post', async () => {
      const response = await client.getCommentsByPostId(1);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
      expect(response.data[0]).toHaveProperty('postId', 1);
    });
  });

  test.describe('Users API', () => {
    test('should get all users', async () => {
      const response = await client.getUsers();

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
    });

    test('should get user by ID', async () => {
      const response = await client.getUserById(1);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id', 1);
      expect(response.data).toHaveProperty('name');
      expect(response.data).toHaveProperty('email');
    });
  });

  test.describe('Todos API', () => {
    test('should get all todos', async () => {
      const response = await client.getTodos();

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
    });

    test('should get todo by ID', async () => {
      const response = await client.getTodoById(1);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id', 1);
      expect(response.data).toHaveProperty('title');
      expect(response.data).toHaveProperty('completed');
    });

    test('should create a new todo', async () => {
      const newTodo = {
        title: 'Test Todo',
        completed: false,
        userId: 1,
      };

      const response = await client.createTodo(newTodo);

      expect(response.status).toBe(201);
      expect(response.data).toHaveProperty('id');
      expect(response.data.title).toBe(newTodo.title);
    });
  });

  test.describe('Albums API', () => {
    test('should get all albums', async () => {
      const response = await client.getAlbums();

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
    });

    test('should get album by ID', async () => {
      const response = await client.getAlbumById(1);

      expect(response.status).toBe(200);
      expect(response.data).toHaveProperty('id', 1);
      expect(response.data).toHaveProperty('title');
    });

    test('should get photos from an album', async () => {
      const response = await client.getPhotosByAlbumId(1);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.data)).toBe(true);
      expect(response.data.length).toBeGreaterThan(0);
      expect(response.data[0]).toHaveProperty('albumId', 1);
    });
  });
});
