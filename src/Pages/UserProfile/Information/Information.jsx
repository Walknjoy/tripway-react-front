import React from 'react';
import './Information.scss';
import useFetch from '../../../hooks/useFetch';
import { AiFillEdit } from 'react-icons/ai';
const Information = () => {
  const { data, loading } = useFetch('/users/user/profile');
  return (
    <>
      {loading ? (
        <p>loading....</p>
      ) : (
        <div className="information_area">
          <div className="infortmation_wrapper">
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
            <div className="input-fields-avatar">
              <label htmlFor="avatar" className="avatar-empty-label"></label>
              <div className="avatar-side">
                <span className="avatar-side-span">
                  <img src={data.img} alt={data?.username} />
                </span>
                <label htmlFor="file-input" className="avatar-upload">
                  <span>Upload a file</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept="image/*"
                    disabled={true}
                  />
                </label>
              </div>
            </div>
            <div className="some-fields">
              <input type="tel" id="tel" disabled={true} required />
              <label id="tel">{data.phone}</label>
            </div>
            <div className="btn-fields">
              <button>
                Uptade <AiFillEdit />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Information;
