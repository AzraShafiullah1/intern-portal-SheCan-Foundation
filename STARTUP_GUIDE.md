# 🚀 Quick Start Guide - Intern Portal

## Important: Two Servers Required

This application consists of **TWO separate servers**:

1. **Backend API Server** (Port 5000) - Handles data and API requests
2. **Frontend React App** (Port 3000) - User interface

## 🔧 Setup Instructions

### Option 1: Manual Setup (Recommended for first time)

**Step 1: Install Dependencies**
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies  
cd ../frontend
npm install
```

**Step 2: Configure Environment**
Create `.env` file in the `backend` directory:
```env
MONGO_URI=mongodb+srv://your-connection-string
PORT=5000
```

**Step 3: Start Backend Server**
```bash
cd backend
npm start
```
✅ Backend will run on: http://localhost:5000

**Step 4: Start Frontend Server (New Terminal)**
```bash
cd frontend
npm start
```
✅ Frontend will run on: http://localhost:3000

### Option 2: Quick Start (After initial setup)

```bash
# Install concurrently if not already installed
npm install

# Start both servers simultaneously
npm run dev
```

## 🌐 Access the Application

- **Main Application**: http://localhost:3000
- **API Server**: http://localhost:5000
- **Dashboard**: http://localhost:3000/dashboard (after login)
- **Leaderboard**: http://localhost:3000/leaderboard

## 🔑 Demo Login

- **Email**: demo@example.com
- **Password**: password

## 📊 Add Sample Data

To populate the database with sample interns:

```bash
curl -X POST http://localhost:5000/api/interns/seed
```

Or use Postman to POST to: `http://localhost:5000/api/interns/seed`

## ❗ Common Issues

**"Cannot GET /dashboard" Error:**
- This means you're accessing the backend server (port 5000) instead of the frontend
- Go to http://localhost:3000 instead

**Connection Refused:**
- Make sure both servers are running
- Backend: http://localhost:5000
- Frontend: http://localhost:3000

**MongoDB Connection Error:**
- Check your MONGO_URI in the backend/.env file
- Ensure MongoDB is running or Atlas connection is correct

## 🎯 Application Flow

1. Start at http://localhost:3000 (Login page)
2. Use demo credentials or sign up for new account
3. Access dashboard to see your stats
4. View leaderboard to see rankings

## 🔧 API Endpoints

- `GET /api/interns` - Get all interns
- `GET /api/interns/:id` - Get specific intern
- `POST /api/interns/signup` - Create account
- `POST /api/interns/seed` - Add sample data

---

**Need Help?** Check the main README.md for detailed documentation.