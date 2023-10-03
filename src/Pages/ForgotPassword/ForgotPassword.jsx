import React, { useState } from 'react';
import './ForgotPassword.scss';
import bgSvg from '../../Media/register-bg.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post(
        '/auth/forgot-password',
        { email: email },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        }
      );
      if (res.status === 200) {
        toast.success(res.data.success);
        navigate('/user-login');
        setEmail('');
      } else {
        toast.error(res.data.error);
        return;
      }
    } catch (error) {
      toast.error(error.response.data.error.error);
    }
  };
  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <div className="forgot-panel">
        <div className="container">
          <div className="bg-svg">
            <img src={bgSvg} alt="forgot bg" />
          </div>
          <div className="forgot-container">
            <h2>Recover you user password</h2>
            <div className="form-side">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12">
                    <div className="input-fields">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        placeholder="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => {
                          setEmail(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-12 ">
                    <button className="recovery-btn" type="submit">
                      Recover Password
                    </button>
                  </div>
                  <div className="col-12">
                    <div className="text-side">
                      <h4>Remember your password?</h4>
                      <Link to="/user-login">Sign in</Link>
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

export default ForgotPassword;
