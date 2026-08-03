# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api\petstore.spec.ts >> Swagger Petstore API Tests >> Pet API - CRUD Operations >> should handle non-existent pet ID gracefully
- Location: tests\api\petstore.spec.ts:144:9

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 404
Received: undefined
```

# Test source

```ts
  53  |       
  54  |       // Store pet ID for later tests
  55  |       createdPetId = response.data.id;
  56  |       
  57  |       // Validate tags structure
  58  |       expect(Array.isArray(response.data.tags)).toBe(true);
  59  |       expect(response.data.tags.length).toBeGreaterThan(0);
  60  |     });
  61  | 
  62  |     test('should get pet by ID', async () => {
  63  |       // Use a known existing pet ID from Petstore demo data
  64  |       const petId = createdPetId || 1;
  65  |       const response = await client.getPetById(petId);
  66  | 
  67  |       expect(response.status).toBe(200);
  68  |       expect(response.data).toHaveProperty('id');
  69  |       expect(response.data).toHaveProperty('name');
  70  |       expect(response.data).toHaveProperty('photoUrls');
  71  |       expect(Array.isArray(response.data.photoUrls)).toBe(true);
  72  |     });
  73  | 
  74  |     test('should find pets by status - available', async () => {
  75  |       const response = await client.findPetsByStatus('available');
  76  | 
  77  |       expect(response.status).toBe(200);
  78  |       expect(Array.isArray(response.data)).toBe(true);
  79  |       
  80  |       if (response.data.length > 0) {
  81  |         // All pets should have 'available' status
  82  |         response.data.forEach((pet: any) => {
  83  |           expect(pet.status).toBe('available');
  84  |         });
  85  |         
  86  |         // Validate pet structure
  87  |         const firstPet = response.data[0];
  88  |         expect(firstPet).toHaveProperty('id');
  89  |         expect(firstPet).toHaveProperty('name');
  90  |         expect(firstPet).toHaveProperty('photoUrls');
  91  |       }
  92  |     });
  93  | 
  94  |     test('should find pets by status - pending', async () => {
  95  |       const response = await client.findPetsByStatus('pending');
  96  | 
  97  |       expect(response.status).toBe(200);
  98  |       expect(Array.isArray(response.data)).toBe(true);
  99  |       
  100 |       if (response.data.length > 0) {
  101 |         // Verify pending status
  102 |         response.data.forEach((pet: any) => {
  103 |           expect(pet.status).toBe('pending');
  104 |         });
  105 |       }
  106 |     });
  107 | 
  108 |     test('should find pets by status - sold', async () => {
  109 |       const response = await client.findPetsByStatus('sold');
  110 | 
  111 |       expect(response.status).toBe(200);
  112 |       expect(Array.isArray(response.data)).toBe(true);
  113 |       
  114 |       if (response.data.length > 0) {
  115 |         // Verify sold status
  116 |         response.data.forEach((pet: any) => {
  117 |           expect(pet.status).toBe('sold');
  118 |         });
  119 |       }
  120 |     });
  121 | 
  122 |     test('should update an existing pet', async () => {
  123 |       const petId = createdPetId || 1;
  124 |       
  125 |       // First get the pet
  126 |       const getResponse = await client.getPetById(petId);
  127 |       const existingPet = getResponse.data;
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
> 153 |         expect(error.response?.status).toBe(404);
      |                                        ^ Error: expect(received).toBe(expected) // Object.is equality
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
  228 |         expect(error.response?.status).toBe(404);
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
```