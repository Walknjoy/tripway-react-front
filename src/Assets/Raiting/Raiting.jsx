import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsStarHalf } from 'react-icons/bs';
import './Raiting.scss';
const Raiting = ({ stars, reviews }) => {
  const RaitingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <AiFillStar className="star-icon" />
        ) : stars >= number ? (
          <BsStarHalf className="star-icon" />
        ) : (
          <AiOutlineStar className="star-icon" />
        )}
      </span>
    );
  });
  return (
    <div className="raiting_star">
      {RaitingStar}
      {reviews ? <span>({reviews} review)</span> : <></>}
    </div>
  );
};

export default Raiting;
