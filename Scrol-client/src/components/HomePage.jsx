import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { userState } from '../states/UserState';
import axios from 'axios';

const HomePage = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();

  useEffect(() => {
    const checkLocalStorage = () => {
      const userFromLocalStorage = localStorage.getItem('user');
      if (userFromLocalStorage) {
        const userObject = JSON.parse(userFromLocalStorage);
        setUser(userObject);
      } else {
        navigate('/register'); // Redirect to register page if no user is found
      }
    };

    checkLocalStorage();
  }, [navigate, setUser]);

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:8000/users/logout', {}, {
        withCredentials: true, // Ensure cookies are sent with request
      });
     
      localStorage.removeItem('user');
    
      setUser(null);
    
      navigate('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Welcome, {user.username || 'User'}!</h1>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
      {/* Add other user details as needed */}
    </div>
  );
};

export default HomePage;
