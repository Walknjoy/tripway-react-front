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
