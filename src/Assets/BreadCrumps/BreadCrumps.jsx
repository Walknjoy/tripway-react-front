import React from 'react';
import './BreadCrumps.scss';
import { Link, useLocation } from 'react-router-dom';

const BreadCrumps = () => {
  const location = useLocation();

  const crumbs = location.pathname
    .split('/')
    .filter((crumb) => crumb !== '')
    .map((crumb) => {
      return (
        <div key={crumb} className="crumb">
          <Link to="/" id="return-back">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Bold"
              viewBox="0 0 24 24"
              width="16"
              height="16">
              <g fill="#999">
                <path d="M10.957,12.354a.5.5,0,0,1,0-.708l4.586-4.585a1.5,1.5,0,0,0-2.121-2.122L8.836,9.525a3.505,3.505,0,0,0,0,4.95l4.586,4.586a1.5,1.5,0,0,0,2.121-2.122Z" />
              </g>
            </svg>
            Return back
          </Link>
          <h3>
            <Link to="/">Home page</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 24 24"
              width="18"
              height="16">
              <g fill="#fff">
                <path d="M23.73,11.356l-5.154-5.087c-.581-.574-1.575-.167-1.575,.644v3.587H1.5c-.828,0-1.5,.671-1.5,1.5s.672,1.5,1.5,1.5h15.5v3.587c0,.811,.994,1.218,1.575,.644l5.154-5.087c.36-.356,.36-.932,0-1.288Z" />
              </g>
            </svg>
            <span>{crumb}</span>
          </h3>
        </div>
      );
    });
  return <div className="breadCrumbs">{crumbs}</div>;
};

export default BreadCrumps;
