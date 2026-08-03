# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\petstore.spec.ts >> Swagger Petstore API Tests >> Store API - Inventory and Orders >> should handle invalid order ID gracefully
- Location: tests\api\petstore.spec.ts:219:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 404
Received: undefined
```

# Test source

```ts
  128 |       
  129 |       // Update the pet
  130 |       const updatedPet = {
  131 |         ...existingPet,
  132 |         name: `Updated ${existingPet.name}`,
  133 |         status: 'sold' as const,
  134 |       };
  135 | 
  136 |       const response = await client.updatePet(updatedPet);
  137 | 
  138 |       expect(response.status).toBe(200);
  139 |       expect(response.data.id).toBe(petId);
  140 |       expect(response.data.name).toBe(updatedPet.name);
  141 |       expect(response.data.status).toBe('sold');
  142 |     });
  143 | 
  144 |     test('should handle non-existent pet ID gracefully', async () => {
  145 |       const nonExistentId = 999999999;
  146 |       
  147 |       try {
  148 |         await client.getPetById(nonExistentId);
  149 |         // If no error is thrown, fail the test
  150 |         expect(true).toBe(false);
  151 |       } catch (error: any) {
  152 |         // Expect 404 error
  153 |         expect(error.response?.status).toBe(404);
  154 |       }
  155 |     });
  156 | 
  157 |     test('should delete a pet', async () => {
  158 |       if (!createdPetId) {
  159 |         test.skip();
  160 |         return;
  161 |       }
  162 | 
  163 |       const response = await client.deletePet(createdPetId);
  164 | 
  165 |       expect(response.status).toBe(200);
  166 |     });
  167 |   });
  168 | 
  169 |   test.describe('Store API - Inventory and Orders', () => {
  170 |     test('should get store inventory', async () => {
  171 |       const response = await client.getInventory();
  172 | 
  173 |       expect(response.status).toBe(200);
  174 |       expect(typeof response.data).toBe('object');
  175 |       
  176 |       // Inventory contains status counts
  177 |       // Example: { available: 10, pending: 5, sold: 3 }
  178 |       Object.keys(response.data).forEach((key) => {
  179 |         expect(typeof response.data[key]).toBe('number');
  180 |       });
  181 |     });
  182 | 
  183 |     test('should place an order for a pet', async () => {
  184 |       const newOrder = {
  185 |         petId: 1,
  186 |         quantity: 1,
  187 |         shipDate: new Date().toISOString(),
  188 |         status: 'placed' as const,
  189 |         complete: false,
  190 |       };
  191 | 
  192 |       const response = await client.placeOrder(newOrder);
  193 | 
  194 |       expect(response.status).toBe(200);
  195 |       expect(response.data).toHaveProperty('id');
  196 |       expect(response.data.petId).toBe(newOrder.petId);
  197 |       expect(response.data.quantity).toBe(newOrder.quantity);
  198 |       expect(response.data.status).toBe(newOrder.status);
  199 |       
  200 |       // Store order ID for later tests
  201 |       createdOrderId = response.data.id;
  202 |     });
  203 | 
  204 |     test('should get order by ID', async () => {
  205 |       // Use a valid order ID (1-10 are valid in Petstore demo)
  206 |       const orderId = createdOrderId || 1;
  207 |       const response = await client.getOrderById(orderId);
  208 | 
  209 |       expect(response.status).toBe(200);
  210 |       expect(response.data).toHaveProperty('id');
  211 |       expect(response.data).toHaveProperty('petId');
  212 |       expect(response.data).toHaveProperty('quantity');
  213 |       expect(response.data).toHaveProperty('status');
  214 |       
  215 |       // Validate status is one of the allowed values
  216 |       expect(['placed', 'approved', 'delivered']).toContain(response.data.status);
  217 |     });
  218 | 
  219 |     test('should handle invalid order ID gracefully', async () => {
  220 |       const invalidOrderId = 999999;
  221 |       
  222 |       try {
  223 |         await client.getOrderById(invalidOrderId);
  224 |         // If no error, fail the test
  225 |         expect(true).toBe(false);
  226 |       } catch (error: any) {
  227 |         // Expect 404 error
> 228 |         expect(error.response?.status).toBe(404);
      |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
  229 |       }
  230 |     });
  231 | 
  232 |     test('should delete an order', async () => {
  233 |       if (!createdOrderId) {
  234 |         test.skip();
  235 |         return;
  236 |       }
  237 | 
  238 |       const response = await client.deleteOrder(createdOrderId);
  239 | 
  240 |       expect(response.status).toBe(200);
  241 |     });
  242 |   });
  243 | 
  244 |   test.describe('User API - User Management', () => {
  245 |     test('should create a new user', async () => {
  246 |       const newUser = {
  247 |         username: testUsername,
  248 |         firstName: faker.person.firstName(),
  249 |         lastName: faker.person.lastName(),
  250 |         email: faker.internet.email(),
  251 |         password: faker.internet.password(),
  252 |         phone: faker.phone.number(),
  253 |         userStatus: 1,
  254 |       };
  255 | 
  256 |       const response = await client.createUser(newUser);
  257 | 
  258 |       expect(response.status).toBe(200);
  259 |       expect(response.data).toHaveProperty('message');
  260 |     });
  261 | 
  262 |     test('should get user by username', async () => {
  263 |       const response = await client.getUserByUsername(testUsername);
  264 | 
  265 |       expect(response.status).toBe(200);
  266 |       expect(response.data).toHaveProperty('username', testUsername);
  267 |       expect(response.data).toHaveProperty('firstName');
  268 |       expect(response.data).toHaveProperty('lastName');
  269 |       expect(response.data).toHaveProperty('email');
  270 |     });
  271 | 
  272 |     test('should login user', async () => {
  273 |       const response = await client.loginUser(testUsername, 'password123');
  274 | 
  275 |       expect(response.status).toBe(200);
  276 |       expect(response.data).toHaveProperty('message');
  277 |       
  278 |       // Response contains session information
  279 |       expect(response.data.message).toContain('logged in user session');
  280 |     });
  281 | 
  282 |     test('should logout user', async () => {
  283 |       const response = await client.logoutUser();
  284 | 
  285 |       expect(response.status).toBe(200);
  286 |       expect(response.data).toHaveProperty('message');
  287 |     });
  288 | 
  289 |     test('should update user', async () => {
  290 |       const updatedUser = {
  291 |         username: testUsername,
  292 |         firstName: 'Updated',
  293 |         lastName: 'Name',
  294 |         email: faker.internet.email(),
  295 |         password: 'newpassword123',
  296 |         phone: faker.phone.number(),
  297 |         userStatus: 1,
  298 |       };
  299 | 
  300 |       const response = await client.updateUser(testUsername, updatedUser);
  301 | 
  302 |       expect(response.status).toBe(200);
  303 |     });
  304 | 
  305 |     test('should create multiple users with array', async () => {
  306 |       const users = [
  307 |         {
  308 |           username: `user1_${faker.string.alphanumeric(6)}`,
  309 |           firstName: faker.person.firstName(),
  310 |           lastName: faker.person.lastName(),
  311 |           email: faker.internet.email(),
  312 |           password: faker.internet.password(),
  313 |         },
  314 |         {
  315 |           username: `user2_${faker.string.alphanumeric(6)}`,
  316 |           firstName: faker.person.firstName(),
  317 |           lastName: faker.person.lastName(),
  318 |           email: faker.internet.email(),
  319 |           password: faker.internet.password(),
  320 |         },
  321 |       ];
  322 | 
  323 |       const response = await client.createUsersWithArray(users);
  324 | 
  325 |       expect(response.status).toBe(200);
  326 |       expect(response.data).toHaveProperty('message');
  327 |     });
  328 | 
```