import React, { useEffect } from 'react';
import './UserProfile.scss';
import useFetch from '../../hooks/useFetch';

function UserProfile() {
  const { data, loading, error, fetchData } = useFetch("/users/user/profile");
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <img src={data.img} alt="Profile" />
          <h1>{data.username}</h1>
          <h1>{data.email}</h1>
          <h1>{data.country}</h1>
          <h1>{data.city}</h1>
          <h1>{data.phone}</h1>
        </>
      )}
    </div>
  );
}

export default UserProfile;
