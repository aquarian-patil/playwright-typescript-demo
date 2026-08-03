# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\dummyjson.spec.ts >> DummyJSON API Tests >> Users API >> should handle non-existent user ID gracefully
- Location: tests\api\dummyjson.spec.ts:188:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 404
Received: undefined
```

# Test source

```ts
  97  |       // Validate price is a positive number
  98  |       expect(typeof response.data.price).toBe('number');
  99  |       expect(response.data.price).toBeGreaterThan(0);
  100 |     });
  101 | 
  102 |     test('should handle non-existent product ID gracefully', async () => {
  103 |       const nonExistentId = 999999;
  104 |       
  105 |       try {
  106 |         await client.getProductById(nonExistentId);
  107 |         // If no error is thrown, fail the test
  108 |         expect(true).toBe(false);
  109 |       } catch (error: any) {
  110 |         // Expect 404 error for non-existent product
  111 |         expect(error.response?.status).toBe(404);
  112 |         expect(error.response?.data).toHaveProperty('message');
  113 |       }
  114 |     });
  115 | 
  116 |     test('should search products by query', async () => {
  117 |       const searchQuery = 'phone';
  118 |       const response = await client.searchProducts(searchQuery);
  119 | 
  120 |       expect(response.status).toBe(200);
  121 |       expect(response.data).toHaveProperty('products');
  122 |       expect(Array.isArray(response.data.products)).toBe(true);
  123 |       
  124 |       // Verify search results contain the query term
  125 |       if (response.data.products.length > 0) {
  126 |         const hasMatchingProduct = response.data.products.some(
  127 |           (product: any) => 
  128 |             product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  129 |             product.description?.toLowerCase().includes(searchQuery.toLowerCase())
  130 |         );
  131 |         expect(hasMatchingProduct).toBe(true);
  132 |       }
  133 |       
  134 |       // Validate pagination in search results
  135 |       expect(response.data).toHaveProperty('total');
  136 |       expect(response.data).toHaveProperty('skip');
  137 |       expect(response.data).toHaveProperty('limit');
  138 |     });
  139 | 
  140 |     test('should return empty array for non-matching search query', async () => {
  141 |       const searchQuery = 'xyznonexistentproduct12345';
  142 |       const response = await client.searchProducts(searchQuery);
  143 | 
  144 |       expect(response.status).toBe(200);
  145 |       expect(response.data).toHaveProperty('products');
  146 |       expect(Array.isArray(response.data.products)).toBe(true);
  147 |       expect(response.data.products.length).toBe(0);
  148 |     });
  149 |   });
  150 | 
  151 |   test.describe('Users API', () => {
  152 |     test('should get list of users', async () => {
  153 |       const response = await client.getUsers();
  154 | 
  155 |       expect(response.status).toBe(200);
  156 |       expect(response.data).toHaveProperty('users');
  157 |       expect(Array.isArray(response.data.users)).toBe(true);
  158 |       expect(response.data.users.length).toBeGreaterThan(0);
  159 |       
  160 |       // Validate pagination metadata
  161 |       expect(response.data).toHaveProperty('total');
  162 |       expect(response.data).toHaveProperty('skip');
  163 |       expect(response.data).toHaveProperty('limit');
  164 |       
  165 |       // Validate user structure
  166 |       const firstUser = response.data.users[0];
  167 |       expect(firstUser).toHaveProperty('id');
  168 |       expect(firstUser).toHaveProperty('firstName');
  169 |       expect(firstUser).toHaveProperty('lastName');
  170 |       expect(firstUser).toHaveProperty('email');
  171 |     });
  172 | 
  173 |     test('should get user by ID', async () => {
  174 |       const userId = 1;
  175 |       const response = await client.getUserById(userId);
  176 | 
  177 |       expect(response.status).toBe(200);
  178 |       expect(response.data).toHaveProperty('id', userId);
  179 |       expect(response.data).toHaveProperty('firstName');
  180 |       expect(response.data).toHaveProperty('lastName');
  181 |       expect(response.data).toHaveProperty('email');
  182 |       expect(response.data).toHaveProperty('username');
  183 |       
  184 |       // Validate email format
  185 |       expect(response.data.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  186 |     });
  187 | 
  188 |     test('should handle non-existent user ID gracefully', async () => {
  189 |       const nonExistentId = 999999;
  190 |       
  191 |       try {
  192 |         await client.getUserById(nonExistentId);
  193 |         // If no error is thrown, fail the test
  194 |         expect(true).toBe(false);
  195 |       } catch (error: any) {
  196 |         // Expect 404 error for non-existent user
> 197 |         expect(error.response?.status).toBe(404);
      |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  198 |         expect(error.response?.data).toHaveProperty('message');
  199 |       }
  200 |     });
  201 |   });
  202 | });
  203 | 
```