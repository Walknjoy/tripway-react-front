import { FaAngleDown } from 'react-icons/fa';
import './GuestRatingSearch.scss';

const GuestRatingSearch = () => {
  return (
    <div className="star_rating_area">
      <button type="button">
        <span>Star rating</span>
        <FaAngleDown />
      </button>
      <ul className="inside_rating_guest"></ul>
    </div>
  );
};

export default GuestRatingSearch;
