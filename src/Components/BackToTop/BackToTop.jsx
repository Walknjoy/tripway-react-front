import React, { useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import './BackToTop.scss';
const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 10) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return (
    <button
      className={`backtotop ${visible ? 'visible' : ''}`}
      onClick={scrollToTop}>
      <FaAngleUp />
    </button>
  );
};

export default BackToTop;
