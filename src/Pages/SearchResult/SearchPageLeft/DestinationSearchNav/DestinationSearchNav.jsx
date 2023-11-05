import React from 'react';
import './DestinationSearchNav.scss';
import { AiOutlineSearch } from 'react-icons/ai';
const DestinationSearchNav = () => {
  return (
    <div className="destination_search_nav">
      <form action="">
        <div className="search_form">
          <label>Destination or Hotel Name</label>
          <div className="form-control_for_search">
            <input
              className="input input-alt"
              placeholder="Search..."
              required=""
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
