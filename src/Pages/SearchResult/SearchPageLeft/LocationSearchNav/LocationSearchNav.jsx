import React from 'react';
import './LocationSearchNav.scss';
import { Link } from 'react-router-dom';
import LazyLoadImg from '../../../../Assets/LazyLoadImg';
import map from '../../../../Media/image/map.jpg';
const LocationSearchNav = () => {
  return (
    <div className="location_image">
      <Link>
        <LazyLoadImg src={map} height="134px" width="100%" />
      </Link>
    </div>
  );
};

export default LocationSearchNav;
