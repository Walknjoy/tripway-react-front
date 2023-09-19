import React from 'react';

const TrendingFilter = () => {
  return (
    <ul className="trending-filter-list">
      <li>
        <button className="active">Entertainment</button>
      </li>
      <li>
        <button>Hotel</button>
      </li>

      <li>
        <button>Rental</button>
      </li>
      <li>
        <button>Tour</button>
      </li>
    </ul>
  );
};

export default TrendingFilter;
