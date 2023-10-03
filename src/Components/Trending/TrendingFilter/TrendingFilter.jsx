import React, { useCallback, useState } from 'react';

const TrendingFilter = ({ onTabChange, dataes }) => {
  const [selected, setSelected] = useState(3);
  const activeTab = useCallback(
    (tab, index) => {
        setSelected(index);
      onTabChange(tab, index);
    },
    [setSelected, onTabChange]
  );
  return (
    <ul className="trending-filter-list">
      {dataes?.map((tab, index) => (
        <li
          key={index}
          className={`${selected === index ? 'active' : ''}`}
          onClick={() => activeTab(tab, index)}>
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default TrendingFilter;
