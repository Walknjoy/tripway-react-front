import React from 'react';
import './SectionTitle.scss';
const SectionTitle = ({ title }) => {
  return (
    <div className="section_title">
      <h3>{title}</h3>
      <div className="horizantal"></div>
    </div>
  );
};

export default SectionTitle;
