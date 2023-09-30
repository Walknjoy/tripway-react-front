import React, { useCallback, useContext, useState } from 'react';
import './NewPassword.scss';
import bgSvg from '../../Media/register-bg.svg';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { mainContext } from '../../utils/ContextApi';
import axios from 'axios';
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
const NewPassword = () => {
  const navigate = useNavigate();
  const {
    passwordVisible,
    setConfirmPasswordVisible,
    setPasswordVisible,
    confirmPasswordVisible,
  } = useContext(mainContext);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const togglePasswordVisibility = useCallback(
    (field) => {
      if (field === 'password') {
        setPasswordVisible(!passwordVisible);
      } else if (field === 'confirmPassword') {
        setConfirmPasswordVisible(!confirmPasswordVisible);
      }
    },
    [
      passwordVisible,
      setConfirmPasswordVisible,
      setPasswordVisible,
      confirmPasswordVisible,
    ]
  );
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const res = await axios.post("/auth/user/reset-password", {
        "password": password,
        "confirmPassword": confirmPassword
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })
      if(res.status === 200){
        toast.success(res.data.success)
        navigate("/user-login")
      }
      else{
        toast.error(res.data.error)
        return;
      }
    }catch (error) {
      toast.error(error.response.data.error.error)
    }
  };

  return (
    <div className="newPassword_panel">
      <div className="container">
        <div className="bg-svg">
          <img src={bgSvg} alt="register bg" />
        </div>
        <div className="newPassword-container">
          <h2>Reset your password</h2>
          <div className="form-side">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-12 ">
                  <div className="input-fields fields-position">
                    <label htmlFor="password">Password</label>
                    <input
                      type={passwordVisible ? 'text' : 'password'}
                      placeholder="password"
                      name="password"
                      id="password"
                      value={password}
                      onChange={(e)=>setPassword(e.target.value)}
                    />
                    {passwordVisible ? (
                      <AiOutlineEye
                        onClick={() => togglePasswordVisibility('password')}
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        onClick={() => togglePasswordVisibility('password')}
                      />
                    )}
                  </div>
                </div>
                <div className="col-12">
                  <div className="input-fields fields-position">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                      type={confirmPasswordVisible ? 'text' : 'password'}
                      placeholder="password"
                      name="confirmPassword"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                    {confirmPasswordVisible ? (
                      <AiOutlineEye
                        onClick={() =>
                          togglePasswordVisibility('confirmPassword')
                        }
                      />
                    ) : (
                      <AiOutlineEyeInvisible
                        onClick={() =>
                          togglePasswordVisibility('confirmPassword')
                        }
                      />
                    )}
                  </div>
                </div>
                <div className="col-12 ">
                  <button className="reset-btn" type="submit">
                    Reset Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
