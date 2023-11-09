import React, { useState } from 'react';
import './SideBarSearch.scss';
import { BsCaretDownSquare } from 'react-icons/bs';
import DestinationSearchNav from '../SearchPageLeft/DestinationSearchNav/DestinationSearchNav';
import LocationSearchNav from '../SearchPageLeft/LocationSearchNav/LocationSearchNav';
import FiltersArea from '../SearchPageLeft/FiltersArea/FiltersArea';
const SideBarSearch = () => {
  const [activeSearchBar, setActiveSearchBar] = useState(false);
  const handleClick = () => {
    setActiveSearchBar(!activeSearchBar);
  };
  return (
    <div className="side_bar">
      <button className="side_bar_search_toggle" onClick={handleClick}>
        <BsCaretDownSquare
          className={`${activeSearchBar ? 'active_icon' : ''}`}
        />
        Sidebar
      </button>
      <div
        className={`side_bar_destinations ${
          activeSearchBar ? 'active_sidebar_destination' : ''
        }`}>
        <DestinationSearchNav />
        <LocationSearchNav />
        <FiltersArea />
      </div>
    </div>
  );
};

export default SideBarSearch;
