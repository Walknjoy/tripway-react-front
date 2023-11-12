import React, { useState } from 'react';
import './DestinationSearchNav.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
const DestinationSearchNav = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState({
    destination: '',
    type: 'Search Result',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDestination({ ...destination, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const queryParams = new URLSearchParams();
    Object.entries(destination).forEach(([key, value]) => {
      queryParams.set(key, value);
    });
    navigate(`/search?${queryParams.toString()}`, {
      state: {
        ...destination,
      },
    });
    setDestination({
      destination: '',
    });
  };

  return (
    <div className="destination_search_nav">
      <form action="" onSubmit={handleSubmit}>
        <div className="search_form">
          <label>Destination or Hotel Name</label>
          <div className="form-control_for_search">
            <input
              className="input input-alt"
              placeholder="Search..."
              required=""
              name="destination"
              value={destination.destination}
              onChange={handleChange}
              type="text"
            />
            <span className="input-border input-border-alt"></span>
          </div>
          <button type="submit">
            <AiOutlineSearch />
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default DestinationSearchNav;
