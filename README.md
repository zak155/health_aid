# 🏥 HealthAid — Full-Stack Healthcare Platform

HealthAid is a modern, responsive full-stack healthcare platform that connects **Patients** and **Doctors** for medical tracking, appointment scheduling, and health consultations.

The application uses a decoupled architecture with:

* **Django REST Framework (DRF)** backend
* **PostgreSQL** database
* **React + TypeScript** frontend
* **Vite** development environment
* **Tailwind CSS / CSS Modules**
* **JWT authentication**

---

## 🎨 UI Screenshots & Flow

> Place screenshot files inside `docs/screenshots/` or update the paths below.

### Onboarding

|                   Onboarding — Slide 1                   |                   Onboarding — Slide 2                   |
| :------------------------------------------------------: | :------------------------------------------------------: |
| ![Onboarding Slide 1](docs/screenshots/onboarding-1.png) | ![Onboarding Slide 2](docs/screenshots/onboarding-2.png) |

### Authentication

|          Create Account / Sign Up          |            Sign In / Login           |
| :----------------------------------------: | :----------------------------------: |
| ![Register](docs/screenshots/register.png) | ![Login](docs/screenshots/login.png) |

### Dashboards

|                       Patient Dashboard                      |                      Doctor Dashboard                      |
| :----------------------------------------------------------: | :--------------------------------------------------------: |
| ![Patient Dashboard](docs/screenshots/patient-dashboard.png) | ![Doctor Dashboard](docs/screenshots/doctor-dashboard.png) |

---

# ✨ Features

## Authentication & Authorization

* Custom Django User model
* Role-Based Access Control (RBAC)
* Two supported roles:

  * `PATIENT`
  * `DOCTOR`
* JWT authentication using `SimpleJWT`
* Access and refresh token support
* Persistent authentication state
* Global React `AuthContext`
* Protected frontend routes
* Automatic redirection for unauthorized users
* Dynamic `from` navigation state after login

## User Experience

* Responsive onboarding flow
* Interactive two-slide onboarding carousel
* Mobile-first design
* Responsive dashboards
* Client-side form validation
* Password confirmation validation
* Backend validation error handling
* Global alert/error banner

## Backend

* Django REST Framework API
* PostgreSQL relational database
* Django ORM
* JWT authentication
* CORS configuration
* RESTful API architecture

## Frontend

* React 18
* TypeScript
* React Router v6
* Axios
* Axios request interceptors
* Lucide React icons
* Tailwind CSS / CSS Modules
* Component-based architecture

---

# 🛠️ Tech Stack

## Frontend

| Technology      | Purpose                 |
| --------------- | ----------------------- |
| React 18        | UI framework            |
| TypeScript      | Type safety             |
| Vite            | Development/build tool  |
| React Router v6 | Client-side routing     |
| Axios           | HTTP client             |
| Lucide React    | Icons                   |
| Tailwind CSS    | Styling                 |
| CSS Modules     | Component-level styling |

## Backend

| Technology            | Purpose              |
| --------------------- | -------------------- |
| Python 3.11+          | Programming language |
| Django 5.x            | Backend framework    |
| Django REST Framework | REST API             |
| SimpleJWT             | JWT authentication   |
| PostgreSQL            | Database             |
| django-cors-headers   | CORS management      |

---

# 📁 Project Structure

```text
Health_Aid/
│
├── backend/
│   │
│   ├── manage.py
│   ├── requirements.txt
│   ├── .env
│   │
│   ├── backend/
│   │   ├── __init__.py
│   │   ├── settings.py
│   │   ├── urls.py
│   │   ├── asgi.py
│   │   └── wsgi.py
│   │
│   └── authentication/
│       ├── __init__.py
│       ├── admin.py
│       ├── apps.py
│       ├── models.py
│       ├── serializers.py
│       ├── views.py
│       ├── urls.py
│       └── migrations/
│
├── healthaid_frontend/
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.ts
│   ├── tsconfig.json
│   ├── index.html
│   │
│   └── src/
│       ├── assets/
│       ├── components/
│       ├── context/
│       ├── pages/
│       ├── services/
│       └── styles/
│
├── docs/
│   └── screenshots/
│
└── README.md
```

