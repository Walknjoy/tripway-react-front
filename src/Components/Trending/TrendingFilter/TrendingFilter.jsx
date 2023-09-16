import React from 'react';

const TrendingFilter = () => {
  return (
    <ul className="trending-filter-list">
      <li>
        <button className="active">Tour</button>
      </li>
      <li>
        <button>Hotel</button>
      </li>
      <li>
        <button>Activity</button>
      </li>
      <li>
        <button>Rental</button>
      </li>
      <li>
        <button>Car</button>
      </li>
    </ul>
  );
};

export default TrendingFilter;
