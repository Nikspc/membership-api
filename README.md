# Node.js Membership API on AWS

## Project Overview
This project involves setting up a Node.js service on AWS to expose membership information. The service will:
- Duplicate an existing on-prem API.
- Ingest data extracted from a mainframe DB2 database.
- Undergo performance testing and QA to meet front-end response targets.

## Prerequisites
Ensure you have the following installed:
- **Node.js (v18 or later)**
- **AWS CLI** configured with credentials
- **Docker** (for local development if needed)
- **PostgreSQL** (or another local DB for testing, if not using AWS RDS)
- **Terraform or AWS CDK** (optional for infrastructure as code)

## Project Setup

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/nodejs-membership-api.git
cd nodejs-membership-api
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory:
```env
PORT=3000
DB_HOST=your-db-host
DB_USER=your-db-user
DB_PASSWORD=your-db-password
DB_NAME=membership_db
AWS_REGION=us-east-1
```

### 4. Database Configuration
If using PostgreSQL locally, start the database:
```sh
docker run --name postgres -e POSTGRES_USER=admin -e POSTGRES_PASSWORD=admin -p 5432:5432 -d postgres
```
Run migrations using Prisma ORM:
```sh
npx prisma migrate dev
```

### 5. Start the Server
```sh
npm run dev
```

### 6. Deploying to AWS
Ensure you have an AWS account and configure the AWS CLI:
```sh
aws configure
```
#### Using AWS Lambda & API Gateway (Serverless)
- Deploy using Serverless Framework:
```sh
npx serverless deploy
```
- Check deployed endpoints:
```sh
npx serverless info
```
#### Using AWS EC2 & Load Balancer
- Build and push Docker image:
```sh
docker build -t membership-api .
docker tag membership-api:latest <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com/membership-api
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin <aws-account-id>.dkr.ecr.us-east-1.amazonaws.com
```
- Deploy to EC2 using ECS Fargate or Elastic Beanstalk.

### 7. Testing the API
Run automated tests:
```sh
npm test
```
Manually test API using Postman:
- `GET /members` - Fetch all members
- `POST /members` - Add a new member
- `GET /members/:id` - Fetch a specific member

### 8. Performance Testing
Use **Artillery** or **k6** for load testing:
```sh
npx artillery run performance-test.yml
```

## Next Steps
- Implement monitoring with AWS CloudWatch.
- Improve database indexing for faster response times.
- Add CI/CD pipeline using GitHub Actions.

## Contributors
- **Your Name** - [GitHub Profile](https://github.com/your-profile)
