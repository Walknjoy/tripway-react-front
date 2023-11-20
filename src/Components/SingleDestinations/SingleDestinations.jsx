import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import BreadCrumb from '../../Assets/BreadCrumbs/BreadCrumb';

const SingleDestinations = () => {
  const { city } = useParams();
  const { data } = useFetch(`/hotels?city=${city}`);
  return (
    <main id='main'> 
      <BreadCrumb/>
      <div>
        {data?.map((E) => {
          return <div>{E.city}</div>;
        })}
      </div>
    </main>
  );
};

export default SingleDestinations;
