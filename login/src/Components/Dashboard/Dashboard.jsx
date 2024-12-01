import React, { useEffect } from 'react';

const Dashboard = () => {
  useEffect(() => {
    window.location.href = 'https://gdg.community.dev/gdg-on-campus-manipal-university-jaipur-india/';
  }, []);

  return (
    <div style={{ color:'white'}}>
      <h1>Welcome to Dashboard</h1>
      <h1>THIS WILL BE THE LANDING PAGE</h1>
      <p>Redirects to GDG MUJ WEBSITE FOR NOW</p>
    </div>
  );
};

export default Dashboard;
