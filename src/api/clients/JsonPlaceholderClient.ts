import { BaseApiClient } from '../BaseApiClient';
import { EnvironmentManager } from '../../config/EnvironmentManager';
import { IApiResponse } from '../../interfaces/IApiResponse';

/**
 * JsonPlaceholderClient - API client for JSONPlaceholder API
 */
export class JsonPlaceholderClient extends BaseApiClient {
  constructor() {
    const env = EnvironmentManager.getInstance();
    super(env.getJsonPlaceholderApiUrl());
  }

  // Posts
  async getPosts(): Promise<IApiResponse<any>> {
    return await this.get('/posts');
  }

  async getPostById(id: number): Promise<IApiResponse<any>> {
    return await this.get(`/posts/${id}`);
  }

  async createPost(post: any): Promise<IApiResponse<any>> {
    return await this.post('/posts', post);
  }

  async updatePost(id: number, post: any): Promise<IApiResponse<any>> {
    return await this.put(`/posts/${id}`, post);
  }

  async patchPost(id: number, post: any): Promise<IApiResponse<any>> {
    return await this.patch(`/posts/${id}`, post);
  }

  async deletePost(id: number): Promise<IApiResponse<any>> {
    return await this.delete(`/posts/${id}`);
  }

  // Comments
  async getComments(): Promise<IApiResponse<any>> {
    return await this.get('/comments');
  }

  async getCommentsByPostId(postId: number): Promise<IApiResponse<any>> {
    return await this.get(`/posts/${postId}/comments`);
  }

  // Users
  async getUsers(): Promise<IApiResponse<any>> {
    return await this.get('/users');
  }

  async getUserById(id: number): Promise<IApiResponse<any>> {
    return await this.get(`/users/${id}`);
  }

  // Todos
  async getTodos(): Promise<IApiResponse<any>> {
    return await this.get('/todos');
  }

  async getTodoById(id: number): Promise<IApiResponse<any>> {
    return await this.get(`/todos/${id}`);
  }

  async createTodo(todo: any): Promise<IApiResponse<any>> {
    return await this.post('/todos', todo);
  }

  // Albums
  async getAlbums(): Promise<IApiResponse<any>> {
    return await this.get('/albums');
  }

  async getAlbumById(id: number): Promise<IApiResponse<any>> {
    return await this.get(`/albums/${id}`);
  }

  async getPhotosByAlbumId(albumId: number): Promise<IApiResponse<any>> {
    return await this.get(`/albums/${albumId}/photos`);
  }
}
