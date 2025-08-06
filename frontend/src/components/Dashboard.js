import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [internData, setInternData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user data from localStorage (set during signup/login)
    const storedData = localStorage.getItem('internData');
    
    if (storedData) {
      try {
        setInternData(JSON.parse(storedData));
      } catch (error) {
        console.error('Error parsing intern data:', error);
        // If parsing fails, redirect to login
        navigate('/');
      }
    } else {
      // If no stored data, redirect to login
      navigate('/');
    }
  }, [navigate]);

  if (!internData) return <div>Loading...</div>;

  return (
    <div className="dashboard">
      <h1>Welcome, {internData.name}!</h1>
      
      <div className="dashboard-section">
        <h2>Your Referral Code</h2>
        <div className="referral-code">{internData.referralCode}</div>
      </div>
      
      <div className="dashboard-section">
        <h2>Total Donations Raised</h2>
        <div className="donations">${internData.donationsRaised}</div>
      </div>
      
      <div className="dashboard-section">
        <h2>Your Rewards</h2>
        <ul className="rewards-list">
          {internData.rewards.map((reward, index) => (
            <li key={index}>{reward}</li>
          ))}
        </ul>
      </div>
      
      <button className="leaderboard-btn" onClick={() => navigate('/leaderboard')}>
        View Leaderboard
      </button>
    </div>
  );
};

export default Dashboard;