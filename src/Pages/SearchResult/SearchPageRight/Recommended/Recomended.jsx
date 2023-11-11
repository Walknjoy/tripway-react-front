import React, { useEffect, useState } from 'react';
import Button from './Button';
import { useNavigate } from 'react-router-dom';
import './Recomended.scss';
const Recomended = () => {
  let navigate = useNavigate();
  const [category, setCategory] = useState('all');
  useEffect(() => {}, [category]);

  function handleFilter(newCategory) {
    setCategory(newCategory);

    navigate(`/search/hotels?`);
  }
  return (
    <div className="recomended_areas">
      <div className="recomended_wrapper">
        <ul>
          <li>
            <Button title="All" onClickHandler={() => handleFilter('all')} />
          </li>
          <li>
            <Button
              title="Popularity"
              onClickHandler={() => handleFilter('popularity')}
            />
          </li>
          <li>
            <Button
              title="Latest"
              onClickHandler={() => handleFilter('latest')}
            />
          </li>
          <li>
            <Button
              title="low to high"
              onClickHandler={() => handleFilter('low to high')}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Recomended;
