import React from 'react';
import './Profile.scss';
import useFetch from '../../../hooks/useFetch';
import { Helmet } from 'react-helmet';
const Profile = () => {
  const { data, loading } = useFetch('/users/user/profile');
  return (
    <>
      <Helmet>
        <title>User-{data.username}</title>
      </Helmet>
      {loading ? (
        <p>loading....</p>
      ) : (
        <div className="profile_area">
          <div className="profile_wrapper">
            <div className="some-fields">
              <input type="text" id="username" disabled={true} required />
              <label id="username"> {data.username}</label>
            </div>
            <div className="some-fields">
              <input type="email" id="email" disabled={true} required />
              <label id="email">{data.email}</label>
            </div>
            <div className="some-fields">
              <input type="text" id="city" disabled={true} required />
              <label id="city">{data.city}</label>
            </div>
            <div className="some-fields">
              <input type="text" id="country" disabled={true} required />
              <label id="country">{data.country}</label>
            </div>
            <div className="some-fields">
              <input type="text" id="password" disabled={true} required />
              <label id="password">*************</label>
            </div>
            <div className="some-fields">
              <input type="tel" id="tel" disabled={true} required />
              <label id="tel">{data.phone}</label>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
