import React from 'react';
import { BsFillGrid3X3GapFill, BsListUl } from 'react-icons/bs';
import { useFilterContext } from '../../../utils/FilterContext';

const GridViews = () => {
  const { grid_view, setGridView,setListView } = useFilterContext();
  return (
    <div className="grid_btn">
      <button className={`${!grid_view ? 'active' : ''} `} onClick={setListView}>
        <BsListUl />
      </button>
      <button className={`${grid_view ? 'active' : ''}`} onClick={setGridView}>
        <BsFillGrid3X3GapFill />
      </button>
    </div>
  );
};

export default GridViews;
