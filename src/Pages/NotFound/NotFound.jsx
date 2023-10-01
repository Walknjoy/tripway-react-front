import React from 'react';
import './NotFound.scss';
import errorSvg from '../../Media/404-error-img.svg';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="not_found">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="error_text">
              <h3>404</h3>
              <h6>Looks like you're lost </h6>
              <p>We can’t seem to find the page you’re looking for </p>
              <Link to="/">
                Home
              </Link>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="error_image">
              <img src={errorSvg} alt="errorimage" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
