import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../Hooks/useAuth';
import './Login.css'

const Login = () => {
  const { handleGoogleLogin } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const ridirect_url = location.state?.from || '/';
  const googleSigninHandler = () => {
    handleGoogleLogin()
      .then(result => {
        history.push(ridirect_url)
      })

  }
  return (
    <div>
      <div className="card login text-center">
        <div className="card-body">
          <h5 className="card-title">Log In</h5>
            <img className="img-fluid" src="https://i.pinimg.com/736x/52/2a/01/522a0187853113d584c2379b7761442a.jpg" alt="" />
          <button className="bg-info rounded my-2 p-3" onClick={googleSigninHandler}>Google Signing</button>
        </div>
      </div>
    </div>
  );
};

export default Login;