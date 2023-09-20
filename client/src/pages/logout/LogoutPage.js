import React, { useEffect } from 'react';
import authStore from '../../stores/authStore';
import { Link } from 'react-router-dom';

const LogoutPage = () => {
  const store = authStore();
  useEffect(() => {
    store.logout();
  }, []);
  return (
    <div>
      You are now logged out
      <Link to="/login">Log In</Link>
    </div>
  );
};

export default LogoutPage;
