# 🧑‍💼 Intern Management API

Production-ready REST API built with **Node.js, Express, MongoDB, and JWT Authentication**.  
Includes authentication, role-based access control, CRUD operations, validation, rate limiting, and logging.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start server (development)
npm run dev

# Start without nodemon
npm start
```

Server runs at → **http://localhost:5001**

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcryptjs (Password hashing)
- express-validator (Validation)
- winston (Logging)

---

## 📁 Folder Structure

```
intern-management-api/
├── src/
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js
│   │   └── internController.js
│   ├── middleware/
│   │   ├── auth.js
│   │   ├── errorHandler.js
│   │   └── validator.js
│   ├── models/
│   │   ├── User.js
│   │   └── Intern.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── internRoutes.js
│   ├── utils/
│   │   └── logger.js
│   ├── app.js
│   └── server.js
├── logs/
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

---

## 🔐 Default Admin Credentials

```
Email:    admin@company.com
Password: Admin@123
```

---

## 🔐 Environment Variables

Create a `.env` file in root:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d
```

---

## 📡 API Endpoints

### 🔑 Auth Routes

| Method | Endpoint            | Description        |
|--------|---------------------|--------------------|
| POST   | /api/auth/register  | Register user      |
| POST   | /api/auth/login     | Login user         |
| GET    | /api/auth/me        | Get current user   |

---

### 👤 Intern Routes

| Method | Endpoint            | Description             |
|--------|--------------------|-------------------------|
| GET    | /api/interns       | Get all interns         |
| GET    | /api/interns/:id   | Get single intern       |
| POST   | /api/interns       | Create intern           |
| PUT    | /api/interns/:id   | Update intern           |
| DELETE | /api/interns/:id   | Delete intern (Admin)   |

---

## 🧪 Testing

Use:
- Postman  
- Thunder Client (VS Code)

---

## 🔍 Query Parameters (GET /api/interns)

| Param       | Description                       |
|-------------|-----------------------------------|
| page        | Page number                       |
| limit       | Items per page                    |
| department  | Filter by department              |
| status      | active / inactive / completed     |
| search      | Search by name/email              |

---

## 👥 Roles

| Role  | Permissions |
|------|------------|
| user | View, create, update interns |
| admin| Full access (including delete) |

---

## 🔒 Security Features

- JWT Authentication (7 days expiry)
- Password hashing using bcrypt
- Rate limiting
- Input validation
- Role-based authorization

---

## 📝 Logging

Logs are stored in:
- `logs/app.log`
- `logs/error.log`

---

## 📌 Project Status

✅ Backend Complete  
🚀 Ready for deployment  
🎯 Resume-ready project  

---

## 👤 Author

**Krishika Choudhary**  
GitHub: https://github.com/krishikachoudhary04-star

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!
## 🧠 Approach

- Built REST API using Express.js
- Implemented JWT authentication
- Used MongoDB for persistent storage
- Structured project using MVC pattern

## ⚠️ Challenges

- Handling authentication errors
- MongoDB connection issues
- Route protection and role-based access

## 🚀 Future Improvements

- Add frontend dashboard
- Deploy on cloud (Render)
- Add file upload for intern documents