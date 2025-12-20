# E-commerce Application with Admin Panel

A comprehensive Next.js e-commerce application with an admin panel that uses JWT authentication, integrates Cloudinary for image management, and MongoDB for data persistence.

## Features
- Dynamic content sections (Hero, Categories, Promo, Featured Products)
- Complete admin panel with CRUD operations
- JWT-based authentication (no cookies)
- Image upload and management with AWS S3
- MongoDB integration for data persistence
- Responsive design with Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- MongoDB database
- AWS Account with S3 bucket configured

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/ecommerce-admin.git
   cd ecommerce-admin
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Create a `.env` file based on `.env.example` and fill in your credentials:
   \`\`\`
   # Application
   NEXT_PUBLIC_APP_URL=http://localhost:3000

   # JWT Authentication
   JWT_SECRET=your-super-secret-jwt-key-here

   # MongoDB
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority

   # AWS S3
   AWS_REGION=your-aws-region
   AWS_ACCESS_KEY_ID=your-access-key-id
   AWS_SECRET_ACCESS_KEY=your-secret-access-key
   AWS_S3_BUCKET_NAME=your-bucket-name
   \`\`\`

4. Run the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Authentication

This application uses JWT (JSON Web Tokens) for authentication. No cookies are used.

### API Authentication

For admin endpoints, include the JWT token in the Authorization header:

\`\`\`
Authorization: Bearer your-jwt-token-here
\`\`\`

### Getting a Token

1. First, seed the database with an admin user:
   \`\`\`bash
   curl -X GET http://localhost:3000/api/seed
   \`\`\`

2. Login to get a JWT token:
   \`\`\`bash
   curl -X POST http://localhost:3000/api/auth/signin \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@example.com","password":"password123"}'
   \`\`\`

3. Use the returned token in subsequent requests:
   \`\`\`bash
   curl -X GET http://localhost:3000/api/auth/verify \
     -H "Authorization: Bearer your-jwt-token-here"
   \`\`\`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_APP_URL` | The URL of your application (used for API calls) |
| `JWT_SECRET` | Secret key used to sign JWT tokens |
| `MONGODB_URI` | Connection string for your MongoDB database |
| `AWS_REGION` | Your AWS region (e.g., us-east-1) |
| `AWS_ACCESS_KEY_ID` | Your AWS access key ID |
| `AWS_SECRET_ACCESS_KEY` | Your AWS secret access key |
| `AWS_S3_BUCKET_NAME` | Your S3 bucket name |

## API Endpoints

### Authentication
- `POST /api/auth/signin` - Login with email/password, returns JWT token
- `GET /api/auth/verify` - Verify JWT token validity

