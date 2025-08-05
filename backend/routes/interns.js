import express from 'express';
import Intern from '../models/Intern.js';
import bcrypt from 'bcrypt';

const router = express.Router();

// Seed route - Add sample data (for demo purposes)
router.post('/seed', async (_, res) => {
  try {
    // Clear existing data
    await Intern.deleteMany({});
    
    // Hash passwords for sample interns
    const hashedPassword = await bcrypt.hash('password123', 10);
    
    // Sample intern data with hashed passwords
    const sampleInterns = [
      {
        name: 'Alice Smith',
        email: 'alice@example.com',
        password: hashedPassword,
        referralCode: 'alice2025',
        donationsRaised: 2500,
        rewards: ['Bronze Badge', 'Silver Badge', 'Gold Badge', 'Platinum Badge']
      },
      {
        name: 'Bob Johnson',
        email: 'bob@example.com',
        password: hashedPassword,
        referralCode: 'bob2025',
        donationsRaised: 1800,
        rewards: ['Bronze Badge', 'Silver Badge', 'Gold Badge']
      },
      {
        name: 'Emma Wilson',
        email: 'emma@example.com',
        password: hashedPassword,
        referralCode: 'emma2025',
        donationsRaised: 1250,
        rewards: ['Bronze Badge', 'Silver Badge']
      },
      {
        name: 'Michael Brown',
        email: 'michael@example.com',
        password: hashedPassword,
        referralCode: 'michael2025',
        donationsRaised: 900,
        rewards: ['Bronze Badge']
      },
      {
        name: 'Sarah Davis',
        email: 'sarah@example.com',
        password: hashedPassword,
        referralCode: 'sarah2025',
        donationsRaised: 750,
        rewards: ['Bronze Badge']
      }
    ];
    
    // Insert sample data
    await Intern.insertMany(sampleInterns);
    
    res.json({ message: 'Sample data added successfully', count: sampleInterns.length });
  } catch (err) {
    console.error('Seed error:', err);
    res.status(500).json({ message: 'Error seeding database' });
  }
});
// Signup route - Create new intern
router.post('/signup', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email, and password are required' });
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }
    
    // Validate password strength (at least 6 characters)
    if (password.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }
    
    // Check if intern already exists
    const existingIntern = await Intern.findOne({ email });
    if (existingIntern) {
      return res.status(400).json({ message: 'User already exists with this email' });
    }
    
    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Generate unique referral code
    const referralCode = name.toLowerCase().replace(/\s+/g, '') + Date.now().toString().slice(-4);
    
    // Create new intern
    const newIntern = new Intern({
      name,
      email,
      password: hashedPassword,
      referralCode,
      donationsRaised: 0
      // rewards will use the default value from the schema
    });
    
    const savedIntern = await newIntern.save();
    
    // Return intern data without password
    const { password: _, ...internData } = savedIntern.toObject();
    res.status(201).json(internData);
    
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Error creating account' });
  }
});

router.get('/', async (_, res) => {
  try {
    const interns = await Intern.find().sort({ donationsRaised: -1 });
    res.json(interns);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.get('/:id', async (req, res) => {
  try {
    // Validate ObjectId format
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: 'Invalid intern ID format' });
    }
    
    const intern = await Intern.findById(req.params.id);
    if (!intern) {
      return res.status(404).json({ message: 'Intern not found' });
    }
    res.json(intern);
  } catch (err) {
    console.error('Error fetching intern:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Login route - Authenticate intern
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: 'Email and password are required' });
    }
    
    // Find intern by email
    const intern = await Intern.findOne({ email });
    if (!intern) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Check password
    const isPasswordValid = await bcrypt.compare(password, intern.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    
    // Return intern data without password
    const { password: _, ...internData } = intern.toObject();
    res.json(internData);
    
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Error during login' });
  }
});

export default router;