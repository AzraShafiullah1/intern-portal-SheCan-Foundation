import mongoose from 'mongoose';

const internSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  referralCode: {
    type: String,
    required: true,
    unique: true
  },
  donationsRaised: {
    type: Number,
    default: 0
  },
  rewards: {
    type: [String],
    default: ['Bronze Badge', 'Silver Badge', 'Gold Badge']
  }
});

export default mongoose.model('Intern', internSchema);