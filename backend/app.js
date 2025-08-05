import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import internRoutes from './routes/interns.js';

const app = express();

app.use(cors());
app.use(express.json());

// Root route for API information
app.get('/', (_, res) => {
  res.json({
    message: 'Intern Portal API Server',
    version: '1.0.0',
    endpoints: {
      'GET /api/interns': 'Get all interns (leaderboard)',
      'GET /api/interns/:id': 'Get specific intern',
      'POST /api/interns/signup': 'Create new intern account',
      'POST /api/interns/login': 'Login intern',
      'POST /api/interns/seed': 'Add sample data'
    },
    frontend: 'Please run the React frontend on port 3000 to access the dashboard',
    instructions: 'Run "npm start" in the frontend directory'
  });
});

app.use('/api/interns', internRoutes);

// Handle 404 for non-API routes
app.use((_, res) => {
  res.status(404).json({
    error: 'Route not found',
    message: 'This is an API server. Frontend routes like /dashboard should be accessed through the React app on port 3000.',
    availableRoutes: ['/api/interns', '/api/interns/:id', '/api/interns/signup', '/api/interns/seed']
  });
});

// Start server first, then connect to MongoDB
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Connect to MongoDB (non-blocking)
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
    console.log('Server will continue running without database connection');
  });