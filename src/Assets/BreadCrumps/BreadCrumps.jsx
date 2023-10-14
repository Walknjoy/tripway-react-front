import React from 'react';
import './BreadCrumps.scss';
import { Link, useLocation } from 'react-router-dom';
import {AiOutlineArrowRight} from 'react-icons/ai';
const BreadCrumps = () => {
  const location = useLocation();

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      return (
        <div key={crumb} className="crumb">
          <h3>
            <Link to="/">Home page</Link>
            <AiOutlineArrowRight />
            <span>{crumb}</span>
          </h3>
        </div>
      );
    });
  return <div className="breadCrumbs">{crumbs}</div>;
};

export default BreadCrumps;
