import { FaStar } from 'react-icons/fa';
import { Link, useLocation, useParams } from 'react-router-dom';
import './UserRating.scss';
const UserRating = ({ initialRating, isActive, handleNavLinkClick }) => {
  const { search } = useLocation();
  const { type } = useParams();
  const newGuestParams = new URLSearchParams(search);
  const city = newGuestParams.get('city');
  const rooms = newGuestParams.get('rooms');
  const startDate = newGuestParams.get('startDate');
  const endDate = newGuestParams.get('endDate');
  const guests = newGuestParams.get('guests');
  const rating = newGuestParams.get('rating') || '';
  const stars = newGuestParams.get('stars') || '';
  const min = newGuestParams.get('min') || 0;
  const max = newGuestParams.get('max') || 1500;
  const renderRating = (ratingValue = initialRating) => {
    const stars = [];
    for (let i = ratingValue; i >= 1; i--) {
      stars.push(<FaStar key={i} className="filled" />);
    }
    return stars;
  };

  return (
    <Link
      to={`/search/${type}?city=${city}&rooms=${rooms}&startDate=${startDate}&endDate=${endDate}&guests=${guests}&min=${min}&max=${max}${
        stars ? `&stars=${stars}` : ''
      }&rating=${initialRating} `}
      className={`user-rating ${isActive ? 'active' : ''} ${
        rating == initialRating ? 'active' : ''
      }`}
      onClick={handleNavLinkClick}>
      <span className="outer-layer">{renderRating()}</span>
    </Link>
  );
};

export default UserRating;
