import { FaStar } from 'react-icons/fa';
import { Link, useLocation, useParams } from 'react-router-dom';
import './StarRating.scss';
const StarRating = ({ initialStar, isActiveStar, handleNavLinkClick }) => {
  const { search } = useLocation();
  const { type } = useParams();
  const newGuestParams = new URLSearchParams(search);
  const city = newGuestParams.get('city');
  const rooms = newGuestParams.get('rooms');
  const startDate = newGuestParams.get('startDate');
  const endDate = newGuestParams.get('endDate');
  const guests = newGuestParams.get('guests');
  const rating = newGuestParams.get('rating') || '';
  const min = newGuestParams.get('min') || 0;
  const max = newGuestParams.get('max') || 1500;
  const stars = newGuestParams.get('stars');
  const renderStar = (ratingValue = initialStar) => {
    const stars = [];
    for (let i = ratingValue; i >= 1; i--) {
      stars.push(<FaStar key={i} className="filled" />);
    }
    return stars;
  };

  return (
    <Link
      to={`/search/${type}?city=${city}&rooms=${rooms}&startDate=${startDate}&endDate=${endDate}&guests=${guests}&min=${min}&max=${max}&stars=${initialStar}${rating ? `&rating=${rating}` : ''}`}
      className={`star-rating ${isActiveStar ? 'active' : ''} ${
        stars == initialStar ? 'active' : ''
      }`}
      onClick={handleNavLinkClick}>
      <span className="outer-layer">{renderStar()}</span>
    </Link>
  );
};

export default StarRating;
