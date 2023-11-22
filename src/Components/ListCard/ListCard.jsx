import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import Raiting from '../../Assets/Raiting/Raiting.jsx';
import './ListCard.scss';

const ListCard = ({ products }) => {
    const urlParams = new URLSearchParams(window.location.search);

    // Get values from the URL
    const guests = parseInt(urlParams.get('guests'), 10)
    const rooms = parseInt(urlParams.get('rooms'), 10)
    const startDateString = urlParams.get('startDate');
    const endDateString = urlParams.get('endDate');

    // Convert date strings to Date objects
    const startDate = new Date(startDateString);
    const endDate = new Date(endDateString);

    // Calculate the difference in nights
    const timeDifference = endDate.getTime() - startDate.getTime();
    const nightCount = Math.ceil(timeDifference / (1000 * 3600 * 24));
    return (
        <>
            {products?.map((currElm) => {
                return (
                    <div className="col-12 col-lg-4 col-md-6" key={currElm?._id}>
                        <Link
                            to={`/singleproducts/${currElm._id}`}
                            className="trending_card">
                            <figure className="card-image">
                                <LazyLoadImage
                                    effect="blur"
                                    className="image-transition"
                                    src="https://mytravel.madrasthemes.com/wp-content/uploads/2022/02/img4-2-300x225.jpeg"
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
                                        <span>AZN {currElm.price.toFixed(2) * nightCount * guests * rooms}</span> // Display the original price
                                    ) : (
                                        <>
                                            <del>
                                                AZN{' '}
                                                {(
                                                    (currElm?.price * nightCount * guests * rooms * currElm?.percent) / 100).toFixed(2)}
                                            </del>
                                            <br />
                                            <span>AZN {(
                                                currElm?.price * nightCount * guests * rooms -
                                                ((currElm?.price * nightCount * guests * rooms * currElm?.percent) / 100)
                                            ).toFixed(2)}</span> {/* Display the discounted price */}
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