### Products
- `GET /api/products` - Get all products (public)
- `GET /api/products?featured=true` - Get featured products only (public)
- `GET /api/products/{id}` - Get product by ID (public)
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/{id}` - Update product (admin only)
- `DELETE /api/products/{id}` - Delete product (admin only)

### Categories
- `GET /api/categories` - Get all categories (public)
- `GET /api/categories/{id}` - Get category by ID (public)
- `POST /api/categories` - Create category (admin only)
- `PUT /api/categories/{id}` - Update category (admin only)
- `DELETE /api/categories/{id}` - Delete category (admin only)

### Content Management
- `GET /api/hero` - Get hero section data (public)
- `POST /api/hero` - Update hero section (admin only)
- `GET /api/promo` - Get promo section data (public)
- `POST /api/promo` - Update promo section (admin only)

### File Upload
- `POST /api/upload` - Upload image to AWS S3 (admin only)
- `GET /api/upload/presigned` - Get presigned URL for direct S3 upload (admin only)

### Utilities
- `GET /api/seed` - Seed database with admin user
- `GET /api/test-auth` - Test authentication
- `GET /api/test-db` - Test database connection
- `POST /api/test-jwt` - Test JWT functionality

## Testing the API

### 1. Seed the Database
\`\`\`bash
curl -X GET http://localhost:3000/api/seed
\`\`\`

### 2. Login and Get Token
\`\`\`bash
curl -X POST http://localhost:3000/api/auth/signin \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"password123"}'
\`\`\`

### 3. Test Protected Endpoint
\`\`\`bash
curl -X POST http://localhost:3000/api/products \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -d '{
    "title": "Test Product",
    "price": 99.99,
    "image": "/placeholder.svg",
    "sku": "TEST-001",
    "featured": true,
    "isActive": true
  }'
\`\`\`

### 4. Upload Image
\`\`\`bash
curl -X POST http://localhost:3000/api/upload \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -F "file=@/path/to/image.jpg"
\`\`\`

## Default Admin User

After seeding the database, you can login with:
- **Email**: admin@example.com
- **Password**: password123

## Project Structure

- `/app` - Next.js App Router pages and API routes
- `/components` - React components
  - `/admin` - Admin panel components
  - `/sections` - Homepage section components
  - `/ui` - Reusable UI components
- `/lib` - Utility functions and helpers
  - `/actions` - Server actions
  - `/validations` - Zod validation schemas

## AWS S3 Configuration

### 1. Create S3 Bucket

1. Go to AWS Console and create a new S3 bucket:
   - Choose a unique bucket name
   - Select a region
   - Configure public access settings based on your needs
   - Enable CORS if you plan to upload directly from the browser

2. Add CORS configuration to your S3 bucket:
   ```json
   [
     {
       "AllowedHeaders": ["*"],
       "AllowedMethods": ["PUT", "POST", "GET"],
       "AllowedOrigins": ["http://localhost:3000", "your-production-domain.com"],
       "ExposeHeaders": ["ETag"]
     }
   ]
   ```

### 2. Create IAM User

1. Create a new IAM user with programmatic access
2. Attach the following policy (replace `your-bucket-name`):
   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Action": [
           "s3:PutObject",
           "s3:GetObject",
           "s3:ListBucket",
           "s3:DeleteObject"
         ],
         "Resource": [
           "arn:aws:s3:::your-bucket-name",
           "arn:aws:s3:::your-bucket-name/*"
         ]
       }
     ]
   }
   ```
3. Save the access key ID and secret access key

### 3. Update Environment Variables

Add the following to your `.env` file:
```
AWS_REGION=your-aws-region
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_S3_BUCKET_NAME=your-bucket-name
```

### 4. Install Dependencies

```bash
npm install @aws-sdk/client-s3 @aws-sdk/s3-request-presigner
```

### AWS S3 CORS Configuration

Add the following CORS configuration to your S3 bucket to enable direct browser uploads:

```json
[
    {
        "AllowedHeaders": [
            "*"
        ],
        "AllowedMethods": [
            "PUT",
            "POST",
            "GET"
        ],
        "AllowedOrigins": [
            "http://localhost:3000",
            "https://your-production-domain.com"
        ],
        "ExposeHeaders": [
            "ETag"
        ],
        "MaxAgeSeconds": 3000
    }
]
```

To set up CORS:
1. Go to your S3 bucket in AWS Console
2. Click on "Permissions" tab
3. Scroll down to "Cross-origin resource sharing (CORS)"
4. Click "Edit" and paste the above configuration
5. Save changes

### File Upload Implementation

The image uploader component (`components/ui/image-uploader.tsx`) supports two upload strategies:

1. **Direct Upload** - Upload directly to S3 using presigned URLs
2. **Server Upload** - Upload through the Next.js API route

#### Using Presigned URLs (Recommended)

1. The component first requests a presigned URL from `/api/upload/presigned`
2. Then uploads the file directly to S3 using the presigned URL
3. Finally, receives the permanent file URL for storage

Example usage:
```tsx
<ImageUploader
  onImageUpload={(url) => console.log('Uploaded image URL:', url)}
  currentImage="/images/placeholder.jpg"
  label="Upload Product Image"
/>
```

#### File Paths in S3

Files in S3 are organized with the following path structure:

```
your-bucket/
├── products/
│   ├── {product-id}/
│   │   ├── main.jpg
│   │   └── gallery/
│   │       ├── 1.jpg
│   │       ├── 2.jpg
│   │       └── ...
├── categories/
│   ├── {category-id}.jpg
│   └── ...
├── hero/
│   ├── {slide-id}.jpg
│   └── ...
└── promo/
    ├── {promo-id}.jpg
    └── ...
```

This structure helps organize images by their usage and associated entity IDs.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
