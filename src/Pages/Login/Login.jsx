import React, { useContext, useState } from 'react';
import './Login.scss';
import bgSvg from '../../Media/register-bg.svg';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { mainContext } from '../../utils/ContextApi';
import { Helmet } from 'react-helmet';
const Login = () => {
  const { login, setLogin } = useContext(mainContext);

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!login.username || !login.password) {
        toast.error('Please enter the fields value');
        return;
      }

      const res = await axios.post('/auth/login', login, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.status === 200) {
        localStorage.setItem('img', res.data.img);
        toast.success(res.data.success);
        setLogin({
          username: '',
          password: '',
        });
        navigate('/');
      } else {
        console.log(res.info.error);
        return;
      }
    } catch (error) {
      toast.error(error.response.data.error.error);
    }
  };
  return (
    <>
      <Helmet>
        <title>Login as user</title>
      </Helmet>

      <div className="login-panel">
        <div className="container">
          <div className="bg-svg">
            <img src={bgSvg} alt="login bg" />
          </div>
          <div className="login-container">
            <h2>Login to your account</h2>
            <div className="form-side">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="input-fields">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        placeholder="username"
                        name="username"
                        id="username"
                        value={login.username}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="input-fields fields-position">
                      <label htmlFor="password">Password</label>
                      <input
                        type={visible ? 'text' : 'password'}
                        placeholder="password"
                        name="password"
                        id="password"
                        value={login.password}
                        onChange={handleChange}
                      />
                      {visible ? (
                        <AiOutlineEye
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => setVisible(false)}
                        />
                      ) : (
                        <AiOutlineEyeInvisible
                          className="absolute right-2 top-3 cursor-pointer"
                          onClick={() => setVisible(true)}
                        />
                      )}
                    </div>
                  </div>

                  <div className="col-12 ">
                    <button className="login-btn">Login account</button>
                  </div>
                  <div className="col-12">
                    <div className="remember-forgot-side">
                      <div className="forgot-link">
                        <Link
                          to="/user-forgot-password"
                          className="font-medium text-blue-500 hover:text-blue-500">
                          Forgot password?
                        </Link>
                      </div>
                      <Link to="/">Cancel</Link>
                    </div>
                  </div>
                  <div className="col-12">
                    <button class="google-login" type='button'>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMidYMid"
                        viewBox="0 0 256 262">
                        <path
                          fill="#4285F4"
                          d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"></path>
                        <path
                          fill="#34A853"
                          d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"></path>
                        <path
                          fill="#FBBC05"
                          d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"></path>
                        <path
                          fill="#EB4335"
                          d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"></path>
                      </svg>
                      Continue with Google
                    </button>
                  </div>
                  <div className="col-12">
                    <div className="text-side">
                      <h4>Not have any account?</h4>
                      <Link to="/user-register">Sign up</Link>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
