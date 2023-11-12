import { Link } from 'react-router-dom';
import './Destionation.scss';
import SectionTitle from '../SectionTitle/SectionTitle';
import useFetch from '../../hooks/useFetch';
import { useSpring, animated } from 'react-spring';
const Destination = () => {
  const { data, loading } = useFetch('/general/products/countByCity');
  const animatedProps = useSpring({
    opacity: loading ? 0.6 : 1,
    filter: loading ? 'blur(1px)' : 'blur(0px)',
    config: { duration: 500 },
  });
  const allData = data.counts;
  return (
    <div className="destination">
      <div className="container">
        <SectionTitle title={'Top Destination'} />
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
                    <animated.div key={index} className={className} style={animatedProps}>
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
                               <li>
                              <Link to={`/entertainments/${item.city}`}>
                                <span>{item.entertainments}</span>
                                <span>Entertainments</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </animated.div>
                  );
                })}
            </div>
      </div>
    </div>
  );
};
export default Destination;