---

# 🚀 Full Setup & Installation Guide

## Prerequisites

Make sure the following are installed on your machine:

* Python 3.10+
* Node.js 18+
* npm
* PostgreSQL
* Git
* VS Code

Verify the installations:

### Python

```bash
python --version
```

### Node.js

```bash
node --version
```

### npm

```bash
npm --version
```

### PostgreSQL

```bash
psql --version
```

### Git

```bash
git --version
```

---

# 1. Clone the Repository

Open the VS Code terminal:

```bash
git clone https://github.com/your-username/HealthAid.git
```

Navigate into the project:

```bash
cd HealthAid
```

Open the project in VS Code:

```bash
code .
```

---

# 2. Backend Setup

Open a terminal in VS Code and navigate to the backend:

```bash
cd backend
```

---

## 2.1 Create a Virtual Environment

### Windows

```powershell
python -m venv venv
```

Activate it:

```powershell
.\venv\Scripts\Activate.ps1
```

If PowerShell blocks script execution, run:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then activate again:

```powershell
.\venv\Scripts\Activate.ps1
```

### macOS / Linux

```bash
python3 -m venv venv
```

Activate:

```bash
source venv/bin/activate
```

After activation, your terminal should show something similar to:

```text
(venv)
```

---

# 3. Install Backend Dependencies

Make sure the virtual environment is activated.

Run:

```bash
pip install -r requirements.txt
```

Verify Django:

```bash
python -m django --version
```

---

# 4. PostgreSQL Database Setup

Create a PostgreSQL database for HealthAid.

For example:

```text
Database Name: healthaid_db
Username: postgres
Password: your_postgresql_password
Host: localhost
Port: 5432
```

You can create the database using PostgreSQL:

```sql
CREATE DATABASE healthaid_db;
```

---

# 5. Configure Environment Variables

Inside the `backend/` directory, create a file named:

```text
.env
```

Add:

```env
DEBUG=True

SECRET_KEY=your-django-secret-key

ALLOWED_HOSTS=127.0.0.1,localhost

DB_NAME=healthaid_db
DB_USER=postgres
DB_PASSWORD=your_postgresql_password
DB_HOST=localhost
DB_PORT=5432
```

### Important

Do not commit `.env` to Git.

Add this to `.gitignore`:

```gitignore
.env
venv/
__pycache__/
*.pyc
```

---

# 6. Run Django Migrations

From the `backend/` directory:

```bash
python manage.py makemigrations
```

Then:

```bash
python manage.py migrate
```

If the project already contains migrations, normally you only need:

```bash
python manage.py migrate
```

---

# 7. Create Django Superuser

Create an administrator account:

```bash
python manage.py createsuperuser
```

Django will ask for:

```text
Username:
Email address:
Password:
Password confirmation:
```

Follow the prompts.

---

# 8. Start the Django Backend

Run:

```bash
python manage.py runserver
```

The backend should now be available at:

```text
http://127.0.0.1:8000/
```

API base URL:

```text
http://127.0.0.1:8000/api/
```

Django Admin:

```text
http://127.0.0.1:8000/admin/
```

Keep this terminal running.

---

# 9. Frontend Setup

Open a **new VS Code terminal**.

From the project root:

```bash
cd healthaid_frontend
```

Install dependencies:

```bash
npm install
```

---

# 10. Configure Frontend API URL

If the frontend uses an environment variable, create:

```text
healthaid_frontend/.env
```

Example:

```env
VITE_API_BASE_URL=http://127.0.0.1:8000/api
```

Make sure the Axios configuration uses the same variable.

For example:

```typescript
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
});

export default api;
```

---

# 11. Start the React Frontend

Run:

```bash
npm run dev
```

Vite should display something similar to:

```text
Local: http://localhost:5173/
```

Open:

```text
http://localhost:5173/
```

---

# 🔐 API Endpoints

