import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import PageTitle from '../PageTitle/PageTitle';

const SingleDestinations = () => {
  const { city } = useParams();
  const { data } = useFetch(`/hotels?city=${city}`);
  console.log(data);
  return (
    <div>
      <PageTitle title={city}/>
      {data?.map((E) => {
        return <div>{E.city}</div>;
      })}
    </div>
  );
};

export default SingleDestinations;
