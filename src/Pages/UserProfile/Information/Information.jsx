import React, { useEffect, useState } from 'react';
import './Information.scss';
import useFetch from '../../../hooks/useFetch';
import { AiFillEdit } from 'react-icons/ai';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Information = () => {
  const navigate = useNavigate();
  const { data, loading, reFetch } = useFetch('/users/user/profile');
  const [isEditing, setIsEditing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    city: '',
    country: '',
    phone: '',
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  useEffect(() => {
    if (!loading && data) {
      setFormData({
        username: data.username,
        city: data.city,
        country: data.country,
        phone: data.phone,
        img: data.img,
      });
    }
  }, [loading, data]);

  const handleEditClick = (e) => {
    e.preventDefault();
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('username', formData.username);
      formDataToSend.append('city', formData.city);
      formDataToSend.append('country', formData.country);
      formDataToSend.append('phone', formData.phone);
      if (selectedImage) {
        formDataToSend.append('img', selectedImage);
      }
      const res = await axios.put('/users/user/update', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (res.status === 200) {
        localStorage.setItem('img', res.data.img);
        setIsEditing(false);
        reFetch('/users/user/profile');
        navigate('/');
      }
    } catch (error) {
      console.error('Error updating user information:', error);
    }
  };

  return (
    <>
      {loading ? (
        <p>loading....</p>
      ) : (
        <div className="information_area">
          <form onSubmit={handleEdit}>
            <div className="infortmation_wrapper">
              <div className="some-fields">
                <input
                  type="text"
                  id="username"
                  name="username"
                  disabled={!isEditing}
                  value={isEditing ? formData.username : ''}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="username"> Username</label>
              </div>
              <div className="some-fields">
                <input
                  type="tel"
                  id="tel"
                  disabled={!isEditing}
                  name="phone"
                  value={isEditing ? formData.phone : ''}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="tel">Phone</label>
              </div>
              <div className="some-fields">
                <input
                  type="text"
                  id="city"
                  name="city"
                  disabled={!isEditing}
                  value={isEditing ? formData.city : ''}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="city">City</label>
              </div>
              <div className="some-fields">
                <input
                  type="text"
                  id="country"
                  name="country"
                  disabled={!isEditing}
                  value={isEditing ? formData.country : ''}
                  required
                  onChange={handleInputChange}
                />
                <label htmlFor="country">Country</label>
              </div>
              <div className="input-fields-avatar">
                <label htmlFor="avatar" className="avatar-empty-label"></label>
                <div className="avatar-side">
                  <span className="avatar-side-span">
                    {selectedImage ? (
                      <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Selected"
                      />
                    ) : (
                      <img src={data.img} alt={data?.username} />
                    )}
                  </span>
                  <label htmlFor="file-input" className="avatar-upload">
                    <span>Upload a file</span>
                    <input
                      type="file"
                      name="avatar"
                      id="file-input"
                      accept="image/*"
                      disabled={!isEditing}
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              </div>

              <div className="btn-fields">
                {isEditing ? (
                  <div className="save_cancel">
                    <button type="submit">Save</button>
                    <button onClick={() => setIsEditing(false)}>Cancel</button>
                  </div>
                ) : (
                  <button type="button" onClick={handleEditClick}>
                    Edit <AiFillEdit />
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Information;
