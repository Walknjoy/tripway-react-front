import React from 'react';
import './Category.scss';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';
const Categories = () => {
  return (
    <div className="categories">
      <h4>Categories</h4>
      <ul className="category_list">
        <li>
          <Link to="">
            <FaAngleRight />
            <span> Appart</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
