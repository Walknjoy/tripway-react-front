import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import './BreadCrumb.scss';
import { ROUTES } from '../../Routes/Routes';
const BreadCrumb = () => {
  const breadcrumbs = useBreadcrumbs(ROUTES);
  const location = useLocation();

  console.log(breadcrumbs);
  return (
    <div id="breadCrumbs">
      <nav className="breadcrumb-link">
        <div class="homeBread">
          <Link to="/">Home</Link>
        </div>
        {breadcrumbs.map(({ match, breadcrumb }) => (
            
          <Link
            key={match.url}
            to={match.url}
            className={
              match.pathname === location.pathname
                ? 'breadcrumb-active'
                : 'breadcrumb-not-active'
            }>
            {breadcrumb} 
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default BreadCrumb;
