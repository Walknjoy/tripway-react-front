import React, { useState } from 'react';
import './ForgotPassword.scss';
import bgSvg from '../../Media/register-bg.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
  const [forgot, setForgot] = useState({
    email: '',
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { value, name } = e.target;
    setForgot({
      ...forgot,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const newData = new FormData();
      newData.append('email', forgot.email);
      const res = await axios.post('/auth/forget-password', newData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        method: 'POST',
      });
      if (res.status === 200) {
        toast.success(res.data.success);
        navigate('/user-login');
        setForgot({
          email: '',
        });
      }
    } catch (error) {
      toast.error(error.response.data.error.error);
    }
  };
  return (
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
                      value={forgot.email}
                      onChange={handleChange}
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
  );
};

export default ForgotPassword;
