# E-commerce API Testing Documentation

This document provides comprehensive testing information for all API endpoints in the e-commerce application using JWT authentication.

## Base URL
- **Development**: `http://localhost:3000`
- **Production**: `https://your-domain.com`

## Authentication

This API uses JWT (JSON Web Tokens) for authentication. Include the JWT token in the Authorization header for protected endpoints:

\`\`\`
Authorization: Bearer your-jwt-token-here
\`\`\`

### Getting a JWT Token

1. **Seed the database** (creates admin user):
   \`\`\`bash
   curl -X GET http://localhost:3000/api/seed
   \`\`\`

2. **Login to get token**:
   \`\`\`bash
   curl -X POST http://localhost:3000/api/auth/signin \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@example.com","password":"password123"}'
   \`\`\`

   Response:
   \`\`\`json
   {
     "success": true,
     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
     "user": {
       "id": "user-id",
       "name": "Admin User",
       "email": "admin@example.com",
       "role": "admin"
     }
   }
   \`\`\`

3. **Use the token** in subsequent requests:
   \`\`\`bash
   curl -X GET http://localhost:3000/api/auth/verify \
     -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
   \`\`\`

---

## 1. Authentication APIs

### 1.1 Sign In
**Endpoint**: `POST /api/auth/signin`
**Description**: Authenticate user with credentials and get JWT token
**Authentication**: None required

**Request Body**:
\`\`\`json
{
  "email": "admin@example.com",
  "password": "password123"
}
\`\`\`

**Response**:
\`\`\`json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user-id",
    "name": "Admin User",
    "email": "admin@example.com",
    "role": "admin"
  }
}
\`\`\`

**Error Response**:
\`\`\`json
{
  "error": "Invalid password"
}
\`\`\`

**Test with cURL**:
\`\`\`bash
curl -X POST http://localhost:3000/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}'
\`\`\`

### 1.2 Verify Token
**Endpoint**: `GET /api/auth/verify`
**Description**: Verify JWT token validity
**Authentication**: JWT token required

**Headers**:
\`\`\`
Authorization: Bearer your-jwt-token-here
\`\`\`

**Response**:
\`\`\`json
{
  "success": true,
  "user": {
    "id": "user-id",
    "email": "admin@example.com",
    "role": "admin"
  }
}
\`\`\`

**Error Response**:
\`\`\`json
{
  "error": "Invalid or missing token"
}
\`\`\`

**Test with cURL**:
\`\`\`bash
curl -X GET http://localhost:3000/api/auth/verify \
  -H "Authorization: Bearer your-jwt-token-here"
\`\`\`

---

## 2. Product APIs

### 2.1 Get All Products
**Endpoint**: `GET /api/products`
**Description**: Retrieve all products with optional filtering
**Authentication**: None required

**Query Parameters**:
- `featured` (optional): `true` | `false` - Filter featured products only

**Response**:
\`\`\`json
[
  {
    "_id": "product-id",
    "title": "Product Title",
    "description": "Product description",
    "price": 99.99,
    "image": "https://example.com/image.jpg",
    "sku": "SKU-001",
    "rating": 4.5,
    "reviews": 10,
    "freeShipping": true,
    "featured": true,
    "isActive": true,
    "order": 1,
    "category": "category-id",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
\`\`\`

**Test with cURL**:
\`\`\`bash
# Get all products
curl -X GET http://localhost:3000/api/products

# Get featured products only
curl -X GET "http://localhost:3000/api/products?featured=true"
\`\`\`

### 2.2 Get Product by ID
**Endpoint**: `GET /api/products/{id}`
**Description**: Retrieve a specific product by ID
**Authentication**: None required

**Path Parameters**:
- `id` (required): Product ID

**Response**:
\`\`\`json
{
  "_id": "product-id",
  "title": "Product Title",
  "description": "Product description",
  "price": 99.99,
  "image": "https://example.com/image.jpg",
  "sku": "SKU-001",
  "rating": 4.5,
  "reviews": 10,
  "freeShipping": true,
  "featured": true,
  "isActive": true,
  "order": 1,
  "category": "category-id"
}
\`\`\`

**Error Response** (404):
\`\`\`json
{
  "error": "Product not found"
}
\`\`\`

**Test with cURL**:
\`\`\`bash
curl -X GET http://localhost:3000/api/products/product-id
\`\`\`

### 2.3 Create Product
**Endpoint**: `POST /api/products`
**Description**: Create a new product
**Authentication**: Admin JWT token required

**Headers**:
\`\`\`
Authorization: Bearer your-jwt-token-here
Content-Type: application/json
\`\`\`

**Request Body**:
\`\`\`json
{
  "title": "New Product",
  "description": "Product description",
  "price": 99.99,
  "image": "https://example.com/image.jpg",
  "sku": "SKU-002",
  "rating": 0,
  "reviews": 0,
  "freeShipping": false,
  "featured": false,
  "isActive": true,
  "order": 1,
  "category": "category-id"
}
\`\`\`

**Required Fields**:
- `title` (string)
- `price` (number)
- `image` (string)
- `sku` (string)

**Optional Fields**:
- `description` (string)
- `rating` (number, 0-5)
- `reviews` (number)
- `freeShipping` (boolean)
- `featured` (boolean)
- `isActive` (boolean)
- `order` (number)
- `category` (string)

**Response**:
\`\`\`json
{
  "_id": "new-product-id",
  "title": "New Product",
  "description": "Product description",
  "price": 99.99,
  "image": "https://example.com/image.jpg",
  "sku": "SKU-002",
  "rating": 0,
  "reviews": 0,
  "freeShipping": false,
  "featured": false,
  "isActive": true,
  "order": 1,
  "category": "category-id",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
\`\`\`

**Test with cURL**:
\`\`\`bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-jwt-token-here" \
  -d '{
    "title": "Test Product",
    "price": 99.99,
    "image": "/placeholder.svg",
    "sku": "TEST-001",
    "featured": true,
    "isActive": true
  }'
\`\`\`

### 2.4 Update Product
**Endpoint**: `PUT /api/products/{id}`
**Description**: Update an existing product
**Authentication**: Admin JWT token required

**Headers**:
\`\`\`
Authorization: Bearer your-jwt-token-here
Content-Type: application/json
\`\`\`

**Path Parameters**:
- `id` (required): Product ID

**Request Body**: Same as Create Product

**Response**: Updated product object

**Test with cURL**:
\`\`\`bash
curl -X PUT http://localhost:3000/api/products/product-id \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-jwt-token-here" \
  -d '{
    "title": "Updated Product",
    "price": 149.99,
    "image": "/placeholder.svg",
    "sku": "TEST-001",
    "featured": true,
    "isActive": true
  }'
\`\`\`

### 2.5 Delete Product
**Endpoint**: `DELETE /api/products/{id}`
**Description**: Delete a product
**Authentication**: Admin JWT token required

**Headers**:
\`\`\`
Authorization: Bearer your-jwt-token-here
\`\`\`

**Path Parameters**:
- `id` (required): Product ID

**Response**:
\`\`\`json
{
  "success": true
}
\`\`\`

**Test with cURL**:
\`\`\`bash
curl -X DELETE http://localhost:3000/api/products/product-id \
  -H "Authorization: Bearer your-jwt-token-here"
\`\`\`

---

## 3. Category APIs

### 3.1 Get All Categories
**Endpoint**: `GET /api/categories`
**Description**: Retrieve all categories
**Authentication**: None required

**Response**:
\`\`\`json
[
  {
    "_id": "category-id",
    "title": "Category Title",
    "slug": "category-slug",
    "description": "Category description",
    "image": "https://example.com/image.jpg",
    "isActive": true,
    "order": 1,
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
\`\`\`

**Test with cURL**:
\`\`\`bash
curl -X GET http://localhost:3000/api/categories
\`\`\`

### 3.2 Get Category by ID
**Endpoint**: `GET /api/categories/{id}`
**Description**: Retrieve a specific category by ID
**Authentication**: None required

**Response**: Category object

**Test with cURL**:
\`\`\`bash
curl -X GET http://localhost:3000/api/categories/category-id
\`\`\`

### 3.3 Create Category
**Endpoint**: `POST /api/categories`
**Description**: Create a new category
**Authentication**: Admin JWT token required

**Headers**:
\`\`\`
Authorization: Bearer your-jwt-token-here
Content-Type: application/json
\`\`\`

**Request Body**:
\`\`\`json
{
  "title": "New Category",
  "slug": "new-category",
  "description": "Category description",
  "image": "https://example.com/image.jpg",
  "isActive": true,
  "order": 1
}
\`\`\`

**Required Fields**:
- `title` (string)
- `image` (string)

**Optional Fields**:
- `slug` (string) - Auto-generated if not provided
- `description` (string)
- `isActive` (boolean)
- `order` (number)

**Test with cURL**:
\`\`\`bash
curl -X POST http://localhost:3000/api/categories \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-jwt-token-here" \
  -d '{
    "title": "Test Category",
    "image": "/placeholder.svg",
    "isActive": true
  }'
\`\`\`

### 3.4 Update Category
**Endpoint**: `PUT /api/categories/{id}`
**Description**: Update an existing category
**Authentication**: Admin required

**Path Parameters**:
- `id` (required): Category ID

**Request Body**: Same as Create Category

**Test with cURL**:
\`\`\`bash
curl -X PUT http://localhost:3000/api/categories/category-id \
  -H "Content-Type: application/json" \
  -H "Cookie: next-auth.session-token=your-session-token" \
  -d '{
    "title": "Updated Category",
    "image": "/placeholder.svg",
    "isActive": true
  }'
\`\`\`

### 3.5 Delete Category
**Endpoint**: `DELETE /api/categories/{id}`
**Description**: Delete a category
**Authentication**: Admin required

**Path Parameters**:
- `id` (required): Category ID

**Response**:
\`\`\`json
{
  "success": true
}
\`\`\`

**Test with cURL**:
\`\`\`bash
curl -X DELETE http://localhost:3000/api/categories/category-id \
  -H "Cookie: next-auth.session-token=your-session-token"
\`\`\`

---

## 4. Hero Section API

### 4.1 Get Hero Data
**Endpoint**: `GET /api/hero`
**Description**: Retrieve hero section data
**Authentication**: None required

**Response**:
\`\`\`json
{
  "_id": "hero-id",
  "title": "Hero Title",
  "description": "Hero description",
  "buttonText": "Shop Now",
  "buttonLink": "/shop",
  "image": "https://example.com/hero-image.jpg",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
\`\`\`

**Test with cURL**:
\`\`\`bash
curl -X GET http://localhost:3000/api/hero
\`\`\`

### 4.2 Update Hero Data
**Endpoint**: `POST /api/hero`
**Description**: Update hero section data
**Authentication**: Admin JWT token required

**Headers**:
\`\`\`
Authorization: Bearer your-jwt-token-here
Content-Type: application/json
\`\`\`

**Request Body**:
\`\`\`json
{
  "title": "New Hero Title",
  "description": "New hero description",
  "buttonText": "Shop Now",
  "buttonLink": "/shop",
  "image": "https://example.com/new-hero-image.jpg"
}
\`\`\`

**Required Fields**:
- `title` (string)
- `image` (string)

**Optional Fields**:
- `description` (string)
- `buttonText` (string)
- `buttonLink` (string)

**Test with cURL**:
\`\`\`bash
curl -X POST http://localhost:3000/api/hero \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-jwt-token-here" \
  -d '{
    "title": "Updated Hero Title",
    "description": "Updated description",
    "buttonText": "Shop Now",
    "buttonLink": "/shop",
    "image": "/placeholder.svg"
  }'
\`\`\`

---

## 5. Promo Section API

### 5.1 Get Promo Data
**Endpoint**: `GET /api/promo`
**Description**: Retrieve promo section data
**Authentication**: None required

**Response**:
\`\`\`json
{
  "_id": "promo-id",
  "title": "Promo Title",
  "description": "Promo description",
  "buttonText": "Learn More",
  "buttonLink": "/promo",
  "image": "https://example.com/promo-image.jpg",
  "backgroundColor": "#00b5c8",
  "backgroundOpacity": 0.7,
  "position": "right",
  "isActive": true,
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
\`\`\`

**Test with cURL**:
\`\`\`bash
curl -X GET http://localhost:3000/api/promo
\`\`\`

### 5.2 Update Promo Data
**Endpoint**: `POST /api/promo`
**Description**: Update promo section data
**Authentication**: Admin JWT token required

**Headers**:
\`\`\`
Authorization: Bearer your-jwt-token-here
Content-Type: application/json
\`\`\`

**Request Body**:
\`\`\`json
{
  "title": "New Promo Title",
  "description": "New promo description",
  "buttonText": "Learn More",
  "buttonLink": "/promo",
  "image": "https://example.com/new-promo-image.jpg",
  "backgroundColor": "#00b5c8",
  "backgroundOpacity": 0.7,
  "position": "right",
  "isActive": true
}
\`\`\`

**Required Fields**:
- `title` (string)
- `image` (string)

**Optional Fields**:
- `description` (string)
- `buttonText` (string)
- `buttonLink` (string)
- `backgroundColor` (string)
- `backgroundOpacity` (number, 0-1)
- `position` (string: "left" | "center" | "right")
- `isActive` (boolean)

**Test with cURL**:
\`\`\`bash
curl -X POST http://localhost:3000/api/promo \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer your-jwt-token-here" \
  -d '{
    "title": "Updated Promo",
    "description": "Updated description",
    "buttonText": "Learn More",
    "buttonLink": "/promo",
    "image": "/placeholder.svg",
    "backgroundColor": "#ff0000",
    "backgroundOpacity": 0.8,
    "position": "center",
    "isActive": true
  }'
\`\`\`

---

## 6. File Upload API

### 6.1 Upload Image
**Endpoint**: `POST /api/upload`
**Description**: Upload an image file to Cloudinary
**Authentication**: Admin JWT token required

**Headers**:
\`\`\`
Authorization: Bearer your-jwt-token-here
\`\`\`

**Request**: Multipart form data
- `file` (required): Image file (max 5MB)

**Supported formats**: jpg, jpeg, png, gif, webp

**Response**:
\`\`\`json
{
  "url": "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/ecommerce/filename.jpg",
  "publicId": "ecommerce/filename"
}
\`\`\`

**Error Response** (400):
\`\`\`json
{
  "error": "File must be an image"
}
\`\`\`

**Test with cURL**:
\`\`\`bash
curl -X POST http://localhost:3000/api/upload \
  -H "Authorization: Bearer your-jwt-token-here" \
  -F "file=@/path/to/image.jpg"
\`\`\`

---

## 7. Utility APIs

### 7.1 Seed Database
**Endpoint**: `GET /api/seed`
**Description**: Seed the database with initial admin user
**Authentication**: None required

**Response**:
\`\`\`json
{
  "success": true,
  "message": "Admin user created successfully",
  "user": {
    "_id": "user-id",
    "name": "Admin User",
    "email": "admin@example.com",
    "role": "admin"
  },
  "connectionTest": {
    "success": true,
    "message": "Database connection successful",
    "userCount": 1
  }
}
\`\`\`

**Test with cURL**:
\`\`\`bash
curl -X GET http://localhost:3000/api/seed
\`\`\`

### 7.2 Test Authentication
**Endpoint**: `GET /api/test-auth`
**Description**: Test authentication and user verification
**Authentication**: None required

**Response**:
\`\`\`json
{
  "success": true,
  "user": {
    "id": "user-id",
    "name": "Admin User",
    "email": "admin@example.com",
    "role": "admin"
  },
  "passwordValid": true,
  "message": "Authentication test completed"
}
\`\`\`

**Test with cURL**:
\`\`\`bash
curl -X GET http://localhost:3000/api/test-auth
\`\`\`

### 7.3 Test Database
**Endpoint**: `GET /api/test-db`
**Description**: Test database connection and operations
**Authentication**: None required

**Response**:
\`\`\`json
{
  "success": true,
  "message": "Database test completed successfully",
  "counts": {
    "products": 5,
    "categories": 3,
    "heroes": 1,
    "promos": 1
  },
  "testProduct": {
    "created": true,
    "id": "test-product-id",
    "deleted": true
  }
}
\`\`\`

**Test with cURL**:
\`\`\`bash
curl -X GET http://localhost:3000/api/test-db
\`\`\`

### 7.2 Test JWT
**Endpoint**: `POST /api/test-jwt`
**Description**: Test JWT functionality
**Authentication**: None required

**Request Body Examples**:

**Login Test**:
\`\`\`json
{
  "action": "login",
  "email": "admin@example.com",
  "password": "password123"
}
\`\`\`

**Token Verification Test**:
\`\`\`json
{
  "action": "verify",
  "token": "your-jwt-token-here"
}
\`\`\`

**Generate Test Token**:
\`\`\`json
{
  "action": "generate"
}
\`\`\`

**Test with cURL**:
\`\`\`bash
# Test login
curl -X POST http://localhost:3000/api/test-jwt \
  -H "Content-Type: application/json" \
  -d '{"action":"login","email":"admin@example.com","password":"password123"}'

# Test token verification
curl -X POST http://localhost:3000/api/test-jwt \
  -H "Content-Type: application/json" \
  -d '{"action":"verify","token":"your-jwt-token-here"}'

# Generate test token
curl -X POST http://localhost:3000/api/test-jwt \
  -H "Content-Type: application/json" \
  -d '{"action":"generate"}'
\`\`\`

---

## Complete Testing Workflow

### 1. Setup
\`\`\`bash
# 1. Seed database
curl -X GET http://localhost:3000/api/seed

# 2. Login and get token
TOKEN=$(curl -s -X POST http://localhost:3000/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}' | \
  jq -r '.token')

echo "Token: $TOKEN"
\`\`\`

### 2. Test Protected Endpoints
\`\`\`bash
# Verify token
curl -X GET http://localhost:3000/api/auth/verify \
  -H "Authorization: Bearer $TOKEN"

# Create a product
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "title": "Test Product",
    "price": 99.99,
    "image": "/placeholder.svg",
    "sku": "TEST-001",
    "featured": true,
    "isActive": true
  }'

# Create a category
curl -X POST http://localhost:3000/api/categories \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $TOKEN" \
  -d '{
    "title": "Test Category",
    "image": "/placeholder.svg",
    "isActive": true
  }'
\`\`\`

### 3. Test Public Endpoints
\`\`\`bash
# Get all products
curl -X GET http://localhost:3000/api/products

# Get all categories
curl -X GET http://localhost:3000/api/categories

# Get hero data
curl -X GET http://localhost:3000/api/hero

# Get promo data
curl -X GET http://localhost:3000/api/promo
\`\`\`

---

## Error Responses

### Authentication Errors

**401 - Unauthorized**:
\`\`\`json
{
  "error": "Unauthorized - Admin access required"
}
\`\`\`

**401 - Invalid Token**:
\`\`\`json
{
  "error": "Invalid or missing token"
}
\`\`\`

### Common Error Codes

**400 - Bad Request**:
\`\`\`json
{
  "error": "Validation error",
  "details": [
    {
      "field": "title",
      "message": "Title is required"
    }
  ]
}
\`\`\`

**401 - Unauthorized**:
\`\`\`json
{
  "error": "Unauthorized"
}
\`\`\`

**404 - Not Found**:
\`\`\`json
{
  "error": "Resource not found"
}
\`\`\`

**500 - Internal Server Error**:
\`\`\`json
{
  "error": "Internal server error",
  "details": "Error message"
}
\`\`\`

### Validation Errors

**400 - Bad Request**:
\`\`\`json
{
  "error": "Validation error",
  "details": [
    {
      "field": "title",
      "message": "Title is required"
    }
  ]
}
\`\`\`

### Server Errors

**500 - Internal Server Error**:
\`\`\`json
{
  "error": "Internal server error",
  "details": "Error message"
}
\`\`\`

---

## Testing with Postman

### Environment Variables
\`\`\`json
{
  "baseUrl": "http://localhost:3000",
  "jwtToken": ""
}
\`\`\`

### Collection Structure
1. **Authentication**
   - Sign In
   - Verify Token

2. **Products**
   - Get All Products
   - Get Featured Products
   - Get Product by ID
   - Create Product
   - Update Product
   - Delete Product

3. **Categories**
   - Get All Categories
   - Get Category by ID
   - Create Category
   - Update Category
   - Delete Category

4. **Content Management**
   - Get Hero
   - Update Hero
   - Get Promo
   - Update Promo

5. **File Upload**
   - Upload Image

6. **Utilities**
   - Seed Database
   - Test JWT

### Pre-request Scripts
For authenticated requests, add this pre-request script:
\`\`\`javascript
// For protected endpoints, add this pre-request script:
if (pm.environment.get("jwtToken")) {
    pm.request.headers.add({
        key: "Authorization",
        value: `Bearer ${pm.environment.get("jwtToken")}`
    });
}
\`\`\`

### Test Script to Extract Token
\`\`\`javascript
// Add this to the signin request test script:
if (pm.response.code === 200) {
    const response = pm.response.json();
    if (response.token) {
        pm.environment.set("jwtToken", response.token);
        console.log("JWT token saved to environment");
    }
}
\`\`\`

### Pre-request Script for Authentication
\`\`\`javascript
// For protected endpoints, add this pre-request script:
if (pm.environment.get("jwtToken")) {
    pm.request.headers.add({
        key: "Authorization",
        value: `Bearer ${pm.environment.get("jwtToken")}`
    });
}
\`\`\`

### Test Script to Extract Token
\`\`\`javascript
// Add this to the signin request test script:
if (pm.response.code === 200) {
    const response = pm.response.json();
    if (response.token) {
        pm.environment.set("jwtToken", response.token);
        console.log("JWT token saved to environment");
    }
}
\`\`\`

---

## Testing Checklist

### Before Testing
- [ ] Database is running and accessible
- [ ] Environment variables are set
- [ ] Admin user is seeded (`GET /api/seed`)
- [ ] Authentication is working (`GET /api/test-auth`)
- [ ] Database operations work (`GET /api/test-db`)

### Product Testing
- [ ] Get all products
- [ ] Get featured products only
- [ ] Get product by valid ID
- [ ] Get product by invalid ID (should return 404)
- [ ] Create product with valid data
- [ ] Create product with invalid data (should return 400)
- [ ] Update existing product
- [ ] Delete product

### Category Testing
- [ ] Get all categories
- [ ] Get category by valid ID
- [ ] Create category with valid data
- [ ] Update existing category
- [ ] Delete category

### Content Management Testing
- [ ] Get hero data
- [ ] Update hero data
- [ ] Get promo data
- [ ] Update promo data

### File Upload Testing
- [ ] Upload valid image file
- [ ] Upload invalid file type (should return 400)
- [ ] Upload file too large (should return 400)

### Authentication Testing
- [ ] Sign in with valid credentials
- [ ] Sign in with invalid credentials
- [ ] Access admin endpoint without authentication (should return 401)
- [ ] Access admin endpoint with non-admin user (should return 401)

---

## Performance Testing

### Load Testing with Artillery

Create `artillery-config.yml`:

\`\`\`yaml
config:
  target: 'http://localhost:3000'
  phases:
    - duration: 60
      arrivalRate: 10
scenarios:
  - name: "Get Products"
    requests:
      - get:
          url: "/api/products"
  - name: "Get Categories"
    requests:
      - get:
          url: "/api/categories"
\`\`\`

Run with:
\`\`\`bash
artillery run artillery-config.yml
\`\`\`

### Expected Response Times
- GET requests: < 200ms
- POST/PUT requests: < 500ms
- File uploads: < 2000ms

---

This documentation provides comprehensive testing coverage for all API endpoints. Use it to verify functionality, debug issues, and ensure proper API behavior across different scenarios.

This JWT-based authentication system is much simpler to test and integrate with external tools compared to cookie-based authentication.
