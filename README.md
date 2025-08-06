# npx create-react-app frontend
# backend me install karenge ---> C:\Users\azras\Documents\She Can Foundation_Assignment\my-first-app\backend>npm init -y
# C:\Users\azras\Documents\She Can Foundation_Assignment\my-first-app\backend>npm install express mongoose cors dotenv
# npm init -y
# npm install express mongoose cors dotenv
# npm install
# cd backend node .\index.js
# node .\ app.js
# node app.js
# npm i dotenv

# This is frontend
# cd frontend
# npm install axios react-router-dom
# Run the application
# To start both frontend and backend:
# npm run dev  
 # npm run start:backend # npm run start:frontend
# npm install react-scripts@latest

git add .
git commit -m "Your update message"
git push origin main


# How to Connect to MongoDB Atlas
1. Get Your Atlas Connection String
Log in to your MongoDB Atlas account

Go to your cluster and click "Connect"

Select "Drivers" connection method

Choose Node.js driver version (use the one matching your MongoDB driver version)

Copy the connection string (it will look like):text
mongodb+srv://username:<password>@cluster0.abc123.mongodb.net/databaseName?retryWrites=true&w=majority
# change kerege env file me --->  MONGO_URI=mongodb+srv://azrashafikhan:bhwbYNw34hZHLmND@cluster0.nmj4ghn.mongodb.net/my-first-app?retryWrites=true&w=majority&appName=Cluster0




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# 🚀 Intern Portal - Full Stack Application

A complete full-stack intern dashboard application built with **Node.js + Express + MongoDB** backend and **React** frontend.

## 📋 Features

### ✅ Frontend (React)
- **Login/Signup Pages** - Complete authentication flow
- **Dashboard** - Displays intern information including:
  - Intern name
  - Unique referral code (e.g., yourname2025)
  - Total donations raised
  - Rewards/unlockables section
- **Leaderboard** - Shows top performers ranked by donations
- **Responsive Design** - Works on desktop and mobile

### ✅ Backend (Node.js + Express + MongoDB)
- **REST API** with the following endpoints:
  - `GET /api/interns` - Get all interns (for leaderboard)
  - `GET /api/interns/:id` - Get specific intern data
  - `POST /api/interns/signup` - Register new intern
  - `POST /api/interns/seed` - Add sample data (demo purposes)
- **MongoDB Integration** - Persistent data storage
- **CORS Enabled** - Frontend-backend communication

## 🛠️ Tech Stack

**Frontend:**
- React 19
- React Router DOM
- Axios for API calls
- Modern CSS with responsive design

**Backend:**
- Node.js with Express
- MongoDB with Mongoose
- CORS middleware
- ES6 modules

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### 1. Clone and Setup Backend
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Start backend server:
```bash
npm run dev
```

### 2. Setup Frontend
```bash
cd frontend
npm install
npm start
```

### 3. Add Sample Data (Optional)
Make a POST request to seed the database:
```bash
curl -X POST http://localhost:5000/api/interns/seed
```


## 🎯 Demo Credentials

**For Login Demo:**
- Email: `demo@example.com`
- Password: `password`

**Or create a new account** using the signup page!

## 📱 Application Flow

1. **Landing Page** - Login form
2. **Signup** - Create new account with unique referral code
3. **Dashboard** - View personal stats and achievements
4. **Leaderboard** - See rankings of all interns

## 🏗️ Project Structure

```
intern-portal/
├── backend/
│   ├── models/
│   │   └── Intern.js          # MongoDB schema
│   ├── routes/
│   │   └── interns.js         # API routes
│   ├── app.js                 # Express server setup
│   ├── package.json
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js       # Login component
│   │   │   ├── Signup.js      # Signup component
│   │   │   ├── Dashboard.js   # Main dashboard
│   │   │   └── Leaderboard.js # Rankings page
│   │   ├── App.js             # Main app with routing
│   │   ├── styles.css         # Global styles
│   │   └── index.js
│   └── package.json
└── README.md
```

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/interns` | Get all interns (sorted by donations) |
| GET | `/api/interns/:id` | Get specific intern by ID |
| POST | `/api/interns/signup` | Create new intern account |
| POST | `/api/interns/seed` | Add sample data to database |

## 📊 Sample Data

The application includes sample interns with varying donation amounts and rewards:
- Alice Smith - $2,500 (Platinum level)
- Bob Johnson - $1,800 (Gold level)
- Emma Wilson - $1,250 (Silver level)
- Michael Brown - $900 (Bronze level)
- Sarah Davis - $750 (Bronze level)

## 🎨 Features Implemented

- ✅ **Dummy login/signup** (with demo credentials)
- ✅ **Dashboard showing:**
  - ✅ Intern name
  - ✅ Referral code (e.g., yourname2025)
  - ✅ Total donations raised
  - ✅ Rewards/unlockables section
- ✅ **REST API** returning user data
- ✅ **Leaderboard page** with rankings
- ✅ **MongoDB data storage**
- ✅ **Responsive design**
- ✅ **Error handling**
- ✅ **Loading states**

## 🚀 Deployment Ready

The application is structured for easy deployment:
- Backend can be deployed to Heroku, Railway, or any Node.js hosting
- Frontend can be deployed to Netlify, Vercel, or any static hosting
- MongoDB can use Atlas for cloud database

## 🔮 Future Enhancements

- JWT authentication
- Password hashing (bcrypt)
- Real-time updates
- Email notifications
- Advanced analytics
- Mobile app version

---

**Built with ❤️ for intern management and gamification!**


"# intern-portal-She-Can-Foundation" 
# intern-portal
"# Assignment-intern-portal" 
"# intern-portal_Assignment" 
"# intern-portal-SheCan-Foundation" 
