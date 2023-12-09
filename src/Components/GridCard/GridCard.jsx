import './GridCard.scss';
import LazyLoadImg from '../../Assets/LazyLoadImg';
import Raiting from '../../Assets/Raiting/Raiting';
import { Link, useLocation } from 'react-router-dom';
import { BsDot } from 'react-icons/bs';
import { AiOutlineCheck } from 'react-icons/ai';

const GridCard = ({ products }) => {
  const { state } = useLocation();
  const guests = parseInt(state.options.adult + state.options.children);
  const rooms = parseInt(state.options.room);
  const startDateString = state.dates[0].startDate;
  const endDateString = state.dates[0].endDate;

  const startDate = new Date(startDateString);
  const endDate = new Date(endDateString);
  const timeDifference = endDate.getTime() - startDate.getTime();

  const nightCount = Math.ceil(timeDifference / (1000 * 3600 * 24));

  return (
    <>
      {products?.map((element) => {
        return (
          <div className="col-12" key={element?._id}>
            <div className="grid_card_wrapper">
              <figure className="grid_card_image">
                <LazyLoadImg
                  src={element.logo}
                  alt={element?.name}
                  width="200px"
                  height="200px"
                />
              </figure>
              <div className="grid_card_content">
                <div className="content_top">
                  <div className="first_line_left">
                    <div className="title_line_top">
                      <h3>{element?.name}</h3>
                    </div>
                    <div>
                      <Raiting
                        stars={element.rating}
                        reviews={element.reviews.length}
                      />
                    </div>
                    <div className="locations_side">
                      <Link to="">
                        <span>{element.city}</span>
                        <BsDot />
                        <span>Show on map</span>
                      </Link>
                      <BsDot />
                      <span>
                        {element.distance} from {element.address}
                      </span>
                      <BsDot />
                      <span>Metro access</span>
                    </div>
                  </div>
                  <div className="first_line_right">
                    <div className="rating_and_emations">
                      <span>
                        {' '}
                        {element?.rating === 1 ? 'Poor' : ''}
                        {element?.rating === 2 ? 'Fair' : ''}
                        {element?.rating === 3 ? 'Good' : ''}
                        {element?.rating === 4 ? 'Very Good' : ''}
                        {element?.rating === 5 ? 'Excellent' : ''}
                      </span>
                      <p>{element.rating}.0 / 5.0</p>
                    </div>
                  </div>
                </div>
                <div className="content_end">
                  <div className="content_end_left">
                    <h4>{element.title}</h4>
                    <ul className="content_end_left_list">
                      <li>1 large double bed</li>
                      <li>
                        <AiOutlineCheck /> Free cancellation
                      </li>
                      <li>
                        <AiOutlineCheck />{' '}
                        <strong>Online payment is possible</strong> – via the
                        Walknjoy
                      </li>
                    </ul>
                  </div>
                  <div className="content_end_right">
                    <ul className="content_end_list_count">
                      <span>Price for</span>
                      <li>
                        <strong>{guests} adults,</strong>
                      </li>
                      <li>
                        <strong> {nightCount} nights</strong>
                      </li>
                    </ul>
                    <div className="price_area">
                      {element?.percent === 0 ? (
                        <span>
                          AZN{' '}
                          {element.price.toFixed(2) *
                            nightCount *
                            guests *
                            rooms}
                        </span> // Display the original price
                      ) : (
                        <>
                          <del>
                            AZN{' '}
                            {(
                              (element?.price *
                                nightCount *
                                guests *
                                rooms *
                                element?.percent) /
                              100
                            ).toFixed(2)}
                          </del>
                          <br />
                          <span>
                            AZN{' '}
                            {(
                              element?.price * nightCount * guests * rooms -
                              (element?.price *
                                nightCount *
                                guests *
                                rooms *
                                element?.percent) /
                                100
                            ).toFixed(2)}
                          </span>{' '}
                          {/* Display the discounted price */}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default GridCard;
