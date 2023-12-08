import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import './ByRating.scss';

const ByRating = ({ onClick, style, state }) => {
  return (
    <ul className="inside_rating">
      {[5, 4, 3, 2, 1].map((star) => (
        <li key={star} onClick={() => onClick(star)} style={style}>
          {state?.guestRating > star ? (
            <AiFillStar fontSize="15" />
          ) : (
            <AiOutlineStar fontSize="15" />
          )}
        </li>
      ))}
    </ul>
  );
};

export default ByRating;
