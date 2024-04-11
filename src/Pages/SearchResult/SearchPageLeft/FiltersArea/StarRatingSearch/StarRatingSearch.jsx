import { FaAngleDown } from 'react-icons/fa';
import './StarRatingSearch.scss';
import StarRating from '../../../../../Assets/StarRating/StarRating';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
const StarRatingSearch = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const [isActiveStar, setIsActiveStar] = useState(-1);
  const handleNavLinkClick = (index) => {
    setIsActiveStar(index === isActiveStar);
    queryParams.set('star', index);
  };
  return (
    <div className="star_rating_area">
      <button type="button">
        <span>Star rating</span>
        <FaAngleDown />
      </button>
      {[...Array(5)]
        .map((_, index) => index + 1)
        .sort((a, b) => b - a)
        .map((initialStar, index) => (
          <StarRating
            key={index}
            initialStar={initialStar}
            isActiveStar={isActiveStar === initialStar}
            handleNavLinkClick={() => handleNavLinkClick(initialStar)}
          />
        ))}
    </div>
  );
};

export default StarRatingSearch;
