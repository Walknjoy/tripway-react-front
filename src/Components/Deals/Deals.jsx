import React from 'react';
import './Deals.scss';
import DealsCard from './DealsCard/DealsCard';

const Deals = () => {
  return (
    <div className="deals-section">
      <div className="container">
        <div className="deals-title">
          <h3>Today's top Deals</h3>
          <div className="horizantal"></div>
        </div>
        <div className="card-area">
          <DealsCard />
        </div>
      </div>
    </div>
  );
};

export default Deals;
