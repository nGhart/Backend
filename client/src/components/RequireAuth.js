import { Navigate } from 'react-router-dom';
import authStore from '../stores/authStore';
import { useEffect } from 'react';

const RequireAuth = (props) => {
  const store = authStore();
  useEffect(() => {
    if (store.loggedIn === null) {
      store.checkAuth();
    }
  }, []);
  //whilst waiting for it to check render loading page
  if (store.loggedIn === null) {
    return <div>Loading</div>;
  }
  //if not logged in redirect to log in page
  if (store.loggedIn === false) {
    return (
      <div>
        <Navigate to="/login" />
      </div>
    );
  }
  return <div>{props.children}</div>;
};

export default RequireAuth;