| Method | Endpoint                   | Description                              | Authentication |
| ------ | -------------------------- | ---------------------------------------- | -------------- |
| POST   | `/api/auth/register/`      | Register a new user                      | ❌ No           |
| POST   | `/api/auth/login/`         | Authenticate user and receive JWT tokens | ❌ No           |
| GET    | `/api/auth/me/`            | Get authenticated user's profile         | 🔑 Yes         |
| POST   | `/api/auth/token/refresh/` | Refresh an access token                  | ❌ No           |

---

# 🔑 Authentication Flow

HealthAid uses JWT authentication.

The general authentication flow is:

```text
User
  │
  ▼
React Login Form
  │
  ▼
POST /api/auth/login/
  │
  ▼
Django REST Framework
  │
  ▼
JWT Access + Refresh Tokens
  │
  ▼
React AuthContext
  │
  ▼
Store Authentication State
  │
  ▼
Axios Interceptor
  │
  ▼
Attach Access Token
  │
  ▼
Protected API Requests
```

---

# 👤 User Roles

HealthAid currently supports two user roles.

## Patient

Patients can:

* Create an account
* Sign in
* Access their dashboard
* Manage their healthcare information
* View appointments
* Interact with doctors
* Track medical information

Role:

```text
PATIENT
```

## Doctor

Doctors can:

* Create an account
* Sign in
* Access their dashboard
* Manage appointments
* View patient-related information
* Provide consultations
* Track patient medical information

Role:

```text
DOCTOR
```

---

# 🛡️ Protected Routes

Frontend routes are protected using an authentication guard.

Example flow:

```text
User visits protected page
        │
        ▼
Is user authenticated?
     /       \
   Yes        No
    │          │
    ▼          ▼
Dashboard   Redirect
            to Login
                │
                ▼
         Save "from" route
                │
                ▼
            Login
                │
                ▼
        Return to original
             route
```

---

# 🧪 Running the Application

You need **two terminals**.

### Terminal 1 — Django

```bash
cd backend
.\venv\Scripts\Activate.ps1
python manage.py runserver
```

### Terminal 2 — React

```bash
cd healthaid_frontend
npm run dev
```

Then open:

```text
http://localhost:5173/
```

---

# 🔄 Development Workflow

When developing the application:

```text
React Frontend
      │
      │ HTTP / REST API
      ▼
Django REST Framework
      │
      ▼
Django ORM
      │
      ▼
PostgreSQL
```

Frontend:

```text
React + TypeScript + Vite
```

Backend:

```text
Django + DRF
```

Database:

```text
PostgreSQL
```

---

# 🐛 Common Problems

## PostgreSQL Connection Error

If Django cannot connect to PostgreSQL, check:

```env
DB_NAME=healthaid_db
DB_USER=postgres
DB_PASSWORD=your_postgresql_password
DB_HOST=localhost
DB_PORT=5432
```

Also make sure PostgreSQL is running.

---

## Port 8000 Already in Use

Run Django on another port:

```bash
python manage.py runserver 8001
```

Then update the frontend API URL:

```env
VITE_API_BASE_URL=http://127.0.0.1:8001/api
```

---

## Port 5173 Already in Use

Vite can automatically select another available port.

Or specify one:

```bash
npm run dev -- --port 5174
```

---

## CORS Error

Make sure `django-cors-headers` is installed:

```bash
pip install django-cors-headers
```

And configured in Django.

Example:

```python
INSTALLED_APPS = [
    # ...
    "corsheaders",
]
```

Middleware:

```python
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",
    # ...
]
```

For local development:

```python
CORS_ALLOWED_ORIGINS = [
    "http://localhost:5173",
]
```

---

# 📌 Quick Start

If everything is already configured, the application can be started with:

### Backend

```bash
cd backend

# Windows
.\venv\Scripts\Activate.ps1

python manage.py migrate
python manage.py runserver
```

### Frontend

Open another terminal:

```bash
cd healthaid_frontend
npm install
npm run dev
```

Then visit:

```text
http://localhost:5173/
```

---

# 📄 License


