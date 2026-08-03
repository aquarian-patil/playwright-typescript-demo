# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\dummyjson.spec.ts >> DummyJSON API Tests >> Products API >> should handle non-existent product ID gracefully
- Location: tests\api\dummyjson.spec.ts:102:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 404
Received: undefined
```

# Test source

```ts
  11  |  * - Rich test data: products, users, authentication
  12  |  * 
  13  |  * Test Coverage:
  14  |  * - Authentication flow
  15  |  * - Products CRUD operations
  16  |  * - Users retrieval
  17  |  * - Search functionality
  18  |  */
  19  | test.describe('DummyJSON API Tests', () => {
  20  |   let client: DummyJsonClient;
  21  |   let env: EnvironmentManager;
  22  | 
  23  |   test.beforeAll(() => {
  24  |     client = new DummyJsonClient();
  25  |     env = EnvironmentManager.getInstance();
  26  |   });
  27  | 
  28  |   test.describe('Authentication', () => {
  29  |     test('should login with valid credentials', async () => {
  30  |       const response = await client.login({
  31  |         username: env.getDummyJsonUsername(),
  32  |         password: env.getDummyJsonPassword(),
  33  |       });
  34  | 
  35  |       expect(response.status).toBe(200);
  36  |       expect(response.data).toHaveProperty('accessToken');
  37  |       expect(response.data).toHaveProperty('refreshToken');
  38  |       expect(response.data).toHaveProperty('id');
  39  |       expect(response.data).toHaveProperty('username');
  40  |       expect(response.data.username).toBe('emilys');
  41  |       
  42  |       // Validate token format (JWT)
  43  |       expect(typeof response.data.accessToken).toBe('string');
  44  |       expect(response.data.accessToken.length).toBeGreaterThan(0);
  45  |     });
  46  | 
  47  |     test('should fail login with invalid credentials', async () => {
  48  |       try {
  49  |         await client.login({
  50  |           username: 'invalid_user',
  51  |           password: 'wrong_password',
  52  |         });
  53  |         // If no error is thrown, fail the test
  54  |         expect(true).toBe(false);
  55  |       } catch (error: any) {
  56  |         // Expect 400 error for invalid credentials
  57  |         expect(error.response?.status).toBe(400);
  58  |         expect(error.response?.data).toHaveProperty('message');
  59  |       }
  60  |     });
  61  |   });
  62  | 
  63  |   test.describe('Products API', () => {
  64  |     test('should get list of products', async () => {
  65  |       const response = await client.getProducts();
  66  | 
  67  |       expect(response.status).toBe(200);
  68  |       expect(response.data).toHaveProperty('products');
  69  |       expect(Array.isArray(response.data.products)).toBe(true);
  70  |       expect(response.data.products.length).toBeGreaterThan(0);
  71  |       
  72  |       // Validate pagination metadata
  73  |       expect(response.data).toHaveProperty('total');
  74  |       expect(response.data).toHaveProperty('skip');
  75  |       expect(response.data).toHaveProperty('limit');
  76  |       
  77  |       // Validate product structure
  78  |       const firstProduct = response.data.products[0];
  79  |       expect(firstProduct).toHaveProperty('id');
  80  |       expect(firstProduct).toHaveProperty('title');
  81  |       expect(firstProduct).toHaveProperty('price');
  82  |       expect(firstProduct).toHaveProperty('category');
  83  |     });
  84  | 
  85  |     test('should get product by ID', async () => {
  86  |       const productId = 1;
  87  |       const response = await client.getProductById(productId);
  88  | 
  89  |       expect(response.status).toBe(200);
  90  |       expect(response.data).toHaveProperty('id', productId);
  91  |       expect(response.data).toHaveProperty('title');
  92  |       expect(response.data).toHaveProperty('description');
  93  |       expect(response.data).toHaveProperty('price');
  94  |       expect(response.data).toHaveProperty('category');
  95  |       expect(response.data).toHaveProperty('brand');
  96  |       
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
> 111 |         expect(error.response?.status).toBe(404);
      |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
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
  197 |         expect(error.response?.status).toBe(404);
  198 |         expect(error.response?.data).toHaveProperty('message');
  199 |       }
  200 |     });
  201 |   });
  202 | });
  203 | 
```