import './navigation.scss';
import { Link } from 'react-router-dom';
import authStore from '../../stores/authStore';
import { useEffect, useState } from 'react';

const Navigation = () => {
  const store = authStore();

  const [userInfo, setUserInfo] = useState(null);
  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
    }
  }, []);
  return (
    <div className="navSection">
      <div className="logo">
        <Link to="/" className="listItem">
          <span>records</span>
        </Link>
      </div>
      <div className="icons">
        {userInfo ? (
          <>
            <div className="user">
              {/* <img src="" alt="" /> */}
              <span>{userInfo.name}</span>
            </div>
          </>
        ) : (
          <span>Business Name</span>
        )}
        <Link className="logOutLink" to="/logout">
          <button className="logOut">Log Out</button>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
