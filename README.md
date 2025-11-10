## Express + Better-Auth Example

This project demonstrates a simple Express.js authentication server using Better-Auth with the Username plugin. It is designed for testing and learning plugin integration.

## Features

User authentication using Better-Auth.

Integration with the Username plugin.

PostgreSQL database using Prisma.

Simple REST API to test authentication.

Easy to test via Postman (no frontend required).

## Prerequisites

Node.js >= 18

npm or yarn

PostgreSQL database

.env file with database connection

Environment Variables

Create a .env file in the root of the project:
```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE
PORT=4000
```
## Installation
```
git clone <repo-url>
cd express-better-auth
npm install
npx prisma generate
npx prisma db push
```

Testing with Postman
1. Sign up / Sign in with Username
```
POST http://localhost:4000/api/auth/sign-up/email
```
```
Body:
{
 "name": "John Doe",
 "email": "john.doe@example.com",
 "password": "password1234",
 "image": "https://example.com/image.png",
 "username": "test",
 "callbackURL": "https://example.com/callback"
}
```
```
POST http://localhost:4000/api/auth/sign-in/username
```
```
Body:
{
    "username": "test", 
    "password": "password1234" 
}
```


