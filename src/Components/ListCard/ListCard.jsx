import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useLocation, useParams } from 'react-router-dom';
import Raiting from '../../Assets/Raiting/Raiting.jsx';
import './ListCard.scss';

const ListCard = ({ products }) => {
  const { search } = useLocation();
  const searchQuery = new URLSearchParams(search);
  const guests = parseInt(searchQuery.get('guests')) || 1;
  const rooms = parseInt(searchQuery.get('rooms')) || 1;
  const startDateString = searchQuery.get('startDate');
  const endDateString = searchQuery.get('endDate');

  const parseDateString = (dateString) =>
    dateString?.split('-')?.reverse()?.join('-');
    
  const nightCount = Math.ceil(
    (new Date(parseDateString(endDateString)) -
      new Date(parseDateString(startDateString))) /
      (1000 * 3600 * 24)
  );

  const { type } = useParams();

  return (
    <>
      {products?.map((currElm) => {
        return (
          <div className="col-12 col-lg-4 col-md-6" key={currElm?._id}>
            <Link to={`/${type}/${currElm.name}`} className="trending_card">
              <figure className="card-image">
                <LazyLoadImage
                  effect="blur"
                  className="image-transition"
                  src={currElm.logo}
                  alt={currElm?.name}
                />
              </figure>
              <article className="card-content">
                <h3 className="hotel-title">{currElm.name}</h3>
                <h3 className="title">{currElm.title}</h3>
                <div className="city">
                  <p>
                    {currElm?.city},{currElm?.address}
                  </p>
                </div>
                <Raiting
                  stars={currElm.rating}
                  reviews={currElm.reviews.length}
                />
                <div className="star-review">
                  <p>{currElm.rating}.0 / 5.0</p>
                  <span>
                    {currElm?.rating === 1 ? 'Poor' : ''}
                    {currElm?.rating === 2 ? 'Fair' : ''}
                    {currElm?.rating === 3 ? 'Good' : ''}
                    {currElm?.rating === 4 ? 'Very Good' : ''}
                    {currElm?.rating === 5 ? 'Excellent' : ''}
                  </span>
                </div>

                <div className="price_area">
                  {currElm?.percent === 0 ? (
                    <span>
                      AZN{' '}
                      {currElm.price.toFixed(2) * nightCount * guests * rooms}
                    </span>
                  ) : (
                    <>
                      <del>
                        AZN{' '}
                        {(
                          (currElm?.price *
                            nightCount *
                            guests *
                            rooms *
                            currElm?.percent) /
                          100
                        ).toFixed(2)}
                      </del>
                      <br />
                      <span>
                        AZN{' '}
                        {(
                          currElm?.price * nightCount * guests * rooms -
                          (currElm?.price *
                            nightCount *
                            guests *
                            rooms *
                            currElm?.percent) /
                            100
                        ).toFixed(2)}
                      </span>{' '}
                    </>
                  )}
                </div>
              </article>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ListCard;
