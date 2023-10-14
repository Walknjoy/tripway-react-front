import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const SingleDestinations = () => {
  const { city } = useParams();
  const { data } = useFetch(`/hotels?city=${city}`);
  console.log(data);
  return (
    <div>
      {data?.map((E) => {
        return <div>{E.city}</div>;
      })}
    </div>
  );
};

export default SingleDestinations;
