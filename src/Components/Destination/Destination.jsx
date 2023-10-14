import { Link } from 'react-router-dom';
import './Destionation.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import useFetch from '../../hooks/useFetch';
const Destination = () => {
  const { data, loading } = useFetch('/general/products/countByCity');
  const allData = data.counts;
  return (
    <div className="destination">
      <div className="container">
        <SectionTitle title={'Top Destination'} />
        {loading ? (
          <p>loading....</p>
        ) : (
          <>
            <div className="row">
              {allData
                ?.filter((item) =>
                  [
                    'Baku',
                    'Ganja',
                    'Lankaran',
                    'Ismayilli',
                    'Gabala',
                    'Oguz',
                  ].includes(item.city)
                )
                .slice(0, 6)
                .map((item, index) => {
                  const className =
                    index === 0 || index === 1
                      ? 'col-12 col-lg-6 col-md-6'
                      : 'col-12 col-lg-3 col-md-6';
                  const id = `destination-bg-${index + 1}`;

                  return (
                    <div key={index} className={className}>
                      <div className="destination_card" id={id}>
                        <div className="destination-content">
                          <Link to="" className="destination-city">
                            {item.city}
                          </Link>
                          <ul className="destination-dropdown">
                            <li>
                              <Link to={`/hotels/${item.city}`}>
                                <span>{item.hotels}</span>
                                <span>Hotel</span>
                              </Link>
                            </li>
                            <li>
                              <Link to={`/tours/${item.city}`}>
                                <span>{item.tours}</span>
                                <span>Tours</span>
                              </Link>
                            </li>
                            <li>
                              <Link to={`/cars/${item.city}`}>
                                <span>{item.cars}</span>
                                <span>Cars</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default Destination;
