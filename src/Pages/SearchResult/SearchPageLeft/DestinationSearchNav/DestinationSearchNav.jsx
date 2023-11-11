import React, { useCallback, useContext, useEffect, useState } from 'react';
import './DestinationSearchNav.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import useFetch from '../../../../hooks/useFetch';
import { mainContext } from '../../../../utils/ContextApi';
import { useLocation, useNavigate } from 'react-router-dom';
const DestinationSearchNav = () => {
  const { filterList, setFilteredList } = useContext(mainContext);
  const navigate = useNavigate();
  const { data } = useFetch('/hotels');
  const [destination, setDestination] = useState({
    destination: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDestination({ ...destination, [name]: value });
  };

  const handleFilter = () => {
    const searchDestinationData = data.filter((hotel) =>
      hotel?.name?.includes(destination.destination)
    );
    setFilteredList(searchDestinationData);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilter();
    navigate(`/search/hotels?destination=${destination.destination}`);
    setDestination({
      destination: '',
    });
  };

  console.log('destination', filterList);
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
