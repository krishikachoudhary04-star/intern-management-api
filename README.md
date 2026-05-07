# 🧑‍💼 Intern Management API

Production-ready REST API built with **Node.js + Express**.  
JWT Auth · CRUD · Role-based Access · Input Validation · Rate Limiting · Logging

---

## 🚀 Quick Start (VS Code)

```bash
# 1 – Install dependencies
npm install

# 2 – Start server (auto-reloads on save)
npm run dev

# OR start without nodemon
npm start
```

Server runs at → **http://localhost:5000**

---

## 📁 Folder Structure

```
intern-management-api/
├── src/
│   ├── config/
│   │   └── store.js          # In-memory data store (simulates DB)
│   ├── controllers/
│   │   ├── authController.js # Register / Login / Me
│   │   └── internController.js # CRUD for interns
│   ├── middleware/
│   │   ├── auth.js           # JWT authenticate + authorize
│   │   ├── errorHandler.js   # Global error + 404 handler
│   │   └── validator.js      # express-validator rules
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── internRoutes.js
│   ├── utils/
│   │   └── logger.js         # Winston logger
│   ├── app.js                # Express setup + rate limiting
│   └── server.js             # Entry point + admin seed
├── logs/                     # Auto-created log files
├── .env                      # Environment variables
└── package.json
```

---

## 🔐 Default Admin Credentials

```
Email:    admin@company.com
Password: Admin@123
```

---

## 📡 API Endpoints

### Auth

| Method | Endpoint            | Access  | Description        |
|--------|---------------------|---------|--------------------|
| POST   | /api/auth/register  | Public  | Register new user  |
| POST   | /api/auth/login     | Public  | Login & get token  |
| GET    | /api/auth/me        | 🔒 Auth | Get current user   |

### Interns

| Method | Endpoint           | Access       | Description             |
|--------|--------------------|--------------|-------------------------|
| GET    | /api/interns       | 🔒 Auth      | List all (paginated)    |
| GET    | /api/interns/:id   | 🔒 Auth      | Get single intern       |
| POST   | /api/interns       | 🔒 Auth      | Add new intern          |
| PUT    | /api/interns/:id   | 🔒 Auth      | Update intern           |
| DELETE | /api/interns/:id   | 🔒 Admin only| Delete intern           |

---

## 🧪 Test with VS Code REST Client

Install the **REST Client** extension, then create a file `test.http`:

```http
### Login as Admin
POST http://localhost:5000/api/auth/login
Content-Type: application/json

{
  "email": "admin@company.com",
  "password": "Admin@123"
}

### Add Intern (paste token from login response)
POST http://localhost:5000/api/interns
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE

{
  "name": "Riya Sharma",
  "email": "riya@example.com",
  "department": "Engineering",
  "skills": ["Node.js", "React"],
  "startDate": "2024-06-01",
  "status": "active"
}

### List Interns with Pagination
GET http://localhost:5000/api/interns?page=1&limit=5&department=Engineering
Authorization: Bearer YOUR_TOKEN_HERE

### Update Intern
PUT http://localhost:5000/api/interns/1
Content-Type: application/json
Authorization: Bearer YOUR_TOKEN_HERE

{
  "status": "completed"
}

### Delete Intern (admin only)
DELETE http://localhost:5000/api/interns/1
Authorization: Bearer YOUR_TOKEN_HERE
```

---

## ⚙️ Query Parameters (GET /api/interns)

| Param       | Type   | Description                       |
|-------------|--------|-----------------------------------|
| page        | number | Page number (default: 1)          |
| limit       | number | Items per page (default: 10)      |
| department  | string | Filter by department              |
| status      | string | Filter: active / inactive / completed |
| search      | string | Search by name or email           |

---

## 👥 Roles

| Role  | Permissions                                          |
|-------|------------------------------------------------------|
| user  | View interns, create interns, update own interns     |
| admin | All of the above + delete any intern + create admins |

---

## 🔒 Security Features

- **JWT Authentication** – tokens expire in 7 days
- **bcrypt** – passwords hashed with 10 salt rounds
- **Rate limiting** – 100 req/15min globally; 10 req/15min on /login
- **Input validation** – all fields validated via express-validator
- **Role-based access** – admin-only routes protected

## 📝 Logging

Logs are written to:
- `logs/app.log` – all requests & events
- `logs/error.log` – errors only
- Console – colorized output during development
