import React, { useCallback, useContext } from 'react';
import { BsFillGrid3X3GapFill } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { mainContext } from '../../../../utils/ContextApi';

const GridViews = () => {
  const { grid, setGrid } = useContext(mainContext);
  const handleGridTrue = useCallback(() => {
    setGrid(true);
    console.log('true')

  }, [setGrid]);
  const handleGridFalse = useCallback(() => {
    setGrid(false);
    console.log('false')
  }, [setGrid]);

  return (
    <div className="grid_btn">
      <button
        className={`${grid === false ? 'active' : ''}`}
        onClick={handleGridFalse}>
        <AiOutlineUnorderedList />
      </button>
      <button
        className={`${grid === true ? 'active' : ''}`}
        onClick={handleGridTrue}>
        <BsFillGrid3X3GapFill />
      </button>
    </div>
  );
};

export default GridViews;
