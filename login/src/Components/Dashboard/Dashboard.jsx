import React, { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    window.location.href = 'https://www.google.com';
  }, []);

  return (
    <div>
      <h1>Welcome to Dashboard</h1>
      <p></p>
    </div>
  );
};

export default Dashboard;
