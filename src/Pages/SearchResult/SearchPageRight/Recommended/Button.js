import React from 'react';

const Button = ({ onClickHandler, value, title }) => {
  return (
    <button onClick={onClickHandler} value={value} className="recomended_btns">
      {title}
    </button>
  );
};

export default Button;
