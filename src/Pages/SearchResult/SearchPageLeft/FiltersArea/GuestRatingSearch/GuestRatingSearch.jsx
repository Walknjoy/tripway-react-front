import { FaAngleDown } from 'react-icons/fa';
import './GuestRatingSearch.scss';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import UserRating from '../../../../../Assets/UserRating/UserRating';

const GuestRatingSearch = () => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);

  const [isActive, setIsActive] = useState(-1);
  const handleNavLinkClickActive = (index) => {
    setIsActive(index === isActive);
    queryParams.set('rating', index);
  };
  return (
    <div className="guest_rating_area">
      <button type="button">
        <span>Guest rating</span>
        <FaAngleDown />
      </button>
      {[...Array(5)]
        .map((_, index) => index + 1)
        .sort((a, b) => b - a)
        .map((initialRating, index) => (
          <UserRating
            key={index}
            initialRating={initialRating}
            isActive={isActive === initialRating}
            handleNavLinkClick={() => handleNavLinkClickActive(initialRating)}
          />
        ))}
    </div>
  );
};

export default GuestRatingSearch;
