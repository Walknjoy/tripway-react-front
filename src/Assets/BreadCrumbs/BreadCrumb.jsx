import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './BreadCrumb.scss';
import { FaAngleRight } from 'react-icons/fa';
import { ROUTES } from '../../Routes/Routes';
const BreadCrumb = () => {
  const breadcrumbs = useBreadcrumbs(ROUTES);
  const { pathname } = useLocation();
  return (
    <div
      className={`breadCrumbs ${
        pathname === '/about' || pathname === '/blog' ? 'othersBreadcrumbs' : ''
      }`}>
      <div className="container">
        <ul className="breadcrumb-link">
          {breadcrumbs.map(({ match, breadcrumb }, index) => {
            return (
              <li key={index}>
                {index === breadcrumbs.length - 1 ? (
                  <span
                    className={
                      match.pathname === pathname ? 'breadcrumb-active' : ''
                    }>
                    {match.pathname === '/'
                      ? 'Home'
                      : breadcrumb.props.children.replace(/%20/g, " ")}
                  </span>
                ) : (
                  <Link to={match.pathname}>
                    {match.pathname === '/'
                      ? 'Home'
                      : breadcrumb.props.children.replace(/%20/g, " ")}
                    <FaAngleRight />
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default BreadCrumb;
