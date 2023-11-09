import React, { useContext } from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { mainContext } from '../../../../utils/ContextApi';

const GridViews = () => {
  const { grid, setGrid } = useContext(mainContext);
  console.log(grid);
  return (
    <div className="grid_btn">
      <button
        className={`${grid === false ? 'active' : ''}`}
        onClick={() => setGrid(false)}>
        <AiOutlineUnorderedList />
      </button>
      <button
        className={`${grid === true ? 'active' : ''}`}
        onClick={() => setGrid(true)}>
        <BsFillGrid3X3GapFill />
      </button>
    </div>
  );
};

export default GridViews;
