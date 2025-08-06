import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Leaderboard = () => {
  const [interns, setInterns] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInterns = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/interns');
        setInterns(response.data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
        // Set dummy data if API fails
        setInterns([
          { name: 'Alice Smith', donationsRaised: 2500 },
          { name: 'Bob Johnson', donationsRaised: 1800 },
          { name: 'John Doe', donationsRaised: 1250 },
          { name: 'Emma Wilson', donationsRaised: 900 },
          { name: 'Michael Brown', donationsRaised: 750 }
        ]);
      }
    };

    fetchInterns();
  }, []);

  return (
    <div className="leaderboard">
      <h1>Leaderboard</h1>
      <button className="back-btn" onClick={() => navigate('/dashboard')}>
        Back to Dashboard
      </button>
      
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Donations Raised</th>
          </tr>
        </thead>
        <tbody>
          {interns.map((intern, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{intern.name}</td>
              <td>${intern.donationsRaised}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;